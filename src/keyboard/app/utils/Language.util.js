import Keyboard from '../components/Keyboard.component';

class Language {
  constructor() {
    this.languages = ['en', 'ru'];
    this.langIndex = this.languages.indexOf(localStorage.getItem('lang'));
    this.current = this.langIndex >= 0 ? this.langIndex : 0;
    this.currentLanguage = this.languages[this.current];

    this.keyboard = new Keyboard();
    this.virtualKeyboard = document.querySelector('.keyboard');
    this.control = false;
  }

  changeLetters(language, sizeLetter) {
    this.keyboard.addKeys(this.virtualKeyboard, language, sizeLetter);
  }

  onShift(sizeLetter, key) {
    if (key === 'ShiftLeft' || key === 'ShiftRight' || key === 'Shift') {
      this.changeLetters(this.languages[this.current], sizeLetter);
    }
  }

  changeLanguage() {
    this.current += 1;
    if (this.current === this.languages.length) {
      this.current = 0;
    }

    this.changeLetters(this.languages[this.current], 'small');
    localStorage.setItem('lang', this.languages[this.current]);
  }

  changeLanguageOnKeyboard(key) {
    if (key === 'ControlLeft' || key === 'ControlRight') {
      this.control = true;
    }

    setTimeout(() => {
      this.control = false;
    }, 200);

    if ((key === 'ShiftLeft' || key === 'ShiftRight') && this.control) {
      this.changeLanguage();
      this.control = false;
    }
  }
}

export default Language;
