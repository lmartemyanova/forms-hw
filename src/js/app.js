import Popover from './popover'

export const app = () => {document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.popover-form');
    const button = document.querySelector('.popover-button');

    const popover = new Popover(button);
    popover.createPopover();
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Отключаем стандартное поведение формы

        if (popover._popover && !popover._popover.classList.contains('hidden')) {
            popover.hidePopover();
        } else {
            popover.showPopover();
        }
    });
  })
};
