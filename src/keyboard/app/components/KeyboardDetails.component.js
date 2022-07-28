import pattern from '../patterns/pattern';
import modifiers from '../layouts/modifiers';


class KeyboardDetails {
  constructor() {
    this.pattern = pattern;
    this.modifiers = modifiers;
    this.keyboardPattern = this.createKeyboard(this.pattern, this.modifiers, 'mod');
  }

  createKeyboardRow() {
    this.row = document.createElement('div');
    this.row.classList.add('row');
    return this.row;
  }

  createKeyboard(template, elements, compareValue) {
    this.keyboard = [];
    let count = -1;
    this.row = [];

    Object.keys(template).forEach((row) => {
      this.row = template[row].map((key) => {
        let keyValue = key;
        if (key === compareValue) {
          count += 1;
          keyValue = elements[count];
        }
        return keyValue;
      });
      this.keyboard.push(this.row);
    });

    return this.keyboard;
  }
}

export default KeyboardDetails;
