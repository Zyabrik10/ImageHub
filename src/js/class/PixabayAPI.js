import { apiConfig } from '../config/global';

export default class ImageAPI {
  constructor(API) {
    this.API = API;
  }

  async fetch({
    query,
    page = 1,
    per_page,
    safesearch = false,
    image_type = 'photo',
    orientation = 'horizontal',
  }) {
    if (!per_page) per_page = apiConfig.per_page;

    return await this.API.fetch({
      query: {
        key: this.API.token,
        image_type,
        orientation,
        safesearch,
        q: query,
        page,
        per_page,
      },
    });
  }
}
