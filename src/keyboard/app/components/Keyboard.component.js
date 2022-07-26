import KeyboardDetails from './KeyboardDetails.component';
import languages from '../layouts/layoutsLanguages';


export default class Keyboard {
  constructor() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.keyboardDetails = new KeyboardDetails();
    this.currentLanguage = localStorage.getItem('lang') || 'en';
  }

  createKeysModifiers(key, shift) {
    let keyClasses = 'key ';
    if (shift !== null) keyClasses += 'key__regular';
    else keyClasses += 'key__modifier';

    this.key = document.createElement('div');
    this.key.classList.add(...keyClasses.split(' '));
    if (key === 'Enter') this.key.classList.add('key_enter');

    this.key.insertAdjacentHTML('beforeend', `${key}`);
    return this.key;
  }

  createKeyboard() {
    this.keyboardDetails.keyboardPattern.forEach((row) => {
      this.row = document.createElement('div');
      this.row.classList.add('row');

      row.forEach((el) => {
        const keyValue = el ? el.small : '';
        const key = this.createKeysModifiers(keyValue, el.shift);
        this.row.append(key);
      });
      this.keyboard.append(this.row);
    });
    return this.keyboard;
  }

  createKeys(lang) {
    this.template = this.keyboardDetails.keyboardPattern;
    this.keys = this.keyboardDetails.createKeyboard(this.template, languages[lang], '');
    return this.keys;
  }

  addKeys(keyboard, language, type) {
    this.keyRegular = 0;
    keyboard.querySelectorAll('.key__regular').forEach((el) => {
      const KEY_HTML_ELEMENT = el;
      KEY_HTML_ELEMENT.innerHTML = `${languages[language][this.keyRegular][type]}`;
      this.keyRegular += 1;
    });
  }

  render() {
    this.keyboard = this.createKeyboard();
    this.addKeys(this.keyboard, this.currentLanguage, 'small');
    return this.keyboard;
  }
}
