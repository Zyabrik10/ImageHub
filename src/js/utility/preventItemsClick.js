export default function preventItemsClick(items) {
  document.querySelectorAll(items).forEach(item => {
    item.addEventListener('click', event => event.preventDefault());
  });
}
