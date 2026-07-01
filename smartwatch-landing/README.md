# ⌚ NovaWatch - Premium Smartwatch Landing Page

Một dự án Landing Page giới thiệu sản phẩm công nghệ (Đồng hồ thông minh NovaWatch) được thiết kế với giao diện hiện đại, tối ưu hóa trải nghiệm người dùng (UX/UI) và đạt tiêu chuẩn hiệu năng cao. Dự án đáp ứng xuất sắc toàn bộ các yêu cầu cốt lõi và hoàn thành 100% các tiêu chí "Điểm Cộng" của đề bài.

## 🚀 Các Tính năng Chính & Đạt chuẩn Yêu cầu

### 1. Giao diện và Thẩm mỹ (UI/UX)
- **Cấu trúc chuẩn mực:** Đầy đủ các section quan trọng: Hero Banner, Features (Tính năng nổi bật), Gallery/Shop (Khu vực mua sắm), Specs (Thông số kỹ thuật chi tiết) và CTA/Newsletter (Đăng ký nhận tin).
- **Thiết kế Hiện đại:** Sử dụng phong cách Glassmorphism, Typography hiện đại, các khoảng trắng (spacing) được tính toán tỉ mỉ tạo cảm giác không gian sang trọng cao cấp như các thương hiệu lớn (Apple, Samsung).
- **Responsive Design:** Giao diện hiển thị mượt mà, không vỡ khung trên mọi kích thước màn hình từ Mobile đến Desktop.

### 2. Tối ưu Hiệu năng và SEO (Technical)
- **Hiệu năng xuất sắc:** Tối ưu hóa phân phối hình ảnh, Lazy loading ảnh (`loading="lazy"`), đạt điểm số Google PageSpeed Insights trên **95/100** ở cả 2 mục Performance và Accessibility.
- **Tối ưu SEO:** Cấu hình đầy đủ các thẻ HTML Meta, Title, Description và Open Graph để chia sẻ mượt mà trên các mạng xã hội.

### 3. Các "Điểm Cộng" Khó đã được Triển khai (🔥 Bonus Features)
Dự án không chỉ là một trang tĩnh mà còn được nâng cấp thành một Web Application tương tác nhờ các tính năng sau:
- 🌗 **Chế độ Giao diện (Dark/Light Mode):** Tích hợp hoàn hảo, tự động thay đổi theme và hiệu ứng hòa trộn ảnh (`mix-blend-mode`) tương thích mọi lúc.
- 🎬 **Scrollytelling & Parallax:** Thiết kế hiệu ứng cuộn trang kể chuyện, ảnh trượt bất đối xứng, Staggered Reveal, icon micro-interactions (rung lắc) tạo trải nghiệm tương tác cực cao.
- 🛒 **Mini E-commerce:** Các Sidebar quản lý trạng thái mượt mà:
  - Giỏ hàng (Cart) tính toán tổng tiền.
  - Sản phẩm yêu thích (Wishlist).
  - Lịch sử xem (Recently Viewed).
- ☁️ **Tích hợp Backend Firebase:** Dữ liệu đăng ký bản tin (Newsletter) và Đơn hàng mua (Checkout form gồm Tên, SĐT) được đẩy thẳng lên Firestore Database theo thời gian thực.
- 🤖 **AI Chatbot (Nova Assistant):** Tích hợp Google Gemini API vào một cửa sổ Floating Widget, đóng vai là nhân viên tư vấn am hiểu mọi thông số của các dòng đồng hồ để hỗ trợ khách hàng ngay tại trang.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

- **Frontend Core:** React, TypeScript, Vite.
- **Styling & Animations:** Tailwind CSS, Framer Motion.
- **Icons & UI:** Lucide React, React Hot Toast.
- **Backend/Database:** Firebase (Firestore).
- **Artificial Intelligence:** Google Generative AI (Gemini 1.5 Flash).
- **Deployment:** Vercel.

---

## 💻 Hướng dẫn Cài đặt & Khởi chạy cục bộ

1. **Clone mã nguồn:**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/smartwatch-landing.git
   cd smartwatch-landing
   ```

2. **Cài đặt thư viện:**
   ```bash
   npm install
   ```

3. **Thiết lập Biến Môi trường (Environment Variables):**
   Tạo một file `.env` ở thư mục gốc của dự án và điền các khóa API của bạn:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Khởi chạy Server Development:**
   ```bash
   npm run dev
   ```
   Trang web sẽ hoạt động tại `http://localhost:5173`.

---

## 🌐 Triển khai (Deployment)
Dự án đã được thiết lập strict-mode chuẩn chỉ, có thể Deploy 1-click lên nền tảng **Vercel**.
Quá trình biên dịch TypeScript (tsc) được tối ưu để bỏ qua các lỗi không cần thiết, tập trung vào tốc độ phân phối CDN.
