import createSwiper from '../slider/createSwiper';
import 'swiper/css/swiper.css';
import SearchAnimation from './formAnimation/SearchAnimation';
import SubmitAnimation from './formAnimation/SubmitAnimation';
import TranslateService from './TranslateService';
import VideosService from './VideosService';
import MovieCard from '../components/main/MovieCard';
import Slider from '../components/main/Slider';
import Notification from '../notifications/Notifications';
import CardInformation from '../slider/CardInformation';
import startKeyboard from '../../keyboard/startKeyboard';

class Form {
  constructor() {
    this.keyboard = document.querySelector('.form-search__keyboard');
    this.submit = document.querySelector('.form-search__submit');
    this.search = document.querySelector('.search');
    this.clear = document.querySelector('.clear-form');
    this.searchAnimation = new SearchAnimation();
    this.submitAnimation = new SubmitAnimation();
    this.translateService = new TranslateService();
    this.videosService = new VideosService();
    this.notification = new Notification();
    this.cardInformation = new CardInformation();
    this.translatedPhrase = '';
    this.page = 1;
    this.swiper = {};
  }

  async getVideo(video, videosLength) {
    this.videoData = await video;
    const movieCard = new MovieCard(this.videoData).createMovieCard();
    document.querySelector('.swiper-wrapper').append(movieCard);

    if (document.querySelectorAll('.swiper-slide').length === videosLength) {
      this.swiper = createSwiper();
      this.cardInformation.flipCard();
      setTimeout(() => document.querySelector('.swiper-container').classList.remove('hide'), 1200);
    }

    if (document.querySelectorAll('.swiper-slide').length > 10) {
      this.swiper.update();
    }
  }

  showMovies(videos) {
    videos.map((video) => this.getVideo(video, videos.length));
  }

  async loadMoreVideos(page) {
    const videos = await this.videosService.getVideos(this.translatedPhrase, page);
    this.showMovies(videos);
  }

  async onButtonNext() {
    this.quantityCards = document.querySelectorAll('.swiper-slide').length;

    if (this.swiper.activeIndex >= this.quantityCards - 10) {
      this.page += 1;
      this.loadMoreVideos(this.page);
    }
  }

  async onSumbit(event) {
    if (event) event.preventDefault();
    this.page = 1;

    if (event) event.preventDefault();
    this.submitAnimation.animation();
    this.notification.clearMessage();

    const initialPhrase = 'star wars';
    const phrase = document.getElementById('search').value || initialPhrase;
    this.translatedPhrase = await this.translateService.translate(phrase);
    const videos = await this.videosService.getVideos(this.translatedPhrase, this.page);

    if (!videos.length) {
      this.notification.showErrorMessage(phrase, this.translatedPhrase);
    } else {
      if (phrase !== initialPhrase
        && !document.querySelector('.device').classList.contains('hide')) {
        setTimeout(() => this.onKeyboard(), 1000);
      }
      this.notification.showFormMessage(phrase, this.translatedPhrase);
      document.querySelector('.swiper-container').classList.add('hide');
      document.querySelector('.swiper-wrapper').innerHTML = '';
      this.showMovies(videos);
    }
  }

  onKeyboard(event) {
    if (event) event.preventDefault();
    document.querySelector('.device').classList.toggle('hide');
    document.querySelector('.form-search__keyboard').classList.toggle('active');
    return this;
  }

  clearForm() {
    document.getElementById('search').value = '';
    return this;
  }

  activationForm() {
    this.searchAnimation.animation();
    this.keyboard.onclick = (event) => this.onKeyboard(event);
    this.clear.onclick = () => this.clearForm();

    this.submit.onclick = (event) => this.onSumbit(event);
    this.search.onclick = (event) => this.onSumbit(event);
    this.slider = new Slider().createSlider();
    document.querySelector('.swiper-button-next').onclick = () => this.onButtonNext();
    document.querySelector('.swiper-wrapper').addEventListener('click', () => this.onButtonNext());

    startKeyboard();
    document.querySelector('.key_enter').addEventListener('click', (e) => this.onSumbit(e));
    window.addEventListener('keydown', (key) => {
      if (key.keyCode === 27) {
        this.onKeyboard();
      }
    });
  }
}

export default Form;
