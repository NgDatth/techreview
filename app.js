/**
 * App.js - Logic chính của ứng dụng
 * Xử lý hiển thị, tìm kiếm, lọc, bookmark, dark mode và comments
 */

// ============================
// Utility Functions
// ============================

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("vi-VN", options)
}

function createRatingStars(rating) {
  return `
    <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    <span>${rating.toFixed(1)}</span>
  `
}

function calculateReadingTime(content) {
  const text = content.replace(/<[^>]*>/g, "")
  const words = text.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return minutes
}

function getViewCount(reviewId) {
  let views = localStorage.getItem(`views_${reviewId}`)
  if (!views) {
    views = Math.floor(Math.random() * 5000) + 500
    localStorage.setItem(`views_${reviewId}`, views)
  }
  return Number.parseInt(views)
}

function incrementViewCount(reviewId) {
  let views = getViewCount(reviewId)
  views++
  localStorage.setItem(`views_${reviewId}`, views)
  return views
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

function handleImageError(img) {
  const wrapper = img.parentElement
  wrapper.innerHTML = `
    <div class="image-fallback" style="width: 100%; height: 100%;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    </div>
  `
}

function setupLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.removeAttribute("data-src")
          observer.unobserve(img)
        }
      })
    },
    { rootMargin: "50px 0px", threshold: 0.01 },
  )
  images.forEach((img) => imageObserver.observe(img))
}

function showToast(message) {
  const existingToast = document.querySelector(".toast")
  if (existingToast) existingToast.remove()

  const toast = document.createElement("div")
  toast.className = "toast"
  toast.textContent = message
  document.body.appendChild(toast)

  setTimeout(() => toast.classList.add("show"), 10)
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

// ============================
// Dark Mode
// ============================

function toggleDarkMode() {
  const html = document.documentElement
  const isDark = html.getAttribute("data-theme") === "dark"

  if (isDark) {
    html.removeAttribute("data-theme")
    localStorage.setItem("theme", "light")
  } else {
    html.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark")
  }
  updateDarkModeIcons()
}

function updateDarkModeIcons() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark"
  document.querySelectorAll(".sun-icon, .sun-icon-mobile").forEach((icon) => {
    icon.style.display = isDark ? "none" : "block"
  })
  document.querySelectorAll(".moon-icon").forEach((icon) => {
    icon.style.display = isDark ? "block" : "none"
  })
}

function initDarkMode() {
  const savedTheme = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark")
  }
  updateDarkModeIcons()
}

// ============================
// Scroll to Top
// ============================

function initScrollToTop() {
  const btn = document.getElementById("scrollTopBtn")
  if (!btn) return

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible")
    } else {
      btn.classList.remove("visible")
    }
  })

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// ============================
// Reading Progress
// ============================

function initReadingProgress() {
  const progressBar = document.querySelector(".reading-progress")
  if (!progressBar) return

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrollTop / docHeight) * 100
    progressBar.style.width = progress + "%"
  })
}

// ============================
// Bookmarks
// ============================

function getBookmarks() {
  const bookmarks = localStorage.getItem("bookmarks")
  return bookmarks ? JSON.parse(bookmarks) : []
}

function saveBookmarks(bookmarks) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  updateBookmarkCounts()
}

function toggleBookmark(reviewId, event) {
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  const bookmarks = getBookmarks()
  const index = bookmarks.indexOf(reviewId)

  if (index > -1) {
    bookmarks.splice(index, 1)
    showToast("Đã xóa khỏi danh sách lưu")
  } else {
    bookmarks.push(reviewId)
    showToast("Đã lưu bài viết")
  }

  saveBookmarks(bookmarks)
  updateBookmarkButtons()
  renderBookmarksList()
}

function isBookmarked(reviewId) {
  return getBookmarks().includes(reviewId)
}

function updateBookmarkCounts() {
  const count = getBookmarks().length
  const countElements = document.querySelectorAll("#bookmarkCount, #bookmarkCountMobile")
  countElements.forEach((el) => {
    if (el) el.textContent = count
  })
}

