import Swipe from './modules/_swiper';
import Event from './modules/_event';
import Menu from './modules/_menu';

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
      const wrap = document.getElementById('js-wrap');

      wrap.classList.add('open');

      const swiper = new Swipe();
      const event = new Event();
      const menu = new Menu();

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
  });
})();
