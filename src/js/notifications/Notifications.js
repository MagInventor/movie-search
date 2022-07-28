class Notifications {
  constructor() {
    this.formMessage = document.querySelector('.form-message');
  }

  clearMessage() {
    this.formMessage.innerHTML = '';
  }

  showFormMessage(phrase, translatedPhrase) {
    setTimeout(() => {
      if (phrase !== translatedPhrase) {
        this.formMessage.innerHTML = `Showing results for "${translatedPhrase}"`;
      }
    }, 1700);
    setTimeout(() => this.clearMessage(), 30000);
  }

  showErrorMessage(phrase, translatedPhrase) {
    setTimeout(() => {
      if (phrase !== translatedPhrase) {
        this.formMessage.innerHTML = `No results for "${translatedPhrase}"`;
      } else {
        this.formMessage.innerHTML = `No results for "${phrase}"`;
      }
    }, 1700);
    setTimeout(() => this.clearMessage(), 30000);
  }

  showServerError(error) {
    setTimeout(() => {
      this.formMessage.innerHTML = `${error}`;
    }, 1700);
    setTimeout(() => this.clearMessage(), 10000);
  }
}

export default Notifications;
