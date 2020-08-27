import gsap from 'gsap';

import { makeArray } from '../../../shared/scripts/make-array';
import Circle from './_circle';

class Menu {
  private toggleWrap: HTMLElement;
  private toggle: HTMLElement;
  private modal: HTMLElement;
  private lists: HTMLElement[];
  private isModal: boolean;
  private circle: Circle;

  constructor() {
    this.toggleWrap = document.getElementById('js-toggle-wrap');
    this.toggle = document.getElementById('js-toggle');
    this.modal = document.getElementById('js-modal');
    this.lists = makeArray(document.querySelectorAll('.js-menu-list'));

    this.isModal = false;

    this.onClickToggle = this.onClickToggle.bind(this);

    this.circle = new Circle();
  }

  public init(): void {
    this.onListener();
  }

  private onListener(): void {
    this.toggleWrap.addEventListener('click', this.onClickToggle);

    this.lists.forEach((r: HTMLElement) => {
      r.addEventListener('click', () => {
        this.onClickList();
      });

      r.addEventListener('mouseenter', () => {
        gsap.to(r, {
          yoyo: true,
          repeat: 1,
          scaleY: 1.2,
          duration: 0.6,
          ease: 'bounce.in'
        });
      });
    });
  }

  private onClickList() {
    this.circle.onAnimation(() => this.onClickToggle());
  }

  private onClickToggle(): void {
    this.toggle.classList.toggle('open');

    this.isModal = this.toggle.classList.contains('open');

    if (this.isModal) {
      this.modal.classList.add('open');

      this.lists.forEach((r: HTMLElement, i: number) => {
        setTimeout(() => {
          r.classList.add('open');
        }, 500 * ((i + 1) * 0.2));
      });
    } else {
      this.modal.classList.remove('open');

      this.lists.forEach((r: HTMLElement) => {
        r.classList.remove('open');
      });
    }
  }
}

export default Menu;
