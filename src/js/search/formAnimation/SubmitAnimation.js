export default class SubmitAnimation {
  constructor() {
    this.submit = document.querySelector('.form-search__submit');
  }

  animation() {
    this.submit.classList.add('active');

    setTimeout(() => this.submit.classList.add('loader'), 125);

    setTimeout(() => {
      this.submit.classList.remove('loader', 'active');
      this.submit.innerText = 'Success';
      this.submit.classList.add('success', 'animated', 'pulse');
    }, 1800);

    setTimeout(() => {
      this.submit.innerText = 'Search';
      this.submit.classList.remove('success', 'animated', 'pulse');
    }, 2900);
  }
}
