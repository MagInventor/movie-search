import apiKeys from '../constants/apiKeys.constant';
import Notification from '../notifications/Notifications';

class VideosService {
  constructor() {
    this.https = 'https://www.omdbapi.com';
    this.apikey = apiKeys.OMDb_API_Key;
    this.data = [];
    this.notifications = new Notification();
  }

  getVideoDetails(imdbID) {
    this.url = `${this.https}/?i=${imdbID}&apikey=${this.apikey}`;

    return fetch(this.url)
      .then((response) => response.json())
      .then((video) => ({
        imdbID: video.imdbID,
        Title: video.Title,
        Poster: video.Poster,
        Year: video.Year,
        imdbRating: video.imdbRating,
        Director: video.Director,
        Writer: video.Writer,
        Actors: video.Actors,
        Genre: video.Genre,
        Released: video.Released,
        Runtime: video.Runtime,
      }))
      .catch((error) => this.notifications.showServerError(error));
  }

  getVideos(phrase, page) {
    this.page = page || 1;
    this.url = `${this.https}/?apikey=${this.apikey}&s=${phrase}&page=${this.page}`;

    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response) {
          this.data = data.Search.map((video) => this.getVideoDetails(video.imdbID));
        }
        return this.data;
      })
      .catch((error) => error);
  }
}

export default VideosService;
