export default function Modal (obj = {}) {
  return `
    <div class="lightbox-modal">
      <div class="lightbox-modal-content">
        <p class="lightbox-modal-q-info">
          <span class="lightbox-modal-current-q"></span>
          /
          <span class="lightbox-modal-all-items"></span>
        </p>
        <div class="lightbox-controlls">
          <button class="lightbox-controll-button lightbox-controll-button-left">&larr;</button>
          <button class="lightbox-controll-button lightbox-controll-button-right">&rarr;</button>
        </div>
        <button class="lightbox-modal-close-button">&times;</button>
        <img class="lightbox-modal-img" alt="">
      </div>
    </div>
  `;
};
