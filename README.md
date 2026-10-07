# Li's Little Corner ♡

Một personal scrapbook website, làm bằng **HTML + CSS + JavaScript thuần** và có thể deploy trực tiếp bằng GitHub Pages.

## Cấu trúc

```text
li-scrapbook-site/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
```

## Chạy thử

Không cần cài gì.

Mở `index.html` bằng trình duyệt.

## Thay ảnh

Bỏ ảnh của bạn vào thư mục `assets/`, ví dụ:

```text
assets/
├── me.jpg
├── photo-1.jpg
├── photo-2.jpg
└── photo-3.jpg
```

Sau đó sửa đường dẫn trong `index.html`:

```html
data-image="assets/photo-1.jpg"
```

## Thay link mạng xã hội

Mở `script.js` và sửa:

```js
socialLinks: {
  instagram: "https://instagram.com/...",
  tiktok: "https://tiktok.com/@...",
  spotify: "https://open.spotify.com/...",
  pinterest: "https://pinterest.com/..."
}
```

## GitHub Pages

1. Tạo một repository mới trên GitHub.
2. Upload toàn bộ file trong folder này.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn branch `main` và folder `/root`.
6. Save.
7. GitHub sẽ tạo link website cho bạn.

## Lưu ý

Website không chứa thông tin nhận diện thật. Trước khi public, tự kiểm tra lại ảnh và các link bạn thêm vào để tránh vô tình lộ thông tin cá nhân.
