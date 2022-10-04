import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

//const galleryItemsMarkup = createGalleryItems(galleryItems);
galleryEl.innerHTML = createGalleryItems(galleryItems);
function createGalleryItems(items) {
    return items.map(({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`).join('');
}

new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captions: true,
    captionsDelay: 250,
 });
