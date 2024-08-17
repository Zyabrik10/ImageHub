export default async function searchImage(event) {
  event.preventDefault();

  try {
    const input_value = search_form_input.value.trim();
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
    reach_end = false;
    isGalleryEnded = false;
    page = 1;

    if (data.totalHits > 40) {
      page += 1;
      // load_more_button.style.display = 'block';
    }

    const links = createImageList(data.hits);

    gallery_box.innerHTML = links;
    preventItemsClick('.gallery__link');

    gallery = initSliderLightBox();
  } catch (error) {
    Notiflix.Notify.failure('Oops! Something went wrong');
    console.error(error);
  }
}
