import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");
const markup = galleryItems.map((image) => `<div class="gallery__item"><a class="gallery__link" href=${image.original}><img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}></a></div>`).join("");


list.insertAdjacentHTML("beforeend", markup);

let instance;

const handleClick = (e) => {       
    if (e.code == "Escape" && instance.visible() === true) {
        //document.removeEventListener("keydown", handleClick);                 
        instance.close();                         
    };    
};     

const listClick = (event) => {     
    event.preventDefault();   
    if (event.target.nodeName !== "IMG") {  
        return;
    };      
    const selectedImage = event.target.dataset.source;
    instance = basicLightbox.create(`<img src=${selectedImage} width="800" height="600">`,
    {onClose: (instance) => {document.removeEventListener("keydown", handleClick)}});
    
    instance.show(); 

    document.addEventListener("keydown", handleClick);   
};

list.addEventListener("click", listClick);