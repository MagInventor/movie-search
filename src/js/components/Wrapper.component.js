import Header from './header/Header.component';
import Main from './main/Main.component';
import Footer from './footer/Footer.component';

class Wrapper {
  constructor() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.header = new Header().addHeader();
    this.main = new Main().addMain();
    this.footer = new Footer().addFooter();
  }

  render() {
    this.elements = [this.header, this.main, this.footer];

    document.body.prepend(this.wrapper);
    this.wrapper.append(...this.elements);
  }
}

const wrapper = new Wrapper();

export default wrapper;
