import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const imageEl = [];

galleryItems.forEach((galleryItem) => {
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = galleryItem.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = galleryItem.preview;
  image.alt = galleryItem.description;

  link.appendChild(image);

  imageEl.push(link);
});

galleryEl.append(...imageEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
