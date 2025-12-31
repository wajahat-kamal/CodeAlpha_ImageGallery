const galleryItem = document.querySelectorAll(".gallery-item");

/* ===== Create Elements ===== */
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("img");
const lightBoxNext = document.createElement("img");
const lightBoxClose = document.createElement("img");

/* ===== Add Classes ===== */
lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxImg.classList.add("lightbox-content-img");

lightBoxPrev.classList.add("lightbox-prev");
lightBoxNext.classList.add("lightbox-next");
lightBoxClose.classList.add("lightbox-close");

/* ===== Set Sources ===== */
lightBoxPrev.src = "/assets/left-icon.webp";
lightBoxNext.src = "/assets/right-icon.webp";
lightBoxClose.src = "/assets/close-icon.png";

/* ===== Append Elements ===== */
lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
lightBoxContent.appendChild(lightBoxClose);

document.body.appendChild(lightBoxContainer);

/* ===== Logic ===== */
let index = 0;

function showLightBox(n) {
  if (n >= galleryItem.length) index = 0;
  if (n < 0) index = galleryItem.length - 1;

  const imageLocation =
    galleryItem[index].querySelector("img").src;

  lightBoxImg.src = imageLocation;
}

galleryItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    index = i;
    lightBoxContainer.style.display = "block";
    showLightBox(index);
  });
});

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
  e.stopPropagation();
  lightBoxContainer.style.display = "none";
}

/* ===== Events ===== */
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);
lightBoxClose.addEventListener("click", closeLightBox);

lightBoxContainer.addEventListener("click", (e) => {
  if (e.target === lightBoxContainer) {
    closeLightBox(e);
  }
});
