import { createImageList } from './js/createImageList.js';
import { fetchImages } from './js/fetchImages.js';

const search_form = document.querySelector('#search-form');
const search_form_input = document.querySelector('#search-form input');

const gallery = document.querySelector('.gallery');

let page = 1;
let query = '';

async function addImage() {
    try{
        const response = await fetchImages(query, page);
      
        const data = response.data;
      
        const images = data.hits.slice();
      
        gallery.innerHTML += createImageList(images);
      
        document.querySelectorAll('.gallery__link').forEach(item => {
          item.addEventListener('click', event => event.preventDefault());
        });
      
        const lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
      
        if (data.totalHits <= 40 * (page - 1) + data.hits.length) {
          Notiflix.Notify.info(
            "We're sorry, but you've reached the end of search results."
          );
          Notiflix.Notify.info("Thats all");
        }
      
        page += 1;
    }catch(error){
        Notiflix.Notify.failure(error);
    }
}

async function searchImage(event) {
  event.preventDefault();

  const input_value = search_form_input.value;

  const response = await fetchImages(input_value);

  const { data } = response;

  Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);

  query = input_value;
  page = 1;

  if (data.totalHits > 40) {
    page += 1;
  }

  const images = data.hits.slice();

  if (images.length === 0) {
    Notiflix.Notify.info(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }

  gallery.innerHTML = createImageList(images);

  document.querySelectorAll('.gallery__link').forEach(item => {
    item.addEventListener('click', event => event.preventDefault());
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

search_form.addEventListener('submit', searchImage);
// load_more_button.addEventListener('click', addImage.bind(load_more_button));

// const { height: cardHeight } = document
//   .querySelector(".gallery")
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: "smooth",
// });
