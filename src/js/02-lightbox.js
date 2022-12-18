import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");
const markup = galleryItems.map((image) => `<a class="gallery__item" href=${image.original}><img class="gallery__image" src=${image.preview} alt=${image.description}></a>`).join("");

list.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox('.gallery a', { captions:	true, captionSelector:	'img', captionType: 'attr', captionData: 'alt', captionPosition: 'bottom', captionDelay:	250});
