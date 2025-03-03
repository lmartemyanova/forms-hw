import Popover from './popover'

export const app = () => {
    const form = document.querySelector('.popover-form');
    const button = document.querySelector('.popover-button');

    const popover = new Popover(button);
    popover.createPopover();
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        if (popover._popover && !popover._popover.classList.contains('hidden')) {
            popover.hidePopover();
        } else {
            popover.showPopover();
        }
    });
};
