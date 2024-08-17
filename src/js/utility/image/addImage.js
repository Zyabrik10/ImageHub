import { fetchImages } from '../api';

export default async function addImage(query, page) {
  try {
    const response = await fetchImages({ query, page });
    const { data } = response;
    if (!isGalleryEnded) {
      if (data.totalHits <= 40 * (page - 1) + data.hits.length && reach_end) {
        if (data.totalHits >= 40)
          Notiflix.Notify.info(
            "We're sorry, but you've reached the end of search results."
          );
        // load_more_button.style.display = 'none';
        isGalleryEnded = true;
        return;
      }

      const links = createImageList(data.hits);

      gallery_box.insertAdjacentHTML('beforeend', links);
      preventItemsClick('.gallery__link');

      gallery.refresh();

      page += 1;
    }
  } catch (error) {
    Notiflix.Notify.failure('Oops! Something went wrong');
    console.error(error);
  }
}
