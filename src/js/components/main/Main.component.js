import FormSearch from './FormSearch.component';

class Main {
  constructor() {
    this.main = document.createElement('main');
    this.searchField = this.createSection('search-field');
    this.movieCards = this.createSection('movie-cards');
    this.keyboard = this.createSection('virtual-keyboard');
    this.form = new FormSearch().createForm();
  }

  createSection(nameSection) {
    this.section = document.createElement('section');
    this.section.classList.add(nameSection);

    this.container = document.createElement('div');
    this.container.classList.add('container', `${nameSection}__container`);

    this.section.append(this.container);
    return this.section;
  }

  addMain() {
    this.main.append(...[this.searchField, this.movieCards, this.keyboard]);
    this.searchField.querySelector('.search-field__container').append(this.form);
    return this.main;
  }
}

export default Main;
