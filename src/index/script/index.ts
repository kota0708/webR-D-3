import gsap from 'gsap';
import Swiper from 'swiper';

import fragmentShader from './gl/fragmentShader.frag';

console.log(fragmentShader);
console.log(Swiper);

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    console.log(gsap);
  });
})();
