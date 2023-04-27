import { createImageList } from './js/createImageList.js';
import { fetchImages } from './js/fetchImages.js';
import { initSliderLightBox } from './js/initSliderLightBox.js';

const search_form = document.querySelector('#search-form');
const search_form_input = document.querySelector('#search-form input');

const gallery_box = document.querySelector('.gallery');

const load_more_button = document.querySelector('.load-more');

let gallery;

let page = 1;
let query = '';

async function addImage() {
  try {
    const response = await fetchImages(query, page);
    const { data } = response;

    gallery_box.innerHTML += createImageList(data.hits);
    document.querySelectorAll('.gallery__link').forEach(item => {
      item.addEventListener('click', event => event.preventDefault());
    });
  
    gallery.refresh();
  

    if (data.totalHits <= 40 * (page - 1) + data.hits.length) {
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
      load_more_button.style.display = 'none';
    }

    page += 1;
  } catch (error) {
    Notiflix.Notify.failure('Oops! Something went wrong');
    console.error(error);
  }
}

async function searchImage(event) {
  event.preventDefault();

  try{
    const input_value = search_form_input.value;
    const response = await fetchImages(input_value);
    const { data } = response;
  
    if (data.hits.length === 0) {
      Notiflix.Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
  
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
  
    query = input_value;
    page = 1;
  
    if (data.totalHits > 40) {
      page += 1;
      load_more_button.style.display = 'block';
    }
  
    gallery_box.innerHTML = createImageList(data.hits);

    document.querySelectorAll('.gallery__link').forEach(item => {
      item.addEventListener('click', event => event.preventDefault());
    });
  
    gallery = initSliderLightBox();
    
  } catch(error){
    Notiflix.Notify.failure("Oops! Something went wrong");
    console.error(error);
  }
}

search_form.addEventListener('submit', searchImage);
load_more_button.addEventListener('click', addImage);