function updateBookmarkButtons() {
  document.querySelectorAll(".card-bookmark-btn").forEach((btn) => {
    const reviewId = btn.dataset.reviewId
    if (isBookmarked(reviewId)) {
      btn.classList.add("bookmarked")
    } else {
      btn.classList.remove("bookmarked")
    }
  })

  const articleBtn = document.querySelector(".article-bookmark-btn")
  if (articleBtn) {
    const reviewId = articleBtn.dataset.reviewId
    if (isBookmarked(reviewId)) {
      articleBtn.classList.add("bookmarked")
      articleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        Đã lưu
      `
    } else {
      articleBtn.classList.remove("bookmarked")
      articleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        Lưu bài viết
      `
    }
  }
}

function toggleBookmarksPanel() {
  const panel = document.getElementById("bookmarksPanel")
  const overlay = document.getElementById("bookmarksOverlay")

  if (panel && overlay) {
    panel.classList.toggle("active")
    overlay.classList.toggle("active")
    if (panel.classList.contains("active")) {
      renderBookmarksList()
    }
  }
}

function renderBookmarksList() {
  const list = document.getElementById("bookmarksList")
  if (!list) return

  const bookmarks = getBookmarks()

  if (bookmarks.length === 0) {
    list.innerHTML = `
      <div class="bookmarks-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <p>Chưa có bài viết nào được lưu</p>
      </div>
    `
    return
  }

  const bookmarkedReviews = window.reviews.filter((r) => bookmarks.includes(r.id))

  list.innerHTML = bookmarkedReviews
    .map(
      (review) => `
    <div class="bookmark-item">
      <a href="detail.html?id=${review.id}" style="display: flex; gap: 1rem; text-decoration: none; color: inherit; flex: 1;">
        <img src="${review.image}" alt="${review.title}" class="bookmark-item-image" onerror="this.src='/interconnected-tech.png'">
        <div class="bookmark-item-content">
          <h4 class="bookmark-item-title">${review.title}</h4>
          <span class="bookmark-item-category">${review.categoryLabel}</span>
        </div>
      </a>
      <button class="bookmark-remove-btn" onclick="toggleBookmark('${review.id}', event)" title="Xóa">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `,
    )
    .join("")
}

// ============================
// Comments
// ============================

function getComments(reviewId) {
  const allComments = localStorage.getItem("comments")
  const comments = allComments ? JSON.parse(allComments) : {}
  return comments[reviewId] || []
}

function saveComment(reviewId, comment) {
  const allComments = localStorage.getItem("comments")
  const comments = allComments ? JSON.parse(allComments) : {}

  if (!comments[reviewId]) {
    comments[reviewId] = []
  }

  comments[reviewId].unshift(comment)
  localStorage.setItem("comments", JSON.stringify(comments))
}

function submitComment(event) {
  event.preventDefault()

  const reviewId = getReviewIdFromUrl()
  const nameInput = document.getElementById("commentName")
  const contentInput = document.getElementById("commentContent")

  if (!nameInput || !contentInput || !reviewId) return

  const comment = {
    id: Date.now().toString(),
    name: nameInput.value.trim(),
    content: contentInput.value.trim(),
    date: new Date().toISOString(),
  }

  saveComment(reviewId, comment)
  nameInput.value = ""
  contentInput.value = ""
  renderComments(reviewId)
  showToast("Đã đăng bình luận")
}

function renderComments(reviewId) {
  const commentsList = document.getElementById("commentsList")
  const commentCount = document.getElementById("commentCount")

  if (!commentsList) return

  const comments = getComments(reviewId)

  if (commentCount) {
    commentCount.textContent = comments.length
  }

  if (comments.length === 0) {
    commentsList.innerHTML = `
      <div class="comments-empty">
        <p>Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
      </div>
    `
    return
  }

  commentsList.innerHTML = comments
    .map(
      (comment) => `
    <div class="comment-item">
      <div class="comment-header">
        <span class="comment-author">${escapeHtml(comment.name)}</span>
        <span class="comment-date">${formatDate(comment.date)}</span>
      </div>
      <p class="comment-content">${escapeHtml(comment.content)}</p>
    </div>
  `,
    )
    .join("")
}

