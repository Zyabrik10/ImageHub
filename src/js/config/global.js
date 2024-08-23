import { API, PixabayAPI, ImageGallary } from '../class';
import MainSlider from '../components/MainSlider/MainSlider';

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

export const imageGallary = new ImageGallary(MainSlider);

const requests = [
  'cat',
  'forest',
  'car',
  'steampunk',
  'ocean',
  'flower',
  'sunrise',
  'moon',
  'mountain',
  'sunset',
];

export const currentRequest =
  requests[Math.floor(Math.random() * requests.length)];