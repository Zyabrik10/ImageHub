export function initSliderLightBox() {
 const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  return gallery;
}
