// ===== DATA =====
const reviews = [
  {
    image: "https://shopdunk.com/images/thumbs/0021582_gia-iphone-15-pro-max-tai-my_1600.jpeg",
    title: "iPhone 15 Pro Max",
    date: "20/11/2024",
    rating: "4.8/5",
    description: "Chiếc iPhone flagship với màn hình Super Retina XDR và chip A17 Pro mạnh mẽ. Hiệu suất tuyệt vời.",
  },
  {
    image: "https://macone.vn/wp-content/uploads/2023/12/apple-macbook-pro-2023-4.jpeg",
    title: "MacBook Pro M3 Max",
    date: "18/11/2024",
    rating: "4.9/5",
    description: "Laptop cao cấp với chip M3 Max cực kỳ mạnh mẽ. Thích hợp cho designers, developers.",
  },
  {
    image:
      "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.og.jpg?202508282120",
    title: "Apple Watch Series 9",
    date: "15/11/2024",
    rating: "4.7/5",
    description: "Đồng hồ thông minh tốt nhất trên thị trường với tính năng sức khỏe toàn diện.",
  },
  {
    image: "https://i.rtings.com/assets/products/Nc33W9lA/sony-wh-1000xm5-wireless/design-medium.jpg?format=auto",
    title: "Sony WH-1000XM5",
    date: "12/11/2024",
    rating: "4.8/5",
    description: "Tai nghe chống ồn tốt nhất hiện nay. Âm thanh HD tuyệt vời với tích hợp AI.",
  },
  {
    image: "https://www.winwinstore.vn/wp-content/uploads/2024/04/canon-eos-r8-front-new.webp",
    title: "Canon EOS R8",
    date: "10/11/2024",
    rating: "4.6/5",
    description: "Máy ảnh mirrorless full-frame chuyên nghiệp. Cảm biến 45MP với hiệu suất ISO xuất sắc.",
  },
  {
    image:
      "https://hanoicomputercdn.com/media/lib/06-01-2025/may-choi-game-sony-playstation-5-ps5-slim-console-30th-anniversary-limited-edition8.jpg",
    title: "PlayStation 5",
    date: "08/11/2024",
    rating: "4.7/5",
    description: "Máy chơi game thế hệ mới với hiệu suất khủng. Kho game độc quyền khổng lồ.",
  },
]

