import Swipe from './modules/_swiper';
import Event from './modules/_event';

// import fragmentShader from './gl/fragmentShader.frag';
// console.log(Swiper);

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const toggleWrap = document.getElementById('js-toggle-wrap');
    const toggle = document.getElementById('js-toggle');
    const modal = document.getElementById('js-modal');

    const swiper = new Swipe();
    const event = new Event();

    swiper.init();
    event.init();

    window.addEventListener('resize', () => {
      swiper.onResize();
      event.onResize();
    });

    window.addEventListener('scroll', () => {
      event.onScrill();
    });

    toggleWrap.addEventListener('click', () => {
      toggle.classList.toggle('open');

      const isModal = toggle.classList.contains('open');

      if (isModal) {
        modal.classList.add('open');
      } else {
        modal.classList.remove('open');
      }
    });
  });
})();
