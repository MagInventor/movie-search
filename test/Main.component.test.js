import Main from '../src/js/components/main/Main.component';

describe('Main.createSection', () => {
  const main = new Main();
  it('Should be return section', () => {
    const section = `<section class="search-field"><div class="container search-field__container"></div></section>`;
    expect(main.createSection('search-field').outerHTML.toString()).toBe(section);
  });

  it('Should be return section', () => {
    const section = `<section class="movie-cards"><div class="container movie-cards__container"></div></section>`;
    expect(main.createSection('movie-cards').outerHTML.toString()).toBe(section);
  });

  it('Should be return section', () => {
    const section = `<section class="virtual-keyboard"><div class="container virtual-keyboard__container"></div></section>`
    expect(main.createSection('virtual-keyboard').outerHTML.toString()).toBe(section);
  });
});
