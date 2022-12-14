import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
galleryItems.forEach(({ preview, original, description }) => {
  const div = document.createElement("div");
  div.classList.add("gallery_item");
  gallery.append(div);
  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = original;
  div.append(a);
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = preview;
  image.alt = description;
  a.append(image);
});
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
