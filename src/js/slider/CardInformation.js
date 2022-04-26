class CardInformation {
  constructor() {
    this.data = [];
  }

  flipCard() {
    this.cards = document.querySelector('.swiper-wrapper');
    this.cards.addEventListener('click', (event) => {
      this.cards.querySelectorAll('.front button img').forEach((el, position) => {
        if (event.target === el) {
          const card = this.cards.querySelectorAll('.movie-card')[position];
          card.classList.add('active');
          setTimeout(() => card.classList.remove('active'), 8000);
        }
      });
    });
  }
}

export default CardInformation;
