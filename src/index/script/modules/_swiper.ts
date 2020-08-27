import Swiper from 'swiper';

import Circle from './_circle';

import { makeArray } from '../../../shared/scripts/make-array';

class Swipe {
  private elModal: HTMLElement;
  private elLoaderWrap: HTMLElement;
  private elFooter: HTMLElement;
  private elLoaders: HTMLElement[];

  private timer: number;

  private swiperModal: Swiper;
  private swiperFooter: Swiper;
  private circle: Circle;

  private swiperLoaders: Swiper[];

  constructor() {
    this.elModal = document.getElementById('js-swiper-modal');
    this.elFooter = document.getElementById('js-swiper-footer');
    this.elLoaderWrap = document.getElementById('js-loader-wrap');
    this.elLoaders = makeArray(document.querySelectorAll('.js-swiper-Loading'));
    this.timer = -1;

    this.swiperLoaders = [];

    this.onResize = this.onResize.bind(this);

    this.circle = new Circle();
  }

  public init(): void {
    this.swiperFooter = new Swiper(this.elFooter, {
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

    this.swiperModal = new Swiper(this.elModal, {
      slidesPerView: 3,
      loopAdditionalSlides: 3,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 2000,
      autoplay: {
        delay: 0
      },
      breakpoints: {
        1130: {
          slidesPerView: 12,
          loop: true
        },
        760: {
          slidesPerView: 6,
          loop: true
        },
        450: {
          slidesPerView: 3,
          loop: true
        }
      },
      loop: true
    });

    this.elLoaders.forEach((r: HTMLElement, i: number) => {
      const slidesPerView = Number(r.dataset.slidesperview);
      const speed = Number(r.dataset.speed);
      const direction = Number(r.dataset.direction);

      const swipe = new Swiper(r, {
        slidesPerView,
        loopAdditionalSlides: 3,
        centeredSlides: true,
        allowTouchMove: false,
        speed,
        autoplay: {
          delay: 0,
          reverseDirection: !!(direction === 1)
        },
        breakpoints: {
          1130: {
            slidesPerView: slidesPerView + 0.6,
            loop: true
          },
          760: {
            slidesPerView: slidesPerView + 0.3,
            loop: true
          },
          450: {
            slidesPerView,
            loop: true
          }
        },
        loop: true
      });

      this.swiperLoaders[i] = swipe;
    });

    window.setTimeout(() => {
      this.circle.onAnimation(() => this.onDestory());
    }, 2000);
  }

  public onResize(): void {
    this.onResizeModal();
  }

  private onResizeModal(): void {
    if (!this.swiperModal.autoplay) {
      return;
    }
    window.clearTimeout(this.timer);
    this.swiperModal.autoplay.stop();

    this.timer = window.setTimeout(() => {
      this.swiperModal.autoplay.start();
    }, 500);
  }

  private onDestory(): void {
    this.elLoaderWrap.classList.add('close');

    this.swiperLoaders.forEach((r: Swiper) => {
      r.autoplay.stop();
    });
  }
}

export default Swipe;
