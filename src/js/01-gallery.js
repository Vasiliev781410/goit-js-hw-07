import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");
const markup = galleryItems.map((image) => `<a class="gallery__link" href=${image.original}><img class="gallery__image" src=${image.preview} data-source=href=${image.original} alt=href=${image.description}></a>`).join("");

console.log(markup);

list.insertAdjacentHTML("beforeend", markup);

console.log(galleryItems);
