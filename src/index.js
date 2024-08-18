import { apiConfig, config, imageAPI, imageGallary } from './js/config';
import { preventItemsClick } from './js/utility/preventItemsClick';

const requests = [
  'cat',
  'forest',
  'car',
  'steampunk',
  'clockpunk',
  'ocean',
  'flower',
  'sunrise',
  'moon',
  'mountain',
  'sunset',
];

const currentRequest = requests[Math.floor(Math.random() * requests.length)];

async function initHeroHeaderRandomBackground() {
  const heroHeader = document.querySelector('.hero-header');
  const response = await imageAPI.fetch({
    query: currentRequest,
    orientation: 'horizontal',
  });

  const { data } = response;
  const images = data.hits;

  const imageURL =
    images[Math.floor(Math.random() * images.length)].largeImageURL;

  heroHeader.style.background = 'var(--primary-color)';
  heroHeader.style.background = `linear-gradient(90deg, var(--primary-color) 0%, rgba(12,12,0,0.5) 10%, rgba(12,12,0,0.5) 90%, var(--primary-color) 100%), url(${imageURL})`;
}

async function searchAndRender(input_value) {
  try {
    const response = await imageAPI.fetch({
      query: input_value,
    });

    const { data } = response;

    if (data.hits.length === 0) {
      Notiflix.Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);

    apiConfig.query = input_value;
    apiConfig.page = 1;
    config.reach_end = false;
    config.isGalleryEnded = false;

    if (data.totalHits > apiConfig.per_page) {
      config.page += 1;
    }

    const links = imageGallary.createImageList(data.hits);

    imageGallary.gallery.innerHTML = links;
    preventItemsClick('.gallery__link');

    imageGallary.initGalleryBox();
  } catch (error) {
    Notiflix.Notify.failure('Oops! Something went wrong');
    console.error(error);
  }

  return this;
}

function onSubmit(e) {
  e.preventDefault();

  let input_value = e.currentTarget.searchInput.value.trim();

  searchAndRender(input_value);
}

function initForms(selector) {
  const forms = document.querySelectorAll(selector);
  forms.forEach(form => {
    form.addEventListener('submit', onSubmit.bind(this));
  });
}

function windowOnLoad() {
  initHeroHeaderRandomBackground();
  imageGallary.init('.gallery');
  initForms('#search-form');
  searchAndRender(currentRequest);

  window.addEventListener(
    'scroll',
    _.throttle(() => {
      if (
        window.scrollY + innerHeight >= imageGallary.gallery.scrollHeight &&
        !config.isGalleryEnded
      ) {
        apiConfig.page += 1;
        imageGallary.add(apiConfig.query, apiConfig.page);
        config.reach_end = true;
      } else {
        config.reach_end = false;
      }
    }, 500)
  );
}

window.addEventListener('load', windowOnLoad);
