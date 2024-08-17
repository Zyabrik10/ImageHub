import { addImage, searchImage } from './js/utility/image/index.js';
import { apiConfig, config, imageForm, imageGallary } from './js/config';

function windowOnLoad() {
  imageForm.init('#search-form');
  imageGallary.init('.gallery');

  window.addEventListener(
    'scroll',
    _.throttle(() => {
      if (window.scrollY + innerHeight >= imageGallary.gallery.scrollHeight) {
        console.log(imageGallary);
        imageGallary.add(apiConfig.query, apiConfig.page);
        config.reach_end = true;
      } else config.reach_end = false;
    }, 500)
  );
}

window.addEventListener('load', windowOnLoad);
