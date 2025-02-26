export default class Popover {
  constructor(element) {
      this._element = element;
      this._popover = null;
  }

  static get markup() {
      return `
      <h3 class="popover-title">Popover title</h3>
      <p class="popover-content">And here's some amazing content. It's very engaging. Right?</p>
      `;
  }

  createPopover() {
      this._popover = document.createElement('div');
      this._popover.classList.add('popover', 'hidden');
      this._popover.innerHTML = Popover.markup;
      document.body.appendChild(this._popover);
  }

  showPopover() {
      this._popover.classList.remove('hidden');

      const buttonRect = this._element.getBoundingClientRect();
      const popoverRect = this._popover.getBoundingClientRect();

      const top = buttonRect.top - popoverRect.height - 10 + window.scrollY;
      const left = buttonRect.left + (buttonRect.width / 2) - (popoverRect.width / 2) + window.scrollX;

      this._popover.style.top = `${top}px`;
      this._popover.style.left = `${left}px`;
  }

  hidePopover() {
      this._popover.classList.add('hidden');
  }
}
