import gsap from 'gsap';

import { makeArray } from '../../../shared/scripts/make-array';

class Circle {
  private circleWrap: HTMLElement;
  private circles: HTMLElement[];
  private image: HTMLElement;

  constructor() {
    this.circleWrap = document.getElementById('js-circle-wrap');
    this.circles = makeArray(document.querySelectorAll('.js-circle'));

    this.image = document.getElementById('js-top-apng');

    const a = APNG.animateImage(this.image);

    console.log(a);
  }

  public onAnimation(callBack: () => void): void {
    let count = 0;

    this.circles.forEach((r: HTMLElement, i: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isSp = !!(width < height);

      const rate = width < height ? (height / width) * 1.5 : width / height;

      gsap.set(this.circleWrap, {
        opacity: 1,
        visibility: 'visible'
      });

      gsap.set(r, {
        borderWidth: `${width}px`
      });

      gsap.to(r, {
        scale: rate,
        transformOrigin: 'center',
        duration: isSp ? rate * (0.3 + i * -0.09) : rate * (0.5 + i * -0.05),
        ease: 'none',
        delay: i * 0.3,
        onComplete: () => {
          count++;

          gsap.to(r, {
            borderWidth: 0,
            duration: isSp ? 1 : 2,
            ease: 'power2.out',
            onComplete: () => {
              count++;

              if (count >= 3) {
                gsap.set(this.circleWrap, {
                  visibility: 'hidden'
                });
                gsap.set(this.circles, {
                  scale: 0
                });
              }
            }
          });

          callBack();
        }
      });
    });
  }
}

export default Circle;
