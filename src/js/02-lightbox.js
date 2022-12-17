import { galleryItems } from './gallery-items.js';
// Change code below this line
const markup = images.map((image) => `<li class="list-item">${image}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;
console.log(galleryItems);
