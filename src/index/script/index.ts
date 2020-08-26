import Swipe from './modules/_swiper';
import Event from './modules/_event';
import Menu from './modules/_menu';
import Circle from './modules/_circle';

// import fragmentShader from './gl/fragmentShader.frag';
// console.log(Swiper);

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swipe();
    const event = new Event();
    const menu = new Menu();
    // const circle = new Circle();

    swiper.init();
    event.init();
    menu.init();

    window.addEventListener('resize', () => {
      swiper.onResize();
      event.onResize();
    });

    window.addEventListener('scroll', () => {
      event.onScroll();
    });
  });
})();
