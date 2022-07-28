class LettersFunctions {
  constructor() {
    this.data = '';
  }

  getCaret(str) {
    if (str.selectionStart) {
      return str.selectionStart;
    }

    if (document.selection) {
      str.focus();

      this.range = document.selection.createRange();
      if (this.range == null) {
        return 0;
      }

      this.rangeStr = str.createTextRange();
      this.rangeClone = this.rangeStr.duplicate();

      this.rangeStr.moveToBookmark(this.range.getBookmark());
      this.rangeClone.setEndPoint('EndToStart', this.rangeStr);

      return this.rangeClone.text.length;
    }

    return 0;
  }

  resetCursor(textElement, currentPosition) {
    if (textElement.setSelectionRange) {
      textElement.focus();
      textElement.setSelectionRange(currentPosition, currentPosition);
    } else if (textElement.createTextRange) {
      this.range = textElement.createTextRange();
      this.range.moveStart('character', currentPosition);
      this.range.select();
    }
  }

  removeLetter(textElement, shiftLeft, shiftRight) {
    const INPUT = document.querySelector('input');
    this.currentPosition = this.getCaret(textElement);

    this.text = textElement.value;
    this.textElement = this.text.substr(0, this.currentPosition + shiftLeft);
    this.textElement += this.text.substr(this.currentPosition + shiftRight, this.text.length);
    INPUT.value = this.textElement;

    this.resetCursor(INPUT, this.currentPosition + shiftLeft);
    return INPUT.value;
  }

  arrowStepLeftRight(input, step) {
    this.currentPosition = this.getCaret(input);
    this.resetCursor(input, this.currentPosition + step);
    return input;
  }

  arrowStepUpDown(input, step) {
    this.currentPosition = step < 0 ? 0 : input.value.length;
    this.resetCursor(input, this.currentPosition);
    return input;
  }
}

export default LettersFunctions;
