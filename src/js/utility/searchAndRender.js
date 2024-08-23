import { apiConfig, config, imageAPI, imageGallary } from '../config';
import preventItemsClick from './preventItemsClick';

export default async function searchAndRender(input_value) {
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

    imageGallary.galleryLightBox.refresh();
  } catch (error) {
    Notiflix.Notify.failure('Oops! Something went wrong');
    console.error(error);
  }
}
