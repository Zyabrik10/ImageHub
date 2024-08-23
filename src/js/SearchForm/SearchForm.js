import { imageAPI, lightbox, queryAPIConfig } from "../config";

export default function renderBackground(imageURL) {
  const heroHeader = document.querySelector(".mix-header-hero-container");

  const color = "rgba(12,12,0,0.2)";
  const startProc = 10;

  heroHeader.style.background = "var(--primary-color)";
  
  if (innerWidth < 340) {
    heroHeader.style.background = `url(${imageURL})`;
  } else {
    heroHeader.style.background = `linear-gradient(90deg, var(--primary-color) 0%, ${color} ${startProc}%, ${color} ${100 - startProc}%, var(--primary-color) 100%), url(${imageURL})`;
  }

  heroHeader.style.backgroundSize = "cover";
}

export default class SearchForm {
  init(formSelector) {
    this.forms = document.querySelectorAll(formSelector);

    this.forms.forEach((form) => {
      form.addEventListener("submit", this.onSubmit.bind(this));
    });
  }

  async findAndRender(query) {
    const response = await imageAPI.fetch({
      query,
      orientation: "horizontal",
      per_page: 20,
      category: "nature",
    });

    const images = response.data.hits.map(({ id, largeImageURL, tags }) => {
      return {
        url: largeImageURL,
        largeUrl: largeImageURL,
        description: tags,
        id,
      };
    });

    lightbox.clearImages();
    lightbox.addImages(images);

    queryAPIConfig.page = 1;
    queryAPIConfig.query = query;

    renderBackground(
      images[Math.floor(Math.random() * images.length)].largeUrl
    );
  }

  onSubmit(event) {
    event.preventDefault();

    const query = event.target.querySelector('input[name="query"]').value;

    this.findAndRender(query);
  }
}
