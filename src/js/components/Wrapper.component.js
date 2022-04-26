import Header from './header/Header.component.js'
import Main from './main/Main.component';
class Wrapper {
  constructor() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.header = new Header().addHeader();
    this.main = new Main().addMain();
  }

  render() {
    this.elements = [this.header, this.main];

    document.body.prepend(this.wrapper);
    this.wrapper.append(...this.elements);
  }
}

const wrapper = new Wrapper();

export default wrapper;
