import { imageAPI } from '../config';

export default async function initHeroHeaderRandomBackground(request) {
  const heroHeader = document.querySelector('.hero-header');
  const response = await imageAPI.fetch({
    query: request,
    orientation: 'horizontal',
    per_page: 10,
    category: request,
  });

  const { data } = response;
  const images = data.hits;

  const imageURL =
    images[Math.floor(Math.random() * images.length)].largeImageURL;

  heroHeader.style.background = 'var(--primary-color)';
  heroHeader.style.background = `linear-gradient(90deg, var(--primary-color) 0%, rgba(12,12,0,0.5) 10%, rgba(12,12,0,0.5) 90%, var(--primary-color) 100%), url(${imageURL})`;
}
