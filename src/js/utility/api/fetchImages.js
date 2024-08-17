import { imageAPI } from '../../config';

export default async function fetchImages({
  query,
  page = 1,
  per_page = 40,
  safesearch = false,
  image_type = 'photo',
  orientation = 'horizontal',
}) {
  return await imageAPI.fetch({
    query: {
      key: imageAPI.token,
      image_type,
      orientation,
      safesearch,
      q: query,
      page,
      per_page,
    },
  });
}
