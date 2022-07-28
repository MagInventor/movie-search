import apiKeys from '../constants/apiKeys.constant';

class TranslateService {
  constructor() {
    this.https = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    this.apikey = apiKeys.Yandex;
  }

  getPhrase(phrase) {
    this.url = `${this.https}?key=${this.apikey}&text=${phrase}&lang=ru-en`;

    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => data.text.join(''))
      .catch((error) => error);
  }

  translate(phrase) {
    this.regexp = /[а-яёА-ЯЁ]/i;
    return this.regexp.test(phrase) ? this.getPhrase(phrase) : Promise.resolve(phrase);
  }
}

export default TranslateService;
