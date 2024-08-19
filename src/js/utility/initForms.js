function onSubmit(e) {
  e.preventDefault();

  let input_value = e.currentTarget.searchInput.value.trim();

  searchAndRender(input_value);
}

export default function initForms(selector) {
  const forms = document.querySelectorAll(selector);
  forms.forEach(form => {
    form.addEventListener('submit', onSubmit.bind(this));
  });
}
