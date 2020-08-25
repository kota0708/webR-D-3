import Swiper from 'swiper';

class Swipe {
  private elModal: HTMLElement;
  private elFooter: HTMLElement;

  private timer: number;

  private swiperModal: Swiper;
  private swiperFooter: Swiper;

  constructor() {
    this.elModal = document.getElementById('js-swiper-modal');
    this.elFooter = document.getElementById('js-swiper-footer');
    this.timer = -1;

    this.onResize = this.onResize.bind(this);
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
}

export default Swipe;
