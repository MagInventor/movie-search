class FormSearch {
  constructor() {
    this.form = document.createElement('form');
    this.formName = 'form-search';
    this.form.classList.add(this.formName);
    this.form.setAttribute('method', 'get');
  }

  createInputSearch(row) {
    this.inputAttributes = [['id', 'search'], ['type', 'search'], ['name', 'search'],
      ['placeholder', 'Search movie...'], ['autocomplete', 'off'], ['autofocus', '']];

    this.label = document.createElement('label');
    this.label.classList.add(row);

    this.inputSearch = document.createElement('div');
    this.inputSearch.classList.add('input-search');
    this.inputSearch.setAttribute('data-text', '');

    this.input = document.createElement('input');
    this.inputAttributes.forEach(([attrName, attrValue]) => {
      this.input.setAttribute(attrName, attrValue);
    });

    this.search = document.createElement('div');
    this.search.classList.add('search');

    this.clear = document.createElement('button');
    this.clear.classList.add('clear-form');
    this.clear.setAttribute('type', 'button');

    this.inputSearch.append(...[this.input, this.search, this.clear]);
    this.label.append(this.inputSearch);
    return this.label;
  }

  createBtn(row, classBtn, nameBtn, type) {
    this.label = document.createElement('label');
    this.label.classList.add(row, 'form-btn');

    this.button = document.createElement('button');
    this.button.classList.add(`${this.formName}__${classBtn}`);
    this.button.insertAdjacentText('afterbegin', `${nameBtn}`);
    this.button.setAttribute('type', `${type}`);

    this.label.append(this.button);
    return this.label;
  }

  createFormMessage(message) {
    this.formMessage = document.createElement('div');
    this.formMessage.classList.add('form-message');
    this.formMessage.insertAdjacentText('afterbegin', `${message}`);
    return this.formMessage;
  }

  addLabel() {
    this.labels = [];
    this.labels.push(this.createInputSearch('form-row-1'));
    this.labels.push(this.createBtn('form-row-2', 'keyboard', 'Keyboard', 'button'));
    this.labels.push(this.createBtn('form-row-3', 'submit', 'Search', 'submit'));
    this.labels.push(this.createFormMessage(''));

    this.form.append(...this.labels);
    return this;
  }

  createForm() {
    this.addLabel();
    return this.form;
  }
}

export default FormSearch;
