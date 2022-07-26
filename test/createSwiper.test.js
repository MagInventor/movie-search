import createSwiper from '../src/js/slider/createSwiper';

describe('Function createSwiper', () => {
  it('Should be return object', () => {
    expect(createSwiper()).toBeInstanceOf(Object);
   });
});
