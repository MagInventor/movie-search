import Star from '../../../assets/images/icons/star-rating.png';
import MovieTicket from '../../../assets/images/icons/movie-ticket.png';

class MovieCard {
  constructor(video) {
    this.movieCard = document.createElement('div');
    this.movieCardClass = 'movie-card';
    this.movieCard.classList.add(this.movieCardClass);

    this.frontCard = document.createElement('div');
    this.frontCard.classList.add('front');
    this.backCard = document.createElement('div');
    this.backCard.classList.add('back');
    this.movieCard.append(...[this.frontCard, this.backCard]);

    this.MovieTicket = document.createElement('button');
    this.MovieTicket.classList.add('movie-ticket');
    this.MovieTicketImg = document.createElement('img');
    this.MovieTicketImg.setAttribute('src', `${MovieTicket}`);
    this.MovieTicketImg.setAttribute('alt', 'movie-ticket');
    this.MovieTicketImg.setAttribute('class', 'movie-ticket-img');
    this.MovieTicket.append(this.MovieTicketImg);
    this.frontCard.append(this.MovieTicket);

    this.swiperSlider = document.createElement('div');
    this.swiperSlider.classList.add('swiper-slide');
    this.video = video;
  }

  addTitle() {
    this.imdbID = `https://www.imdb.com/title/${this.video.imdbID}/videogallery/?ref_=tt_pv_vi_sm`;
    this.title = document.createElement('div');
    this.title.classList.add(`${this.movieCardClass}__title`);

    this.h2 = document.createElement('h2');
    this.a = document.createElement('a');
    this.a.setAttribute('href', `${this.imdbID}`);
    this.a.setAttribute('target', '_blank');

    let title = this.video.Title;
    if (title.length > 50) title = `${title.substring(0, 51)}...`;
    this.a.insertAdjacentText('beforeend', `${title}`);
    this.h2.append(this.a);

    this.title.append(this.h2);
    this.frontCard.append(this.title);
    return this;
  }

  addPoster() {
    this.poster = document.createElement('div');
    this.poster.classList.add(`${this.movieCardClass}__poster`);

    if (this.video.Poster !== 'N/A') {
      this.img = document.createElement('img');
      this.img.setAttribute('src', `${this.video.Poster}`);
      this.img.setAttribute('alt', 'poster');
      this.poster.append(this.img);
    } else {
      this.p = document.createElement('p');
      this.p.insertAdjacentText('beforeend', 'Poster not found');
      this.poster.append(this.p);
    }

    this.frontCard.append(this.poster);
    return this;
  }

  addYear() {
    this.releaseDate = document.createElement('div');
    this.releaseDate.classList.add(`${this.movieCardClass}__release-date`);

    this.p = document.createElement('p');
    this.p.insertAdjacentText('beforeend', `${this.video.Year}`);

    this.releaseDate.append(this.p);
    this.frontCard.append(this.releaseDate);
    return this;
  }

  addRating() {
    this.rating = document.createElement('div');
    this.rating.classList.add(`${this.movieCardClass}__rating`);

    this.span = document.createElement('span');
    this.img = document.createElement('img');
    this.img.setAttribute('src', `${Star}`);
    this.img.setAttribute('alt', 'star');
    this.span.append(this.img);

    this.p = document.createElement('p');
    this.p.insertAdjacentText('beforeend', `${this.video.imdbRating}`);

    this.rating.append(...[this.span, this.p]);
    this.frontCard.append(this.rating);
    return this;
  }

  addAdditionalInformation() {
    this.director = document.createElement('div');
    this.writer = document.createElement('div');
    this.actors = document.createElement('div');
    this.genre = document.createElement('div');
    this.released = document.createElement('div');
    this.runtime = document.createElement('div');

    this.directorTitle = document.createElement('p');
    this.writerTitle = document.createElement('p');
    this.actorsTitle = document.createElement('p');
    this.genreTitle = document.createElement('p');
    this.releasedTitle = document.createElement('p');
    this.runtimeTitle = document.createElement('p');

    this.directorTitle.classList.add('additional');
    this.writerTitle.classList.add('additional');
    this.actorsTitle.classList.add('additional');
    this.genreTitle.classList.add('additional');
    this.releasedTitle.classList.add('additional');
    this.runtimeTitle.classList.add('additional');

    this.directorTitle.insertAdjacentText('beforeend', 'Director:');
    this.writerTitle.insertAdjacentText('beforeend', 'Writer:');
    this.actorsTitle.insertAdjacentText('beforeend', 'Actors:');
    this.genreTitle.insertAdjacentText('beforeend', 'Genre:');
    this.releasedTitle.insertAdjacentText('beforeend', 'Released:');
    this.runtimeTitle.insertAdjacentText('beforeend', 'Runtime:');

    this.director.append(this.directorTitle);
    this.writer.append(this.writerTitle);
    this.actors.append(this.actorsTitle);
    this.genre.append(this.genreTitle);
    this.released.append(this.releasedTitle);
    this.runtime.append(this.runtimeTitle);

    this.director.insertAdjacentText('beforeend', `${this.video.Director}`);
    this.writer.insertAdjacentText('beforeend', `${this.video.Writer}`);
    this.actors.insertAdjacentText('beforeend', `${this.video.Actors}`);
    this.genre.insertAdjacentText('beforeend', `${this.video.Genre}`);
    this.released.insertAdjacentText('beforeend', `${this.video.Released}`);
    this.runtime.insertAdjacentText('beforeend', `${this.video.Runtime}`);

    this.backCard.append(...[this.director, this.writer, this.actors,
      this.genre, this.released, this.runtime]);
    return this.back;
  }

  createMovieCard() {
    this.addTitle();
    this.addPoster();
    this.addYear();
    this.addRating();
    this.addAdditionalInformation();

    this.swiperSlider.append(this.movieCard);
    return this.swiperSlider;
  }
}

export default MovieCard;
