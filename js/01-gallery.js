import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryPicture = document.querySelector(".gallery");


const createGallery = galleryItems.map(({preview, original, description}) => 
`<div class="gallery__item"><a class="gallery__link" href =${original}>
<img class= "gallery__image" src =${preview} 
data-source = ${original} alt =${description}/></a></div>`);
galleryPicture.insertAdjacentHTML("beforeend", createGallery.join(''));

galleryPicture.addEventListener('click', openPicture);

function openPicture (event) {
event.preventDefault();
if (event.target.nodeName !== 'IMG'){
    return
}
let instance = basicLightbox.create(`
	<img src = ${event.target.dataset.source} alt = "${event.target.alt}"/>`, 
 { onShow: instance => {
    document.addEventListener('keydown', onModalClose);
  },
  onClose: instance => {
    document.removeEventListener('keydown', onModalClose);
  },
});
instance.show();

function onModalClose(e){
    if(e.code !== 'Escape'){
        return;
    } instance.close();
}
}
//console.log(basicLightbox);



