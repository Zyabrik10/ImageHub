import API from "../API/API";

export default class PixabayAPI {
  constructor() {
    this.baseURL = "https://pixabay.com/api";
    this.token = "35790595-0862ce34bbcdea66fb3b3d261";
    this.API = new API({ baseURL: this.baseURL, token: this.token });
  }

  async fetch({
    query,
    page = 1,
    per_page,
    safesearch = false,
    image_type = "photo",
    orientation = "horizontal",
    category = "",
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
        category,
      },
    });
  }
}
