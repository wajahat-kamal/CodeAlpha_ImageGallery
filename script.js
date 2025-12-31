const galleryItem = document.querySelectorAll(".gallery-item");

const lightBoxContainer = document.createElement("div");

const lightBoxContent = document.createElement("div");

const lightBoxImg = document.createElement("img");

const lightBoxPrev = document.createElement("img");
const lightBoxNext = document.createElement("img");
const lightBoxClose = document.createElement("img");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxImg.classList.add("lightbox-content-img");

lightBoxPrev.classList.add("lightbox-prev");
lightBoxNext.classList.add("lightbox-next");
lightBoxClose.classList.add("lightbox-close");

lightBoxPrev.setAttribute("src", "/assets/left-icon.webp");
lightBoxNext.setAttribute("src", "/assets/right-icon.webp");
lightBoxClose.setAttribute("src", "/assets/close-icon.png");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
lightBoxContent.appendChild(lightBoxClose);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }

  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}

for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n) {
  showLightBox((index += n));
}

function prevImage() {
  sliderImage(-1);
}
function nextImage() {
  sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox(e) {
  if (e.target === lightBoxContainer) {
    lightBoxContainer.style.display = "none";
  }
}

lightBoxContainer.addEventListener("click", closeLightBox);
