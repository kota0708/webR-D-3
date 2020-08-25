import gsap from 'gsap';
import Swiper from 'swiper';

// import fragmentShader from './gl/fragmentShader.frag';
// console.log(Swiper);

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('js-swiper');
    const swiper = new Swiper(el, {
      slidesPerView: 3,
      loopAdditionalSlides: 3,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 2000,
      autoplay: {
        delay: -100
      },
      loop: true
    });

    console.log(el);

    console.log(gsap);
    console.log(swiper);
  });
})();
