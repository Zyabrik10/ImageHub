import { apiConfig, config, imageGallary } from '../config';
import { preventItemsClick } from '../preventItemsClick';
import { fetchImages } from '../utility/api';

export default class ImageForm {
  constructor() {
    this.form = undefined;
  }

  init(selector) {
    this.form = document.querySelector(selector);
    this.searchInput = this.form.input;
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  async search(desire) {
    try {
      let input_value = this.searchInput.value.trim();

      if (input_value === '') input_value = desire;

      const response = await fetchImages({
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

      if (data.totalHits > 40) {
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
  }

  onSubmit(e) {
    e.preventDefault();
    this.search();
  }
}
