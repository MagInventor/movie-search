import Keyboard from './Keyboard.component';

class Device {
  constructor() {
    this.device = document.createElement('div');
    this.device.classList.add('device', 'hide');
    this.elements = [];
    this.keyboard = new Keyboard().render();
  }

  addElements() {
    this.elements = [this.keyboard];
    this.device.append(...this.elements);
  }

  render() {
    this.addElements();
    document.querySelector('.virtual-keyboard .container').append(this.device);
  }
}

const device = new Device();

export default device;
