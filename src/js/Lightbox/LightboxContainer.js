import { SliderItem } from './components';

export default class LightboxContainer {
  constructor(selector, modal) {
    this.container = document.querySelector(selector);
    this.container.addEventListener('click', this.openModalWindow.bind(this));

    this.modal = modal;
    this.map = [];
    this.x = 0;
    this.y = 0;
  }

  openModalWindow(e) {
    e.preventDefault();

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
      document.querySelectorAll('a.lightbox-container-item')
    );

    let rows = 4;
    let j = 0;

    for (let i = 0; i < imagesData.length; i++) {
      let d = Math.random() > 0.5;
      if (j >= rows || i === 0) {
        j = 0;
        this.map.push([]);
      }

      if (d && this.map[this.map.length - 1].length + 2 <= rows) {
        j += 2;
        this.map[this.map.length - 1].push(...[imagesData[i], 'occupied']);
      } else {
        this.map[this.map.length - 1].push(imagesData[i]);
        j++;
      }
    }

    let img = [];
    let c = 0;

    for (let i = this.y; i < this.map.length; i++, this.y++) {
      if (this.x >= rows) this.x = 0;

      for (let j = this.x; j < this.map[i].length; j++, this.x++) {
        if (this.map[i][j] === 'occupied') continue;

        const { url, largeUrl, description, id } = this.map[i][j];
        let twoCol = false;

        if (this.map[i][j + 1] === 'occupied') twoCol = true;

        img.push(
          SliderItem({
            url,
            largeUrl,
            description,
            id,
            q: allImages.length + c++,
            twoCol,
          })
        );
      }
    }

    console.log(this.x, this.y);

    img = img.join('\n');

    this.container.insertAdjacentHTML('beforeend', img);
  }

  clear() {
    this.container.innerHTML = '';
  }
}