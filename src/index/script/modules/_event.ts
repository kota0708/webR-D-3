import gsap from 'gsap';

import { makeArray } from '../../../shared/scripts/make-array';
import { offsetTop } from '../../../shared/scripts/offset';

type TData = {
  el: HTMLElement;
  top: number;
  isAnimation: boolean;
};

// 発火の間隔
const offset = 200;

class Event {
  private events: HTMLElement[];
  private texts: HTMLElement[];
  private datas: TData[];
  private datasText: TData[];
  private scrollBottom: number;

  constructor() {
    this.events = makeArray(document.querySelectorAll('.js-event'));
    this.texts = makeArray(document.querySelectorAll('.js-event-text'));
    this.datas = [];
    this.datasText = [];
    this.scrollBottom = 0;
  }

  public init(): void {
    this.setData();
    this.setScroll();
  }

  // スクロールイベントで使うデータを格納
  private setData(): void {
    this.datas = this.events.map((r: HTMLElement) => {
      return {
        el: r,
        top: offsetTop(r) + offset,
        isAnimation: false
      };
    });

    this.datasText = this.texts.map((r: HTMLElement) => {
      return {
        el: r,
        top: offsetTop(r) + offset,
        isAnimation: false
      };
    });
  }

  public onScroll(): void {
    this.setScroll();
    this.onEventScroll();
  }

  // スクロール量を格納
  private setScroll(): void {
    const top = window.pageYOffset || document.documentElement.scrollTop;

    this.scrollBottom = top + window.innerHeight;
  }

  // スクロールイベント
  private onEventScroll(): void {
    this.datasText.forEach((r: TData) => {
      const { el, top, isAnimation } = r;

      if (top < this.scrollBottom && !isAnimation) {
        el.classList.add('open');

        r.isAnimation = true;
      }
    });

    this.datas.forEach((r: TData) => {
      const { el, top, isAnimation } = r;

      if (top < this.scrollBottom && !isAnimation) {
        const bg = el.querySelector('.js-event-bg');
        const imageBg = el.querySelector('.js-event-image-bg');
        const image = el.querySelector('.js-event-image');
        const imageLazy = el.querySelector('.js-event-image-lazy');
        const text = el.querySelector('.js-event-text');

        gsap.to(bg, {
          duration: 0.6,
          width: '100%',
          ease: 'power3.out'
        });

        gsap.to(imageBg, {
          duration: 0.6,
          delay: 0.3,
          width: '100%',
          ease: 'power3.out'
        });

        gsap.to([text, image], {
          duration: 0.8,
          delay: 0.7,
          opacity: 1,
          ease: 'power3.out'
        });

        gsap.to(imageLazy, {
          duration: 0.4,
          delay: 0.7,
          opacity: 1,
          ease: 'power3.out',
          onComplete: () => {
            setTimeout(() => {
              imageLazy.remove();
            }, 500);
          }
        });

        r.isAnimation = true;
      }
    });
  }

  public onResize(): void {
    // データを再セット
    this.datas = this.datas.map((r: TData) => {
      const { el, isAnimation } = r;

      return {
        el,
        top: offsetTop(el),
        isAnimation
      };
    });

    // データを再セット
    this.datasText = this.datasText.map((r: TData) => {
      const { el, isAnimation } = r;

      return {
        el,
        top: offsetTop(el),
        isAnimation
      };
    });
  }
}

export default Event;
