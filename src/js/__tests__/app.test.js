import { app } from '../app';

describe('App Module', () => {
    let form;

    beforeEach(() => {
        document.body.innerHTML = `
          <form class="popover-form" novalidate>
              <div>
                  <button type="submit" class="popover-button">Click to toggle popover</button>
              </div>
          </form>
        `;
        app();
        form = document.querySelector('.popover-form');
    });

    test('popover создается при инициализации', () => {
        expect(document.querySelector('.popover')).not.toBeNull(); 
    });

    test('popover должен появляться при отправке формы', () => {
        form.dispatchEvent(new Event('submit', {cancelable: true}));
        const popoverElem = document.querySelector('.popover');
        expect(popoverElem.classList.contains('hidden')).toBe(false); 
    });

    test('popover должен скрываться при повторной отправке формы', () => {
        form.dispatchEvent(new Event('submit', {cancelable: true})); 
        const popoverElem = document.querySelector('.popover');
        expect(popoverElem.classList.contains('hidden')).toBe(false); 
        form.dispatchEvent(new Event('submit', {cancelable: true})); 
        expect(popoverElem.classList.contains('hidden')).toBe(true); 
    });
});