const news = [
  {
    id: "news-1",
    image: "https://cdn-media.sforum.vn/storage/app/media/chibao/chi-bao/iOS%2018/apple-intelligence-e.jpeg",
    title: "Apple ra mắt AI Assistant mới",
    date: "22/11/2024",
    category: "Công nghệ AI",
    description: "Apple vừa giới thiệu trợ lý AI mới với khả năng hiểu ngôn ngữ tự nhiên tốt hơn.",
    fullContent: `
      <h2>Apple ra mắt AI Assistant mới - Sự thay đổi lớn trong công nghệ</h2>
      <p>Apple vừa công bố chiếc AI Assistant mới nhất của mình vào ngày 22 tháng 11 năm 2024. Đây là một bước tiến quan trọng trong lĩnh vực trí tuệ nhân tạo.</p>
      
      <h3>Các tính năng chính:</h3>
      <ul>
        <li>Hiểu ngôn ngữ tự nhiên tốt hơn trước 40%</li>
        <li>Tích hợp sâu vào hệ sinh thái Apple</li>
        <li>Hỗ trợ 50+ ngôn ngữ, bao gồm tiếng Việt</li>
        <li>Xử lý nhanh hơn với latency thấp hơn</li>
        <li>Bảo mật cao với mã hóa end-to-end</li>
      </ul>
      
      <p>Trợ lý AI mới của Apple có khả năng hiểu ngữ cảnh tốt hơn, cho phép người dùng tương tác tự nhiên hơn. Nó được tối ưu hóa cho các nhiệm vụ hàng ngày như đặt lịch, gửi tin nhắn, và tìm kiếm thông tin.</p>
      
      <h3>Công nghệ đằng sau:</h3>
      <p>Apple sử dụng một mô hình học sâu độc quy với khả năng học tập nhanh. Được huấn luyện trên hàng tỷ dữ liệu, AI này có thể cung cấp kết quả chính xác hơn 35% so với phiên bản trước.</p>
      
      <p>Điều đáng chú ý là Apple đã tập trung vào sự riêng tư của người dùng, đảm bảo rằng tất cả dữ liệu được xử lý trên thiết bị mà không gửi lên đám mây.</p>
    `,
  },
  {
    id: "news-2",
    image: "/google-gemini-ai-colorful-logo.jpg",
    title: "Google Gemini 2.0 đạt milestone mới",
    date: "21/11/2024",
    category: "AI Generative",
    description: "Model AI mới của Google cho thấy hiệu suất tương đương với con người.",
    fullContent: `
      <h2>Google Gemini 2.0 - Bước ngoặt trong AI Generative</h2>
      <p>Google vừa công bố Gemini 2.0, phiên bản nâng cấp đáng kể của mô hình AI hàng đầu.</p>
      
      <h3>Thành tích nổi bật:</h3>
      <ul>
        <li>Đạt 95% độ chính xác trên các tác vụ nhận thức</li>
        <li>Xử lý đa phương tiện (text, ảnh, video, âm thanh) tốt hơn</li>
        <li>Tốc độ suy luận nhanh hơn 5 lần</li>
        <li>Tiết kiệm năng lượng hơn 60%</li>
      </ul>
      
      <p>Gemini 2.0 được thiết kế để hoạt động hiệu quả trên cả thiết bị desktop lẫn mobile.</p>
    `,
  },
  {
    id: "news-3",
    image: "/samsung-ssd-nvme-m2-storage-drive.jpg",
    title: "SSD NVMe M.2 cộng tác mới",
    date: "20/11/2024",
    category: "Lưu trữ",
    description: "Samsung ra mắt dòng SSD 990 Pro 2TB với tốc độ lên tới 12,800 MB/s.",
    fullContent: `
      <h2>Samsung 990 Pro 2TB - Tốc độ lưu trữ mới</h2>
      <p>Samsung vừa giới thiệu SSD NVMe mới nhất với hiệu suất vượt trội.</p>
      
      <h3>Thông số kỹ thuật:</h3>
      <ul>
        <li>Dung lượng: 2TB</li>
        <li>Tốc độ đọc: 12,800 MB/s</li>
        <li>Tốc độ ghi: 11,000 MB/s</li>
        <li>Interface: PCIe 5.0</li>
        <li>Công suất: Chỉ 5W</li>
      </ul>
      
      <p>Đây là SSD nhanh nhất từng có với giá cạnh tranh. Thích hợp cho gaming, video editing, và công việc chuyên nghiệp.</p>
    `,
  },
  {
    id: "news-4",
    image: "/mit-graphene-battery-technology-research.jpg",
    title: "Công nghệ pin mới có thể thay đổi thế giới",
    date: "19/11/2024",
    category: "Pin & Năng lượng",
    description: "Nghiên cứu mới từ MIT cho thấy pin graphene có thể sạc được trong 15 phút.",
    fullContent: `
      <h2>Pin Graphene MIT - Cách mạng trong lưu trữ năng lượng</h2>
      <p>Các nhà khoa học tại MIT đã phát triển công nghệ pin graphene có thể sạc đầy trong vài phút.</p>
      
      <h3>Ưu điểm:</h3>
      <ul>
        <li>Sạc đầy 15 phút (từ 0-100%)</li>
        <li>Dung lượng gấp 3 lần pin li-ion</li>
        <li>Tuổi thọ 1000+ chu kỳ sạc</li>
        <li>Không phát sinh nhiệt</li>
        <li>Thân thiện với môi trường</li>
      </ul>
      
      <p>Công nghệ này có thể cách mạng hóa ngành ô tô điện, điện thoại di động, và lưu trữ năng lượng tái tạo.</p>
    `,
  },
  {
    id: "news-5",
    image: "/viettel-5g-network-tower-vietnam.jpg",
    title: "Mạng 5G phủ sóng toàn quốc",
    date: "18/11/2024",
    category: "Viễn thông",
    description: "Viettel hoàn thành triển khai mạng 5G trên toàn bộ 63 tỉnh thành.",
    fullContent: `
      <h2>Viettel hoàn thành mạng 5G toàn quốc</h2>
      <p>Viettel vừa công bố hoàn tất triển khai mạng 5G trên toàn bộ 63 tỉnh thành của Việt Nam.</p>
      
      <h3>Thông tin chi tiết:</h3>
      <ul>
        <li>Phủ sóng 95% thành phố lớn</li>
        <li>Tốc độ trung bình 500 Mbps</li>
        <li>Độ trễ: 30ms (5G)</li>
        <li>Hỗ trợ 100+ triệu kết nối</li>
        <li>Giá cạnh tranh, bằng 4G</li>
      </ul>
      
      <p>Đây là một bước tiến lớn cho Việt Nam trong lĩnh vực viễn thông. 5G sẽ thúc đẩy sự phát triển của IoT, smart city, và công nghệ tự động hóa.</p>
    `,
  },
  {
    id: "news-6",
    image: "/wifi-7-router-wireless-technology.jpg",
    title: "Internet không dây mạnh mẽ hơn",
    date: "17/11/2024",
    category: "WiFi",
    description: "Chuẩn WiFi 7 chính thức được phê duyệt với tốc độ lên tới 46 Gbps.",
    fullContent: `
      <h2>WiFi 7 - Tương lai của kết nối không dây</h2>
      <p>Chuẩn WiFi 7 được phê duyệt chính thức và sẽ bắt đầu triển khai từ quý 1 năm 2025.</p>
      
      <h3>Cải tiến chính:</h3>
      <ul>
        <li>Tốc độ: 46 Gbps (gấp 5 lần WiFi 6E)</li>
        <li>Dải tần: 2.4GHz, 5GHz, 6GHz</li>
        <li>Độ trễ: < 5ms</li>
        <li>Hiệu quả năng lượng tốt hơn 50%</li>
        <li>Hỗ trợ 1000+ thiết bị cùng lúc</li>
      </ul>
      
      <p>WiFi 7 sẽ hoàn hảo cho streaming 8K, VR, gaming online, và các ứng dụng thực tế ảo.</p>
    `,
  },
  {
    id: "news-7",
    image: "/intel-core-ultra-processor-cpu-chip.jpg",
    title: "Chip Intel Core Ultra thế hệ 3 ra mắt",
    date: "16/11/2024",
    category: "CPU",
    description: "Intel công bố dòng chip Core Ultra thế hệ 3 với hiệu suất tăng 25%.",
    fullContent: `
      <h2>Intel Core Ultra Gen 3 - Đối thủ mạnh cho Apple Silicon</h2>
      <p>Intel vừa ra mắt dòng chip Core Ultra thế hệ 3 với hiệu năng cải thiện đáng kể.</p>
      
      <h3>Thông số:</h3>
      <ul>
        <li>Lõi nhân: Lên tới 20 nhân</li>
        <li>Hiệu suất: +25% so với gen 2</li>
        <li>NPU tích hợp cho AI</li>
        <li>TDP: 28W - 55W</li>
        <li>Điểm Geekbench: 3000+</li>
      </ul>
    `,
  },
  {
    id: "news-8",
    image: "/amd-ryzen-9000-processor-chip.jpg",
    title: "AMD Ryzen 9000 series xuất hiện",
    date: "15/11/2024",
    category: "CPU",
    description: "AMD tung dòng Ryzen 9000 sử dụng kiến trúc Zen 5 mới.",
    fullContent: `
      <h2>AMD Ryzen 9000 - Sức mạnh Zen 5</h2>
      <p>AMD công bố Ryzen 9000 series, dòng CPU mạnh mẽ nhất từng có.</p>
      
      <h3>Đặc điểm:</h3>
      <ul>
        <li>Kiến trúc Zen 5 hoàn toàn mới</li>
        <li>Hiệu suất AI cải thiện 3x</li>
        <li>Tương thích ngược Socket AM5</li>
        <li>TDP tiết kiệm 30%</li>
      </ul>
    `,
  },
  {
    id: "news-9",
    image: "/nvidia-rtx-5090-graphics-card-gpu.jpg",
    title: "NVIDIA GeForce RTX 5090 ra mắt",
    date: "14/11/2024",
    category: "GPU",
    description: "NVIDIA giới thiệu GPU hàng đầu RTX 5090 với hiệu suất khủng.",
    fullContent: `
      <h2>NVIDIA RTX 5090 - GPU hàng đầu cho 2025</h2>
      <p>NVIDIA vừa công bố RTX 5090, GPU mạnh nhất bao giờ hết.</p>
      
      <h3>Thông số:</h3>
      <ul>
        <li>VRAM: 32GB GDDR7</li>
        <li>Hiệu suất: 1500+ TFLOPS</li>
        <li>Tương thích DLSS 4</li>
        <li>Ray tracing thế hệ thứ 4</li>
      </ul>
    `,
  },
  {
    id: "news-10",
    image: "/lg-oled-4k-gaming-monitor-display.jpg",
    title: "LG công bố màn hình OLED 4K 240Hz",
    date: "13/11/2024",
    category: "Màn hình",
    description: "LG ra mắt màn hình gaming OLED đầu tiên với tần số 240Hz.",
    fullContent: `
      <h2>LG OLED Gaming Monitor 240Hz</h2>
      <p>LG giới thiệu màn hình OLED 4K đầu tiên hỗ trợ 240Hz cho gaming.</p>
      
      <h3>Thông số:</h3>
      <ul>
        <li>Độ phân giải: 3840x2160 (4K)</li>
        <li>Tần số: 240Hz</li>
        <li>Thời gian phản ứng: 0.1ms</li>
        <li>HDR 2000 nits</li>
      </ul>
    `,
  },
  {
    id: "news-11",
    image: "/sony-wh-ch900n-headphones-noise-canceling.jpg",
    title: "Sony WH-CH900N tai nghe mới",
    date: "12/11/2024",
    category: "Âm thanh",
    description: "Sony ra mắt tai nghe WH-CH900N với công nghệ chống ồn AI.",
    fullContent: `
      <h2>Sony WH-CH900N - Tai nghe chống ồn thế hệ mới</h2>
      <p>Sony công bố tai nghe WH-CH900N với công nghệ chống ồn do AI điều khiển.</p>
    `,
  },
  {
    id: "news-12",
    image: "/samsung-galaxy-s25-ultra-smartphone.jpg",
    title: "Samsung Galaxy S25 Ultra lộ diện",
    date: "11/11/2024",
    category: "Smartphone",
    description: "Hình ảnh render cho thấy Samsung S25 Ultra sẽ có thiết kế mới.",
    fullContent: `
      <h2>Samsung Galaxy S25 Ultra Preview</h2>
      <p>Những hình ảnh render đầu tiên của S25 Ultra được tiết lộ online.</p>
    `,
  },
  {
    id: "news-13",
    image: "/corsair-k100-air-mechanical-gaming-keyboard.jpg",
    title: "Bàn phím cơ gaming Corsair K100 Air",
    date: "10/11/2024",
    category: "Phụ kiện",
    description: "Corsair ra mắt bàn phím gaming không dây K100 Air.",
    fullContent: `
      <h2>Corsair K100 Air - Bàn phím gaming không dây</h2>
      <p>Corsair giới thiệu K100 Air, bàn phím gaming tuyệt vời.</p>
    `,
  },
  {
    id: "news-14",
    image: "/logitech-pro-x2-gaming-mouse.jpg",
    title: "Chuột gaming Logitech Pro X2 ra mắt",
    date: "09/11/2024",
    category: "Phụ kiện",
    description: "Logitech tung chuột Pro X2 với sensortracking cải thiện.",
    fullContent: `
      <h2>Logitech Pro X2 - Chuột gaming chuyên nghiệp</h2>
      <p>Logitech ra mắt Pro X2 cho game thủ chuyên nghiệp.</p>
    `,
  },
  {
    id: "news-15",
    image: "/apple-airpods-pro-3-wireless-earbuds.jpg",
    title: "AirPods Pro 3 có mắt Bluetooth mới",
    date: "08/11/2024",
    category: "Âm thanh",
    description: "Tin đồn về AirPods Pro 3 có thể sớm được ra mắt.",
    fullContent: `
      <h2>AirPods Pro 3 - Tai nghe tương lai</h2>
      <p>Khám phá những tính năng mới của AirPods Pro thế hệ 3.</p>
    `,
  },
]

