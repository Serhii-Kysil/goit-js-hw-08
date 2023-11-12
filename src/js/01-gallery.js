// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryEl = document.querySelector('.gallery');

function createMarkupGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
	`
    )
    .join('');
}
galleryEl.insertAdjacentHTML('beforeend', createMarkupGallery(galleryItems));
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
