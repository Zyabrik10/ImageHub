export async function fetchImages(value, page = 1){
  const searchParams = new URLSearchParams({
    key: '35790595-0862ce34bbcdea66fb3b3d261',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: value,
    page: page,
    per_page: 40
  });

  return await axios
  .get(`https://pixabay.com/api/?${searchParams}`);   
}
