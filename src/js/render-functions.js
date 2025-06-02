import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(img => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${img.likes}</p>
          <p>Views: ${img.views}</p>
          <p>Comments: ${img.comments}</p>
          <p>Downloads: ${img.downloads}</p>
        </div>
      </li>
      `;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.add('visible');
}

export function hideLoader() {
  document.querySelector('.loader').classList.remove('visible');
}