function escapeHtml(text) {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

// ============================
// Share Functions
// ============================

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=400")
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(document.title)
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank", "width=600,height=400")
}

function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "width=600,height=400")
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast("Đã sao chép liên kết!")
  })
}

// ============================
// Card Generation
// ============================

function createReviewCard(review, index = 0) {
  const bookmarked = isBookmarked(review.id)
  const readingTime = calculateReadingTime(review.content)
  const views = getViewCount(review.id)
  const isTrending = views > 3000

  return `
    <a href="detail.html?id=${review.id}" class="review-card" style="animation-delay: ${index * 0.1}s">
      <div class="card-image-wrapper">
        <img 
          class="card-image" 
          data-src="${review.image}" 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23f1f5f9' width='400' height='250'/%3E%3C/svg%3E"
          alt="${review.title}"
          loading="lazy"
          onerror="handleImageError(this)"
        >
        <span class="card-category">${review.categoryLabel}</span>
        ${
          isTrending
            ? `
          <span class="card-trending">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 7.5v5.5l4 2.5-1 1.5-5-3V7.5h2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/></svg>
            Hot
          </span>
        `
            : ""
        }
        <button class="card-bookmark-btn ${bookmarked ? "bookmarked" : ""}" data-review-id="${review.id}" onclick="toggleBookmark('${review.id}', event)" title="${bookmarked ? "Bỏ lưu" : "Lưu bài viết"}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
      <div class="card-content">
        <h3 class="card-title">${review.title}</h3>
        <p class="card-description">${review.description}</p>
        <div class="card-meta">
          <span class="card-rating">${createRatingStars(review.rating)}</span>
          <span class="card-date">${formatDate(review.date)}</span>
        </div>
        <div class="card-stats">
          <span class="card-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${readingTime} phút đọc
          </span>
          <span class="card-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            ${formatNumber(views)}
          </span>
        </div>
      </div>
    </a>
  `
}

function createSkeletonCard() {
  return `
    <div class="skeleton-card">
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton-content">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
  `
}

function showSkeletonLoading(count = 6) {
  const grid = document.getElementById("reviewsGrid")
  if (!grid) return

  grid.innerHTML = Array(count).fill(createSkeletonCard()).join("")
}

// ============================
// Display Functions
// ============================

let currentPage = 1
const itemsPerPage = 9
let allFilteredReviews = []

function displayReviews(reviewsList, reset = true) {
  const grid = document.getElementById("reviewsGrid")
  const noResults = document.getElementById("noResults")
  const loadMoreContainer = document.getElementById("loadMoreContainer")

  if (!grid) return

  if (reset) {
    currentPage = 1
    allFilteredReviews = reviewsList
  }

  if (reviewsList.length === 0) {
    grid.innerHTML = ""
    if (noResults) noResults.style.display = "block"
    if (loadMoreContainer) loadMoreContainer.style.display = "none"
    return
  }

  if (noResults) noResults.style.display = "none"

  const startIndex = 0
  const endIndex = currentPage * itemsPerPage
  const visibleReviews = reviewsList.slice(startIndex, endIndex)

  grid.innerHTML = visibleReviews.map((review, index) => createReviewCard(review, index)).join("")

  // Show/hide load more button
  if (loadMoreContainer) {
    loadMoreContainer.style.display = endIndex < reviewsList.length ? "block" : "none"
  }

  setupLazyLoading()
  updateBookmarkButtons()
}

function loadMoreReviews() {
  currentPage++
  const grid = document.getElementById("reviewsGrid")
  const loadMoreContainer = document.getElementById("loadMoreContainer")

  if (!grid) return

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = currentPage * itemsPerPage
  const newReviews = allFilteredReviews.slice(startIndex, endIndex)

  newReviews.forEach((review, index) => {
    grid.insertAdjacentHTML("beforeend", createReviewCard(review, index))
  })

  if (loadMoreContainer) {
    loadMoreContainer.style.display = endIndex < allFilteredReviews.length ? "block" : "none"
  }

  setupLazyLoading()
  updateBookmarkButtons()
}

