import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryImg = document.querySelector(".gallery");

const markUpGallery = galleryItems.map(
  ({ preview, original, description }) =>
    `<a class="gallery__item" href = "${original}">
<img class= "gallery__image" src = "${preview}" 
 alt = "${description}"/></a>`
);
galleryImg.insertAdjacentHTML("beforeend", markUpGallery.join(""));

//console.log(SimpleLightbox);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
