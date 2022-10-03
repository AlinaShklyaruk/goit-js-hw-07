import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const listItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.innerHTML = listItemsMarkup;

function createGalleryItemsMarkup(items) {
    return items.map(item => 
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    ).join('');
};

galleryEl.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(event) {
    event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600"/>
    </div>
`);
    instance.show();

 }



 // console.log(event.target.src);
}