function displayArticle(review) {
  const articleContent = document.getElementById("articleContent")

  if (!articleContent || !review) {
    if (articleContent) {
      articleContent.innerHTML = `
        <div class="article-body" style="text-align: center; padding: 4rem 2rem;">
          <h2>Không tìm thấy bài viết</h2>
          <p>Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.</p>
          <a href="index.html" class="back-btn" style="display: inline-flex; margin-top: 1rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span>Về trang chủ</span>
          </a>
        </div>
      `
    }
    return
  }

  // Increment view count
  incrementViewCount(review.id)

  document.title = `${review.title} - TechReview`

  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.content = review.description

  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDesc = document.querySelector('meta[property="og:description"]')
  const ogImage = document.querySelector('meta[property="og:image"]')

  if (ogTitle) ogTitle.content = review.title
  if (ogDesc) ogDesc.content = review.description
  if (ogImage) ogImage.content = review.image

  const schemaScript = document.getElementById("articleSchema")
  if (schemaScript) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: review.title,
      description: review.description,
      image: review.image,
      datePublished: review.date,
      author: { "@type": "Organization", name: "TechReview" },
      publisher: { "@type": "Organization", name: "TechReview" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
    }
    schemaScript.textContent = JSON.stringify(schema)
  }

  const bookmarked = isBookmarked(review.id)
  const readingTime = calculateReadingTime(review.content)
  const views = getViewCount(review.id)

  articleContent.innerHTML = `
    <div class="article-header">
      <div class="article-top">
        <span class="article-category">${review.categoryLabel}</span>
        <div class="article-actions">
          <button class="article-share-btn" onclick="copyLink()" title="Sao chép liên kết">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            Chia sẻ
          </button>
          <button class="article-bookmark-btn ${bookmarked ? "bookmarked" : ""}" data-review-id="${review.id}" onclick="toggleBookmark('${review.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            ${bookmarked ? "Đã lưu" : "Lưu bài viết"}
          </button>
        </div>
      </div>
      <h1 class="article-title">${review.title}</h1>
      <div class="article-meta">
        <span class="article-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          ${formatDate(review.date)}
        </span>
        <span class="article-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${readingTime} phút đọc
        </span>
        <span class="article-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          ${formatNumber(views)} lượt xem
        </span>
        <span class="article-meta-item article-rating">
          ${createRatingStars(review.rating)}
        </span>
      </div>
    </div>
    <div class="article-image-wrapper">
      <img 
        class="article-image" 
        src="${review.image}" 
        alt="${review.title}"
        onerror="handleImageError(this)"
      >
    </div>
    <div class="article-body">
      ${review.content}
      
      <div class="share-buttons">
        <button class="share-btn facebook" onclick="shareOnFacebook()" title="Chia sẻ lên Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </button>
        <button class="share-btn twitter" onclick="shareOnTwitter()" title="Chia sẻ lên Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
        </button>
        <button class="share-btn linkedin" onclick="shareOnLinkedIn()" title="Chia sẻ lên LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </button>
        <button class="share-btn copy" onclick="copyLink()" title="Sao chép liên kết">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        </button>
      </div>
    </div>
  `

  renderComments(review.id)
  initReadingProgress()
}

function displayRelatedReviews(currentReview) {
  const relatedGrid = document.getElementById("relatedGrid")
  if (!relatedGrid || !currentReview) return

  let relatedReviews = window.reviews.filter((r) => r.category === currentReview.category && r.id !== currentReview.id)

  if (relatedReviews.length < 4) {
    const otherReviews = window.reviews.filter(
      (r) => r.category !== currentReview.category && r.id !== currentReview.id,
    )
    relatedReviews = [...relatedReviews, ...otherReviews].slice(0, 4)
  } else {
    relatedReviews = relatedReviews.slice(0, 4)
  }

  relatedGrid.innerHTML = relatedReviews.map((review, index) => createReviewCard(review, index)).join("")
  setupLazyLoading()
}

