import { Lightbox } from "./Lightbox";
import PixabayAPI from "./PixabejAPI/PixabejAPI";
import SearchForm from "./SearchForm/SearchForm";

const queries = ["waves", "mountains", "sunset", "forest", "cats", "dogs", "birds", "sea", "mountains", "steampunk", "cyberpunk", "futuristic", "ancient", "art"];

export const imageAPI = new PixabayAPI();
export const lightbox = new Lightbox();
export const searchForm = new SearchForm();
export const queryAPIConfig = {
    page: 1,
    query: queries[Math.floor(Math.random() * queries.length)]
}