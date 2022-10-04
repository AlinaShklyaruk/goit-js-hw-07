import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const listItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.innerHTML = listItemsMarkup;

galleryEl.addEventListener('click', onGalleryItemsClick);

function createGalleryItemsMarkup(items) {
    return items.map(({preview, original, description}) => 
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    ).join('');
}


function onGalleryItemsClick(event) {
    event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600"/>`,
      {
        onClose: (instance) => {
          window.removeEventListener('keydown', onEscPress);

    }});
    instance.show();
    window.addEventListener('keydown', onEscPress);
      function onEscPress(event) {
        if (event.code === 'Escape') {
          instance.close();
        }
      }
    }
}



  
