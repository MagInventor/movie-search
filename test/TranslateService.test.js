import TranslateService from '../src/js/search/TranslateService';

describe('TranslateService.translate', () => {
  it('Should be return object', () => {
    const translateService = new TranslateService();
    expect(translateService.translate('movieSearch')).toBeInstanceOf(Object);
   });

  it('Should be return object', () => {
    const translateService = new TranslateService();
    expect(translateService.translate('star')).toBeInstanceOf(Object);
   });

   it('Should be return object', () => {
    const translateService = new TranslateService();
    expect(translateService.translate('car')).toBeInstanceOf(Object);
   });

   it('Should be return object', () => {
    const translateService = new TranslateService();
    expect(translateService.translate('travel')).toBeInstanceOf(Object);
   });

   it('Should be return object', () => {
    const translateService = new TranslateService();
    expect(translateService.translate('friend')).toBeInstanceOf(Object);
   });

   it('Should be return object', () => {
    const translateService = new TranslateService();
    expect(translateService.translate('success')).toBeInstanceOf(Object);
   });
});