const blog = [
  {
    id: "blog-1",
    image: "https://topdev.vn/blog/wp-content/uploads/2020/09/Apple-Macbook-Pro-16-M2-2023-compressed.jpg",
    title: "Cách chọn laptop phù hợp cho lập trình viên",
    date: "19/11/2024",
    description: "Hướng dẫn chi tiết về cách lựa chọn laptop với cấu hình tối ưu cho công việc lập trình.",
    fullContent: `
      <h2>Hướng dẫn chọn laptop cho lập trình viên</h2>
      <p>Chọn laptop phù hợp là quyết định quan trọng đối với mỗi lập trình viên. Bài viết này sẽ hướng dẫn bạn từng bước.</p>
      
      <h3>1. Bộ xử lý (CPU)</h3>
      <p>Nên chọn CPU có hiệu suất cao để compile code nhanh chóng:</p>
      <ul>
        <li>Apple M3/M4 Pro: Tối ưu cho Mac</li>
        <li>Intel i7/i9: Tốt cho Windows</li>
        <li>AMD Ryzen 7/9: Giá tốt, hiệu suất mạnh</li>
      </ul>
      
      <h3>2. RAM - Quan trọng nhất</h3>
      <ul>
        <li>Tối thiểu: 16GB</li>
        <li>Khuyến nghị: 32GB</li>
        <li>Tốt nhất: 64GB</li>
      </ul>
      
      <h3>3. Ổ cứng SSD</h3>
      <ul>
        <li>Dung lượng tối thiểu: 512GB</li>
        <li>Khuyến nghị: 1TB trở lên</li>
        <li>Tốc độ: PCIe 4.0 hoặc 5.0</li>
      </ul>
      
      <h3>4. Màn hình</h3>
      <ul>
        <li>Kích thước: 14" - 16"</li>
        <li>Độ phân giải: 2560x1600 trở lên</li>
        <li>Tần số làm tươi: 120Hz hoặc hơn</li>
      </ul>
      
      <h3>5. Tuổi thọ pin</h3>
      <p>Chọn laptop có thời lượng pin 8+ giờ để có thể làm việc cả ngày.</p>
      
      <h3>Khuyến nghị cuối cùng</h3>
      <p>Nếu bạn có ngân sách hạn chế, hãy ưu tiên CPU và RAM trước hết. Nếu có tiền, chọn MacBook Pro M3 Pro hoặc ThinkPad X1 Carbon.</p>
    `,
  },
  {
    id: "blog-2",
    image: "/digital-photography-camera-dslr.jpg",
    title: "Bắt đầu với điện ảnh số - Hướng dẫn cho người mới",
    date: "17/11/2024",
    description: "Những kiến thức cơ bản về máy ảnh số, cách chụp ảnh đẹp.",
    fullContent: `
      <h2>Hướng dẫn bắt đầu nhiếp ảnh số</h2>
      <p>Bạn mới bắt đầu học nhiếp ảnh? Hãy tìm hiểu những điều cơ bản trong bài viết này.</p>
      
      <h3>Hiểu về Exposure Triangle</h3>
      <ul>
        <li><strong>Aperture (f-stop):</strong> Kiểm soát độ sâu trường và lượng ánh sáng</li>
        <li><strong>Shutter Speed:</strong> Kiểm soát chuyển động, tránh mờ</li>
        <li><strong>ISO:</strong> Độ nhạy sáng của cảm biến</li>
      </ul>
      
      <h3>Những Quy tắc sáng tạo</h3>
      <ul>
        <li>Quy tắc Phần ba (Rule of Thirds)</li>
        <li>Khung hình cân bằng</li>
        <li>Sử dụng dòng dẫn (Leading Lines)</li>
        <li>Ánh sáng vàng (Golden Hour)</li>
      </ul>
      
      <h3>Lưu ý khi chụp ảnh</h3>
      <ul>
        <li>Sử dụng ánh sáng tự nhiên càng nhiều càng tốt</li>
        <li>Thử nghiệm các góc chụp khác nhau</li>
        <li>Chú ý đến nền (background)</li>
        <li>Chỉnh sửa ảnh với phần mềm như Lightroom hay Capture One</li>
      </ul>
    `,
  },
  {
    id: "blog-3",
    image: "/placeholder.svg?height=400&width=600",
    title: "10 mẹo bảo mật thiết bị thông minh của bạn",
    date: "15/11/2024",
    description: "Các cách bảo vệ dữ liệu cá nhân trên smartphone, laptop và tablet.",
    fullContent: `
      <h2>10 Mẹo Bảo Mật Thiết Bị Thông Minh</h2>
      
      <h3>1. Sử dụng mật khẩu mạnh</h3>
      <p>Mật khẩu nên có ít nhất 12 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.</p>
      
      <h3>2. Kích hoạt xác thực hai yếu tố (2FA)</h3>
      <p>Luôn bật 2FA trên tất cả các tài khoản quan trọng.</p>
      
      <h3>3. Cập nhật hệ điều hành thường xuyên</h3>
      <p>Cập nhật nhanh chóng để có các bản vá bảo mật mới nhất.</p>
      
      <h3>4. Sử dụng VPN</h3>
      <p>Dùng VPN đáng tin cậy khi kết nối Wi-Fi công cộng.</p>
      
      <h3>5. Cài đặt phần mềm antivirus</h3>
      <p>Sử dụng phần mềm bảo vệ từ các nhà cung cấp đáng tin cậy.</p>
    `,
  },
  {
    id: "blog-4",
    image: "/placeholder.svg?height=400&width=600",
    title: "Tối ưu hóa hiệu suất PC gaming",
    date: "13/11/2024",
    description: "Các bước tối ưu hóa Windows, GPU, CPU, RAM để đạt FPS cao nhất.",
    fullContent: `
      <h2>Tối ưu hóa PC Gaming để Đạt FPS Cao Nhất</h2>
      
      <h3>Tối ưu hóa Windows</h3>
      <ul>
        <li>Tắt những ứng dụng chạy nền không cần thiết</li>
        <li>Tắt hiệu ứng trực quan (Visual Effects)</li>
        <li>Điều chỉnh Power Settings về "High Performance"</li>
        <li>Cập nhật driver GPU và chipset</li>
      </ul>
    `,
  },
  {
    id: "blog-5",
    image: "/placeholder.svg?height=400&width=600",
    title: "Lắp ráp máy tính gaming cấp entry level",
    date: "11/11/2024",
    description: "Hướng dẫn chi tiết cách lựa chọn linh kiện và lắp ráp máy tính gaming.",
    fullContent: `
      <h2>Hướng dẫn Lắp Ráp PC Gaming Entry Level</h2>
      
      <h3>Ngân sách 20 triệu đồng</h3>
      <ul>
        <li>CPU: AMD Ryzen 5 7500X3D (2.5 triệu)</li>
        <li>GPU: RTX 4070 (6 triệu)</li>
        <li>Mainboard: B650 (1.5 triệu)</li>
        <li>RAM: 32GB DDR5 (2 triệu)</li>
        <li>SSD: 1TB NVMe Gen4 (1 triệu)</li>
        <li>Power Supply: 850W 80+ Gold (2 triệu)</li>
      </ul>
    `,
  },
  {
    id: "blog-6",
    image: "/placeholder.svg?height=400&width=600",
    title: "Top 5 ứng dụng mobile hữu ích năm 2024",
    date: "09/11/2024",
    description: "Review chi tiết về những ứng dụng mobile hàng đầu giúp cuộc sống hiệu quả hơn.",
    fullContent: `
      <h2>Top 5 Ứng Dụng Mobile Hữu Ích 2024</h2>
      
      <h3>1. Notion - Ghi chú toàn diện</h3>
      <p>Notion là ứng dụng toàn năng cho ghi chú, quản lý dự án, và tổ chức thông tin.</p>
      
      <h3>2. ChatGPT - AI trợ lý</h3>
      <p>Ứng dụng ChatGPT trên mobile cho phép bạn trò chuyện với AI bất kỳ lúc nào.</p>
      
      <h3>3. Revolut - Dịch vụ ngân hàng di động</h3>
      <p>Chuyển tiền quốc tế, đổi tiền tệ dễ dàng với Revolut.</p>
    `,
  },
  {
    id: "blog-7",
    image: "/placeholder.svg?height=400&width=600",
    title: "Lập trình Python cho người mới bắt đầu",
    date: "08/11/2024",
    description: "Hướng dẫn cơ bản về lập trình Python từ A đến Z.",
    fullContent: `
      <h2>Python cho Người Mới Bắt Đầu</h2>
      <p>Python là một trong những ngôn ngữ lập trình dễ học nhất. Hãy bắt đầu ngay hôm nay!</p>
    `,
  },
  {
    id: "blog-8",
    image: "/placeholder.svg?height=400&width=600",
    title: "SEO Cơ Bản cho Trang Web",
    date: "07/11/2024",
    description: "Cách tối ưu hóa trang web để thứ hạng cao trên Google.",
    fullContent: `
      <h2>SEO Cơ Bản cho Trang Web</h2>
      <p>Tìm hiểu cách tối ưu hóa SEO để đạt được xếp hạng cao trên Google.</p>
    `,
  },
  {
    id: "blog-9",
    image: "/placeholder.svg?height=400&width=600",
    title: "Design UI/UX cho ứng dụng di động",
    date: "06/11/2024",
    description: "Những nguyên tắc thiết kế tốt cho ứng dụng mobile.",
    fullContent: `
      <h2>Design UI/UX cho Ứng Dụng Di Động</h2>
      <p>Học cách thiết kế giao diện người dùng tuyệt vời.</p>
    `,
  },
  {
    id: "blog-10",
    image: "/placeholder.svg?height=400&width=600",
    title: "HTTPS và SSL Certificate là gì?",
    date: "05/11/2024",
    description: "Hiểu rõ hơn về bảo mật trên internet.",
    fullContent: `
      <h2>HTTPS và SSL Certificate</h2>
      <p>Tìm hiểu về HTTPS và tại sao nó quan trọng cho bảo mật web.</p>
    `,
  },
  {
    id: "blog-11",
    image: "/placeholder.svg?height=400&width=600",
    title: "Phân tích dữ liệu với Excel",
    date: "04/11/2024",
    description: "Kỹ thuật phân tích dữ liệu cơ bản sử dụng Excel.",
    fullContent: `
      <h2>Phân Tích Dữ Liệu với Excel</h2>
      <p>Học các kỹ thuật phân tích dữ liệu trong Excel.</p>
    `,
  },
  {
    id: "blog-12",
    image: "/placeholder.svg?height=400&width=600",
    title: "Khái niệm Machine Learning cho newbie",
    date: "03/11/2024",
    description: "Giới thiệu cơ bản về Machine Learning.",
    fullContent: `
      <h2>Machine Learning cho Người Mới</h2>
      <p>Hiểu cơ bản về Machine Learning và cách nó hoạt động.</p>
    `,
  },
  {
    id: "blog-13",
    image: "/placeholder.svg?height=400&width=600",
    title: "Edit video cơ bản với Adobe Premiere",
    date: "02/11/2024",
    description: "Hướng dẫn chỉnh sửa video cho người mới.",
    fullContent: `
      <h2>Edit Video với Adobe Premiere</h2>
      <p>Học cách chỉnh sửa video chuyên nghiệp.</p>
    `,
  },
  {
    id: "blog-14",
    image: "/placeholder.svg?height=400&width=600",
    title: "Podcast và streaming trực tiếp",
    date: "01/11/2024",
    description: "Làm podcast và live stream chuyên nghiệp.",
    fullContent: `
      <h2>Tạo Podcast Chuyên Nghiệp</h2>
      <p>Hướng dẫn bắt đầu podcast của riêng bạn.</p>
    `,
  },
  {
    id: "blog-15",
    image: "/placeholder.svg?height=400&width=600",
    title: "Kiếm tiền Online - 7 cách thực tế",
    date: "31/10/2024",
    description: "Những cách kiếm tiền online hiệu quả năm 2024.",
    fullContent: `
      <h2>7 Cách Kiếm Tiền Online Hiệu Quả</h2>
      <p>Khám phá những cách kiếm tiền trực tuyến thực tế và hiệu quả.</p>
    `,
  },
]

