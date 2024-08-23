import { Modal } from "./components";

export default class LightboxModal {
  static instance = null;

  initCloseButton() {
    this.element = document.querySelector(`.lightbox-modal`);

    const closeButton = this.element.querySelector(
      `.lightbox-modal-close-button`
    );
    closeButton.addEventListener("click", this.closeModal.bind(this));
  }

  initElement() {
    this.element = document.querySelector(".lightbox-modal");
    document.body.insertAdjacentHTML("beforeend", Modal());
  }

  initControllsButton() {
    const leftButton = this.element.querySelector(
      ".lightbox-controll-button-left"
    );
    const rightButton = this.element.querySelector(
      ".lightbox-controll-button-right"
    );

    leftButton.addEventListener("click", this.previous.bind(this));
    rightButton.addEventListener("click", this.next.bind(this));
  }

  init() {
    this.initElement();
    this.initCloseButton();
    this.initControllsButton();

    this.imageElement = this.element.querySelector(".lightbox-modal-img");

    this.windowKeyDownHandler = this.keydownHandler.bind(this);
  }

  render(image) {
    const largeUrl = image.dataset.largeUrl;
    
    this.imageElement.src = largeUrl;
    
    const q = document.querySelector(".lightbox-modal-current-q");
    const allItems = document.querySelector(".lightbox-modal-all-items");

    q.textContent = this.currentIndex + 1;
    allItems.textContent = this.images.length;
  }

  static getInstance() {
    if (LightboxModal.instance !== null) return LightboxModal.instance;

    LightboxModal.instance = new LightboxModal();
    LightboxModal.instance.init();

    this.images = [];
    this.currentIndex = undefined;

    return LightboxModal.instance;
  }

  closeModal() {
    this.element.classList.remove("active");
    window.removeEventListener("keydown", this.windowKeyDownHandler);
  }

  keydownHandler({ key }) {
    switch (key) {
      case "Escape":
        this.closeModal();
        break;
      case "ArrowRight":
        this.next();
        break;
      case "ArrowLeft":
        this.previous();
        break;
    }
  }

  next() {
    this.currentIndex++;

    if (this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }

    const img = this.images[this.currentIndex].querySelector("img");

    this.render(img);
  }

  previous() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }

    const img = this.images[this.currentIndex].querySelector("img");

    this.render(img);
  }
}
