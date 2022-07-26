import Keyboard from '../components/Keyboard.component';
import Language from './Language.util';
import EventsMouseClick from './EventsMouseClick.util';

class EventsKeyboard {
  constructor() {
    this.keyboard = new Keyboard();
    this.currentLanguage = localStorage.getItem('lang') || 'en';
    this.keys = this.keyboard.createKeys(this.currentLanguage);
    this.virtualKeyboard = '';
    this.keyboardRows = '';
    this.input = '';
    this.language = {};
    this.eventsMouseClick = {};
  }

  setKeyboardData() {
    this.virtualKeyboard = document.querySelector('.keyboard');
    this.keyboardRows = document.querySelectorAll('.keyboard .row');
    this.input = document.querySelector('input');
    this.language = new Language();
    this.eventsMouseClick = new EventsMouseClick();
  }

  mouseDown(event) {
    event.preventDefault();
    this.keyboardRows.forEach((row) => {
      row.querySelectorAll('.key').forEach((key) => {
        if (key === event.target) {
          key.classList.add('active');
          this.language.onShift('shift', key.innerHTML);
          this.eventsMouseClick.pressKey(key);

          if (key.innerHTML === 'Lang') {
            this.language.changeLanguage();
          }
        }
      });
    });
  }

  mouseUp(event) {
    event.preventDefault();
    this.keyboardRows.forEach((row) => {
      row.querySelectorAll('.key').forEach((key) => {
        if (key === event.target) {
          if (key.classList.contains('key__regular')) {
            setTimeout(() => key.classList.remove('active'), 300);
          } else {
            key.classList.remove('active');
          }
          this.language.onShift('small', key.innerHTML);
        }
      });
    });
  }

  keyDown(event) {
    this.keys.forEach((row, i) => row.forEach((key, j) => {
      if (key.code === event.code) {
        this.input.focus();
        this.keyboardRows[i].querySelectorAll('.key')[j].classList.add('active');
        this.language.onShift('shift', key.code);
        this.language.changeLanguageOnKeyboard(key.code);
      }
    }));
  }

  keyUp(event) {
    this.keys.forEach((row, i) => row.forEach((key, j) => {
      if (key.code === event.code) {
        if (this.keyboardRows[i].querySelectorAll('.key')[j].classList.contains('key__regular')) {
          setTimeout(() => {
            this.keyboardRows[i].querySelectorAll('.key')[j].classList.remove('active');
          }, 300);
        } else {
          this.keyboardRows[i].querySelectorAll('.key')[j].classList.remove('active');
        }
        this.language.onShift('small', key.code);
      }
    }));
  }
}

const eventsKeyboard = new EventsKeyboard();

export default eventsKeyboard;