function displayStats() {
  const statsSection = document.getElementById("statsSection")
  if (!statsSection || !window.reviews) return

  const totalReviews = window.reviews.length
  const totalViews = window.reviews.reduce((sum, r) => sum + getViewCount(r.id), 0)
  const categories = new Set(window.reviews.map((r) => r.category)).size
  const avgRating = (window.reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)

  statsSection.innerHTML = `
    <div class="stat-card">
      <span class="stat-number">${totalReviews}</span>
      <span class="stat-label">Bài Review</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">${formatNumber(totalViews)}</span>
      <span class="stat-label">Lượt Xem</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">${categories}</span>
      <span class="stat-label">Danh Mục</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">${avgRating}</span>
      <span class="stat-label">Đánh Giá TB</span>
    </div>
  `
}

// ============================
// Search & Filter
// ============================

let currentFilter = "all"

function searchReviews(keyword) {
  const searchTerm = keyword.toLowerCase().trim()

  if (!searchTerm) {
    return filterByCurrentCategory()
  }

  let filtered = window.reviews.filter(
    (review) =>
      review.title.toLowerCase().includes(searchTerm) || review.description.toLowerCase().includes(searchTerm),
  )

  if (currentFilter !== "all") {
    filtered = filtered.filter((review) => review.category === currentFilter)
  }

  return filtered
}

function filterByCurrentCategory() {
  if (currentFilter === "all") {
    return window.reviews
  }
  return window.reviews.filter((review) => review.category === currentFilter)
}

function handleSearch() {
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    showSkeletonLoading()
    setTimeout(() => {
      const results = searchReviews(searchInput.value)
      displayReviews(results)
    }, 300)
  }
}

function handleSearchMobile() {
  const searchInput = document.getElementById("searchInputMobile")
  if (searchInput) {
    const results = searchReviews(searchInput.value)
    displayReviews(results)
  }
}

function filterByCategory(category) {
  currentFilter = category

  document.querySelectorAll(".filter-tag").forEach((tag) => {
    tag.classList.remove("active")
    if (
      tag.textContent.toLowerCase().includes(getCategoryLabel(category).toLowerCase()) ||
      (category === "all" && tag.textContent === "Tất cả")
    ) {
      tag.classList.add("active")
    }
  })

  showSkeletonLoading()
  setTimeout(() => {
    const searchInput = document.getElementById("searchInput")
    const keyword = searchInput ? searchInput.value : ""
    const results = searchReviews(keyword)
    displayReviews(results)
  }, 300)
}

function getCategoryLabel(category) {
  const labels = {
    all: "Tất cả",
    phone: "Điện thoại",
    laptop: "Laptop",
    accessory: "Phụ kiện",
    audio: "Âm thanh",
  }
  return labels[category] || category
}

// ============================
// Navigation
// ============================

function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav")
  const menuToggle = document.querySelector(".menu-toggle")

  if (mobileNav && menuToggle) {
    mobileNav.classList.toggle("active")
    menuToggle.classList.toggle("active")
  }
}

function getReviewIdFromUrl() {
  const params = new URLSearchParams(window.location.search)
  return params.get("id")
}

function getReviewById(id) {
  return window.reviews.find((review) => review.id === id)
}

// ============================
// Newsletter
// ============================

function subscribeNewsletter(event) {
  event.preventDefault()
  const input = event.target.querySelector(".newsletter-input")
  if (input && input.value) {
    showToast("Cảm ơn bạn đã đăng ký nhận tin!")
    input.value = ""
  }
}

// ============================
// Initialize
// ============================

document.addEventListener("DOMContentLoaded", () => {
  initDarkMode()
  updateBookmarkCounts()
  initScrollToTop()

  const isDetailPage = window.location.pathname.includes("detail.html")

  if (isDetailPage) {
    const reviewId = getReviewIdFromUrl()
    const review = getReviewById(reviewId)

    if (review) {
      displayArticle(review)
      displayRelatedReviews(review)
    } else {
      displayArticle(null)
    }
  } else {
    displayStats()
    showSkeletonLoading()
    setTimeout(() => {
      displayReviews(window.reviews)
    }, 500)
  }

  // Search on Enter key
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSearch()
    })
    searchInput.addEventListener("input", debounce(handleSearch, 300))
  }

  const searchInputMobile = document.getElementById("searchInputMobile")
  if (searchInputMobile) {
    searchInputMobile.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSearchMobile()
    })
  }
})

// Debounce function
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
