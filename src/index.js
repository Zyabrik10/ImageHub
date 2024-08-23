import { apiConfig, config, currentRequest, imageGallary } from './js/config';
import {
  initForms,
  initHeroHeaderRandomBackground,
  searchAndRender,
} from './js/utility';

const imageSectionTop = document
  .querySelector('.main-slider-section')
  .getBoundingClientRect().top;

const anchor = document.querySelector('.anchor');

function windowOnLoad() {
  initHeroHeaderRandomBackground(currentRequest);
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
      if (window.scrollY + innerHeight >= imageSectionTop + innerHeight * 1.5) {
        !anchor.classList.contains('active') && anchor.classList.add('active');
      } else {
        anchor.classList.contains('active') &&
          anchor.classList.remove('active');
      }
    }, 500)
  );
}

window.addEventListener('load', windowOnLoad);
