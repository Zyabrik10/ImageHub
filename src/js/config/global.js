import { API, PixabayAPI, ImageGallary } from '../class';

export const apiConfig = {
  page: 1,
  query: '',
  per_page: 20,
};

export const config = {
  reach_end: false,
  isGalleryEnded: false,
};

export const imageAPI = new PixabayAPI(
  new API({
    baseURL: 'https://pixabay.com/api',
    token: '35790595-0862ce34bbcdea66fb3b3d261',
  })
);

export const imageGallary = new ImageGallary();
