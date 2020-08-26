class Menu {
  private toggleWrap: HTMLElement;
  private toggle: HTMLElement;
  private modal: HTMLElement;
  private isModal: boolean;

  constructor() {
    this.toggleWrap = document.getElementById('js-toggle-wrap');
    this.toggle = document.getElementById('js-toggle');
    this.modal = document.getElementById('js-modal');

    this.isModal = false;

    this.onClickToggle = this.onClickToggle.bind(this);
  }

  public init(): void {
    this.onListener();
  }

  private onListener(): void {
    this.toggleWrap.addEventListener('click', this.onClickToggle);
  }

  private onClickToggle(): void {
    this.toggle.classList.toggle('open');

    this.isModal = this.toggle.classList.contains('open');

    if (this.isModal) {
      this.modal.classList.add('open');
    } else {
      this.modal.classList.remove('open');
    }
  }
}

export default Menu;
