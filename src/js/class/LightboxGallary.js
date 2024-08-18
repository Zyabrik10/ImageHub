import { apiConfig, config, imageAPI } from '../config';
import { preventItemsClick } from '../utility/preventItemsClick';

export default class LightboxGallary {
  init(gallerySelector) {
    this.gallerySelector = gallerySelector;
    this.gallery = document.querySelector(this.gallerySelector);
    this.galleryLightBox = new SimpleLightbox(`${this.gallerySelector} a`, {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }

  initGalleryBox() {
    this.galleryLightBox = new SimpleLightbox(`${this.gallerySelector} a`, {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }

  async add() {
    try {
      const response = await imageAPI.fetch({
        query: apiConfig.query,
        page: apiConfig.page,
      });

      const { data } = response;

      if (!config.isGalleryEnded) {
        if (
          data.totalHits <=
            apiConfig.per_page * (apiConfig.page - 1) + data.hits.length &&
          config.reach_end
        ) {
          if (data.totalHits >= apiConfig.per_page)
            Notiflix.Notify.info(
              "We're sorry, but you've reached the end of search results."
            );
          config.isGalleryEnded = true;
        }

        const links = this.createImageList(data.hits);

        this.gallery.insertAdjacentHTML('beforeend', links);
        preventItemsClick('.gallery__link');

        this.galleryLightBox.refresh();
      }
    } catch (error) {
      Notiflix.Notify.failure('Oops! Something went wrong');
      console.error(error);
    }
  }

  createImageList(images) {
    return images
      .map(image => {
        return `
            <a href="${image.webformatURL}" class="gallery__link flex-container-item">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" data-source="${image.largeImageURL}" />
            </a>
        `;
      })
      .join('\n');
  }
}
