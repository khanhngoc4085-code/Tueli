/*
  ╭──────────────────────────────────────────────╮
  │              LI'S EASY EDIT AREA             │
  │  Thay nội dung ở đây là được. ♡              │
  ╰──────────────────────────────────────────────╯
*/

const SITE_DATA = {
  nickname: "Li",

  socialLinks: {
    instagram: "#",
    tiktok: "#",
    spotify: "#",
    pinterest: "#"
  },

  gallery: {
    // Đặt ảnh vào thư mục assets rồi đổi tên ở đây.
    // Ví dụ: "assets/me.jpg"
    images: [
      { src: "assets/photo-1.jpg", caption: "a little memory ♡" },
      { src: "assets/photo-2.jpg", caption: "pretty little things" },
      { src: "assets/photo-3.jpg", caption: "somewhere, sometime" },
      { src: "assets/photo-4.jpg", caption: "just because ♡" }
    ]
  }
};

/* Mobile navigation */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

/* Scroll reveal */
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach(item => observer.observe(item));

/* Gallery lightbox */
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const lightboxCaption = document.querySelector("#lightbox-caption");
const closeButton = document.querySelector(".lightbox-close");

document.querySelectorAll(".polaroid").forEach(card => {
  card.addEventListener("click", () => {
    const src = card.dataset.image;
    const caption = card.dataset.caption || "";

    lightboxImg.src = src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

closeButton?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

/* Apply social links */
const socialMap = {
  Instagram: SITE_DATA.socialLinks.instagram,
  TikTok: SITE_DATA.socialLinks.tiktok,
  Spotify: SITE_DATA.socialLinks.spotify,
  Pinterest: SITE_DATA.socialLinks.pinterest
};

document.querySelectorAll(".link-list a").forEach(link => {
  const name = link.firstChild?.textContent?.trim();
  if (socialMap[name]) link.href = socialMap[name];
});

/*
  Gallery images:
  Nếu bạn chưa bỏ ảnh vào assets/, các placeholder vẫn hiển thị.
  Khi đã có ảnh thật, đổi data-image trong index.html hoặc cập nhật
  các đường dẫn ở SITE_DATA rồi dùng logic riêng của bạn.
*/
