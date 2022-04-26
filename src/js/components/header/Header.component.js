import Logo from './Logo.component';

class Header {
  constructor() {
    this.header = document.createElement('header');
    this.container = document.createElement('div');
    this.container.classList.add('container', 'header__inner');
    this.logo = new Logo().getView();
  }

  addHeader() {
    this.container.append(this.logo);
    this.header.append(this.container);
    return this.header;
  }
}

export default Header;
