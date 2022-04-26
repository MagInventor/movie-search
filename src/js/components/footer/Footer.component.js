import GitHub from '../../../assets/images/icons/github.png';

class Footer {
  constructor() {
    this.footer = document.createElement('footer');
    this.container = document.createElement('div');
    this.container.classList.add('container', 'footer__inner');
  }

  createFooter() {
    this.rss = document.createElement('div');
    this.rss.insertAdjacentText('beforeend', 'RS School 2020q1');
    this.rss.classList.add('rolling-scopes');

    this.github = document.createElement('div');
    this.githubImg = document.createElement('img');
    this.githubImg.setAttribute('src', `${GitHub}`);
    this.githubImg.setAttribute('alt', 'github');
    this.github.append(this.githubImg);
    this.github.insertAdjacentText('beforeend', 'paulwebdeveloper');
    this.github.classList.add('github');

    this.container.append(...[this.rss, this.github]);
    return this.container;
  }

  addFooter() {
    this.createFooter();
    this.footer.append(this.container);
    return this.footer;
  }
}

export default Footer;
