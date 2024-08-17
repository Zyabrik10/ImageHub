import { API, ImageForm, ImageGallary } from '../class';

export const apiConfig = {
  page: 1,
  query: '',
};

export const config = {
  reach_end: false,
  isGalleryEnded: false,
};

export const imageAPI = new API({
  baseURL: 'https://pixabay.com/api',
  token: '35790595-0862ce34bbcdea66fb3b3d261',
});

export const imageForm = new ImageForm();
export const imageGallary = new ImageGallary();