// ===== THEME MANAGEMENT =====

function initTheme() {
  const saved = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (saved) {
    document.documentElement.classList.toggle("dark-mode", saved === "dark")
  } else if (prefersDark) {
    document.documentElement.classList.add("dark-mode")
  }
  updateThemeIcon()
}

function setTheme(theme) {
  if (theme === "auto") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    document.documentElement.classList.toggle("dark-mode", prefersDark)
  } else {
    document.documentElement.classList.toggle("dark-mode", theme === "dark")
  }
  updateThemeIcon()
}

function updateThemeIcon() {
  const themeToggle = document.getElementById("themeToggle")
  if (themeToggle) {
    const isDark = document.documentElement.classList.contains("dark-mode")
    themeToggle.innerHTML = `<span class="theme-icon">${isDark ? "☀️" : "🌙"}</span>`
  }
}

// ===== PAGE NAVIGATION =====
function showPage(pageName) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })

  document.getElementById(pageName).classList.add("active")

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.dataset.page === pageName) {
      link.classList.add("active")
    }
  })

  if (pageName === "home" && !document.getElementById("homeCards").innerHTML) {
    renderCards("homeCards", reviews)
  } else if (pageName === "news" && !document.getElementById("newsCards").innerHTML) {
    renderCards("newsCards", news)
  } else if (pageName === "blog" && !document.getElementById("blogCards").innerHTML) {
    renderCards("blogCards", blog)
  }
}

