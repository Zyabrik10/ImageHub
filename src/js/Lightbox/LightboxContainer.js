import { SliderItem } from './components';

export default class LightboxContainer {
  constructor(selector, modal) {
    this.container = document.querySelector(selector);
    this.container.addEventListener('click', this.openModalWindow.bind(this));

    this.modal = modal;
  }

  openModalWindow(e) {
    e.preventDefault();

    console.log('Hell');

    const { target, currentTarget } = e;

    if (target === currentTarget) return;

    let imageItem = target;

    if (target.classList.contains('lightbox-container-item')) {
      imageItem = target.querySelector('.lightbox-container-img');
    }

    this.modal.element.classList.add('active');

    const index = imageItem.dataset.index;

    const allImages = Array.from(
      document.querySelectorAll('a.lightbox-container-item')
    );
    this.modal.images = allImages;
    this.modal.currentIndex = +index;

    this.modal.render(imageItem);

    window.addEventListener('keydown', this.modal.windowKeyDownHandler);
  }

  add(imagesData) {
    const allImages = Array.from(
      document.querySelectorAll("a.lightbox-container-item")
    );
    const images = imagesData
      .map(({ id, url, largeUrl, description }, index) => {
        return SliderItem({
          url,
          largeUrl,
          description,
          id,
          q: allImages.length + index,
        });
      })
      .join('\n');

    this.container.insertAdjacentHTML('beforeend', images);
  }

  clear() {
    this.container.innerHTML = "";
  }
}
