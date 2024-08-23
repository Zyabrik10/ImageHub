export default function MainSlider(url, tags, largeURL) {
  return `
<a href="${url}" class="gallery__link flex-container-item">
    <img src="${url}" alt="${tags}" loading="lazy" data-source="${largeURL}" />
</a>
`;
}
