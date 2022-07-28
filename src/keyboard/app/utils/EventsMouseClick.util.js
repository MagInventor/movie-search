import LettersFunctions from './LettersFunctions.util';

class EventsMouseClick {
  constructor() {
    this.input = document.querySelector('input');
    this.lettersFunctions = new LettersFunctions();
  }

  pressKeyRegular(key) {
    this.input.value += key.innerText;
  }

  pressKeyModifier(key) {
    switch (key.innerText) {
      case 'Backspace':
        this.input.value = this.lettersFunctions.removeLetter(this.input, -1, 0);
        break;

      case 'Tab':
        this.input.value += '    ';
        break;

      case 'Del':
        this.input.value = this.lettersFunctions.removeLetter(this.input, 0, 1);
        break;

      case 'Up':
        this.lettersFunctions.arrowStepUpDown(this.input, -1);
        break;

      case 'Lt':
        this.lettersFunctions.arrowStepLeftRight(this.input, -1);
        break;

      case 'Dn':
        this.lettersFunctions.arrowStepUpDown(this.input, 1);
        break;

      case 'Rt':
        this.lettersFunctions.arrowStepLeftRight(this.input, 1);
        break;

      default: break;
    }
  }

  pressKey(key) {
    if (key.classList.contains('key__regular')) {
      this.pressKeyRegular(key);
    } else {
      this.pressKeyModifier(key);
    }
  }
}

export default EventsMouseClick;
