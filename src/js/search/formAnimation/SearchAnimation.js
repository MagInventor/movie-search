export default class SearchAnimation {
  constructor() {
    this.search = document.querySelector('.input-search');
    this.text_input = document.querySelector('.input-search input');
  }

  animation() {
    this.text_input.addEventListener('keyup', (event) => {
      this.search.setAttribute('data-text', event.target.value);
    });
  }
}
