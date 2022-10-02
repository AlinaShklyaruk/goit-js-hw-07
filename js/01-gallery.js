import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');

function createGalleryItemsMarkup(items) {
    return items.map(item => {
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${items.preview}"
      data-source="${items.original}"
      alt="${items.description}"
    />
  </a>
</div>`
    }).join('');
};

const listItemsMarkup = createGalleryItemsMarkup(galleryItems);
console.log(listItemsMarkup);
galleryEl.innerHTML = listItemsMarkup;

console.log(galleryItems);
