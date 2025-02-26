import Popover from '../popover';

describe('Popover', () => {
    let button;
    let popoverInstance;

    beforeEach(() => {
        document.body.innerHTML = `
            <button class="popover-button">Click me</button>
        `;
        button = document.querySelector('.popover-button');
        popoverInstance = new Popover(button);
        popoverInstance.createPopover();
    });

    afterEach(() => {
      if (popoverInstance._popover) {
        document.body.removeChild(popoverInstance._popover);
      }
    });

    test('должен создать popover в body', () => {
        expect(document.querySelector('.popover')).not.toBeNull();
    });

    test('popover должен быть скрыт после создания', () => {
        const popover = document.querySelector('.popover');
        expect(popover.classList.contains('hidden')).toBe(true);
    });

    test('метод showPopover должен показывать popover', () => {
        popoverInstance.showPopover();
        const popover = document.querySelector('.popover');
        expect(popover.classList.contains('hidden')).toBe(false);
    });

    test('метод hidePopover должен скрывать popover', () => {
        popoverInstance.showPopover();
        popoverInstance.hidePopover();
        const popover = document.querySelector('.popover');
        expect(popover.classList.contains('hidden')).toBe(true);
    });

    test('popover должен правильно позиционироваться относительно кнопки', () => {
        button.getBoundingClientRect = jest.fn(() => ({
            top: 100,
            left: 100,
            width: 50,
            height: 20,
        }));

        popoverInstance.showPopover();

        const popover = document.querySelector('.popover');
        const top = parseFloat(popover.style.top);
        const left = parseFloat(popover.style.left);

        expect(top).toBeLessThan(100); // popover должен быть выше кнопки
        expect(left).toBeGreaterThan(50); // центрируем popover по кнопке
    });
});
