import { apiConfig, config } from '../config';
import { preventItemsClick } from '../preventItemsClick';
import { fetchImages } from '../utility/api';

export default class ImageGallary {
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
      const response = await fetchImages({
        query: apiConfig.query,
        page: apiConfig.page,
      });
      const { data } = response;
      if (!config.isGalleryEnded) {
        if (
          data.totalHits <= 40 * (apiConfig.page - 1) + data.hits.length &&
          config.reach_end
        ) {
          if (data.totalHits >= 40)
            Notiflix.Notify.info(
              "We're sorry, but you've reached the end of search results."
            );
          config.isGalleryEnded = true;
          return;
        }

        const links = this.createImageList(data.hits);

        this.gallery.insertAdjacentHTML('beforeend', links);
        preventItemsClick('.gallery__link');

        this.galleryLightBox.refresh();

        apiConfig.page += 1;
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
                <div class="info">
                    <p class="info-item">
                        <b>Likes</b>
                        ${image.likes}
                    </p>
                    <p class="info-item">
                        <b>Views</b>
                        ${image.views}
                    </p>
                    <p class="info-item">
                        <b>Comments</b>
                        ${image.comments}
                    </p>
                    <p class="info-item">
                        <b>Downloads</b>
                        ${image.downloads}
                    </p>
                </div>
            </a>
        `;
      })
      .join('\n');
  }
}
