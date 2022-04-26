import Header from './header/Header.component.js'
class Wrapper {
  constructor() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.header = new Header().addHeader();
  }

  render() {
    this.elements = [this.header];

    document.body.prepend(this.wrapper);
    this.wrapper.append(...this.elements);
  }
}

const wrapper = new Wrapper();

export default wrapper;
