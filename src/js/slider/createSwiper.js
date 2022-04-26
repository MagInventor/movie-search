import Swiper from 'swiper';

const createSwiper = () => {
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    preventClicks: false,
    preventClicksPropagation: false,
    runCallbacksOnInit: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: true,
      dynamicMainBullets: 7,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      820: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1060: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
  return mySwiper;
};

export default createSwiper;
