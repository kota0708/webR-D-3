import Swipe from './modules/_swiper';

// import fragmentShader from './gl/fragmentShader.frag';
// console.log(Swiper);

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swipe();

    swiper.init();

    window.addEventListener('resize', () => {
      swiper.onResize();
    });
  });
})();
