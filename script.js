const gallery = document.querySelector(".gallery");
const leftBtn = document.querySelector(".left-icon");
const rightBtn = document.querySelector(".right-icon");

rightBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: 700, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: -700, behavior: "smooth" });
});
