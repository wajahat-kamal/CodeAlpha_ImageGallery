const galleryItem = document.querySelectorAll(".gallery-item");

/* ===== Create Elements ===== */
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("img");
const lightBoxNext = document.createElement("img");
const lightBoxClose = document.createElement("img");
const lightBoxCounter = document.createElement("p");

/* ===== Add Classes ===== */
lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxImg.classList.add("lightbox-content-img");
lightBoxCounter.classList.add("lightbox-counter");
lightBoxPrev.classList.add("lightbox-prev");
lightBoxNext.classList.add("lightbox-next");
lightBoxClose.classList.add("lightbox-close");

/* ===== Set Sources ===== */
lightBoxPrev.src = "/assets/left-icon.webp";
lightBoxNext.src = "/assets/right-icon.webp";
lightBoxClose.src = "/assets/close-icon.png";

/* ===== Append Elements ===== */
lightBoxContent.append(
  lightBoxImg,
  lightBoxPrev,
  lightBoxNext,
  lightBoxClose,
  lightBoxCounter
);
lightBoxContainer.appendChild(lightBoxContent);
document.body.appendChild(lightBoxContainer);

/* ===== Logic ===== */
let index = 0;

function showLightBox(n) {
  if (n >= galleryItem.length) index = 0;
  if (n < 0) index = galleryItem.length - 1;

  const imageLocation = galleryItem[index].querySelector("img").src;
  lightBoxImg.src = imageLocation;

  lightBoxCounter.textContent = `Image ${index + 1} / ${galleryItem.length}`;
}

/* ===== Open Lightbox ===== */
galleryItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    index = i;
    showLightBox(index);
    lightBoxContainer.classList.add("active"); // smooth transition
  });
});

/* ===== Navigation ===== */
function prevImage(e) {
  e.stopPropagation();
  index--;
  showLightBox(index);
}
function nextImage(e) {
  e.stopPropagation();
  index++;
  showLightBox(index);
}
function closeLightBox(e) {
  if (e) e.stopPropagation();
  lightBoxContainer.classList.remove("active");
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);
lightBoxClose.addEventListener("click", closeLightBox);

/* ===== Keyboard Support ===== */
document.addEventListener("keydown", (e) => {
  if (!lightBoxContainer.classList.contains("active")) return;

  if (e.key === "Escape") closeLightBox();
  if (e.key === "ArrowLeft") prevImage(e);
  if (e.key === "ArrowRight") nextImage(e);
});

/* ===== Close on Overlay Click ===== */
lightBoxContainer.addEventListener("click", (e) => {
  if (e.target === lightBoxContainer) closeLightBox(e);
});
