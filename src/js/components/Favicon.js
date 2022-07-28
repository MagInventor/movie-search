import FaviconImg from '../../assets/images/favicon.png';

class Favicon {
  constructor() {
    this.data = {};
  }

  createFavicon() {
    this.link = document.createElement('link');
    this.link.setAttribute('rel', 'movie search icon');
    this.link.setAttribute('href', `${FaviconImg}`);
    this.link.setAttribute('type', 'image/png');
    return this.link;
  }

  addFavicon() {
    this.link = this.createFavicon();
    document.querySelector('head').append(this.link);
  }
}

const favicon = new Favicon();

export default favicon;
