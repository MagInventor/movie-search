class Slider {
  constructor() {
    this.swiper = document.createElement('div');
    this.swiper.classList.add('swiper-container', 'hide');
    this.elements = [];
  }

  addElement(className) {
    this.element = document.createElement('div');
    this.element.classList.add(...className.split(' '));
    return this.element;
  }

  createSlider() {
    this.elements.push(this.addElement('swiper-wrapper'));
    this.elements.push(this.addElement('swiper-pagination'));
    this.elements.push(this.addElement('swiper-button swiper-button-prev'));
    this.elements.push(this.addElement('swiper-button swiper-button-next'));

    this.swiper.append(...this.elements);
    document.querySelector('.movie-cards__container').innerHTML = '';
    document.querySelector('.movie-cards__container').append(this.swiper);
    return this;
  }
}

export default Slider;
