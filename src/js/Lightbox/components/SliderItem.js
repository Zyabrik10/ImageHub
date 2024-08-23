export default function SliderItem({ url, largeUrl, description, id, q }) {
  return `
  <a data-id="${id}" data-index=${q} class="lightbox-container-item" href="${url}">
        <img class="lightbox-container-img" data-index=${q} src="${url}" alt="${description}" data-large-url="${largeUrl}" loading="lazy" />
    </a>
  `;
}
