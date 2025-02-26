import Popover from '../popover';
import { app } from '../app';

describe('App Module', () => {
    let form;
    let button;
    let popoverInstance;

    beforeAll(() => {
        app;
    })

    beforeEach(() => {
        document.body.innerHTML = `
          <form class="popover-form" novalidate>
              <div>
                  <button type="submit" class="popover-button">Click to toggle popover</button>
              </div>
          </form>
        `;
        form = document.querySelector('.popover-form');
        button = document.querySelector('.popover-button');
        popoverInstance = new Popover(button);
        popoverInstance.createPopover();
    });

    afterEach(() => {
      if (popoverInstance._popover) {
        document.body.removeChild(popoverInstance._popover);
      }
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
        form.dispatchEvent(new Event('submit', {cancelable: true})); // Показываем popover
        const popoverElem = document.querySelector('.popover');
        expect(popoverElem.classList.contains('hidden')).toBe(false);
        form.dispatchEvent(new Event('submit', {cancelable: true})); // Повторно отправляем форму (скрываем popover)
        expect(popoverElem.classList.contains('hidden')).toBe(true);
    });
});
