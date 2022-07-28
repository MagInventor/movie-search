class Logo {
  constructor() {
    this.logo = document.createElement('div');
    this.logo.classList.add('logo');
    this.span = document.createElement('span');
    this.span.innerText = 'Movie';
    this.h1 = document.createElement('h1');
  }

  createTitle() {
    this.h1.append(this.span);
    this.h1.insertAdjacentText('beforeend', ' Search');
    return this;
  }

  getView() {
    this.createTitle();
    this.logo.append(this.h1);
    return this.logo;
  }
}

export default Logo;