function showDetail(type, id) {
  const dataSource = type === "news" ? news : blog
  const item = dataSource.find((i) => i.id === id)

  if (!item) return

  document.getElementById("detailImage").innerHTML =
    `<img src="${item.image}" alt="${item.title}" class="detail-image">`
  document.getElementById("detailTitle").textContent = item.title
  document.getElementById("detailDate").textContent = item.date
  document.getElementById("detailCategory").textContent = item.category || "Blog"
  document.getElementById("detailBody").innerHTML = item.fullContent

  showPage("detail")
  window.scrollTo(0, 0)
}

function goBack() {
  history.back()
}

// ===== CARD RENDERING =====
function renderCards(containerId, data) {
  const container = document.getElementById(containerId)

  const isNews = data === news
  const isBlog = data === blog
  const isReview = data === reviews

  data.forEach((item, i) => {
    if (!item.id) item.id = `${isNews ? "news" : isBlog ? "blog" : "review"}-${i + 1}`
  })

  container.innerHTML = data
    .map((item, index) => {
      let linkHref = "#"
      if (isReview) linkHref = `review-${index + 1}.html`
      else if (isNews) linkHref = `tin-hot-${index + 1}.html`
      else if (isBlog) linkHref = `blog-${index + 1}.html`

      return `
        <a href="${linkHref}" style="text-decoration: none; color: inherit;">
          <div class="card">
              <div class="card-image">
                  <img 
                      src="${item.image}"
                      alt="${item.title || "No title"}"
                      class="card-img"
                      loading="lazy"
                      onerror="this.src='https://via.placeholder.com/400x200?text=TechHub+Image'"
                      style="width:100%; height:200px; object-fit:cover; border-radius:6px;"
                  >
              </div>
              <div class="card-body">
                  <h3 class="card-title">${item.title || "Không có tiêu đề"}</h3>
                  <p class="card-meta">${item.date || "Không rõ ngày"}</p>
                  ${item.rating ? `<p class="card-rating">⭐ ${item.rating}</p>` : ""}
                  <p class="card-description">${item.description || ""}</p>
              </div>
          </div>
        </a>
      `
    })
    .join("")
}

function getType(data) {
  if (data === news) return "news"
  if (data === blog) return "blog"
  if (data === reviews) return "reviews"
  return "unknown"
}
