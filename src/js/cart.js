function initQuantityControls() {
    const cards = document.querySelectorAll('.card-v3');
    cards.forEach(card => {
        const buttonMinus = card.querySelector('.card-v3-actions-up-left');
        const buttonPlus = card.querySelector('.card-v3-actions-up-right');
        const input = card.querySelector('.card-v3-actions-up-input');

        if (!buttonMinus || !buttonPlus || !input) return;

        function updateValue(change) {
            let value = parseInt(input.value) || 0;
            value += change;
            if (value < 1) value = 1;
            if (value > 999) value = 999;
            input.value = value;
        }

        buttonMinus.addEventListener('click', (e) => {
            e.preventDefault();
            updateValue(-1);
        });

        buttonPlus.addEventListener('click', (e) => {
            e.preventDefault();
            updateValue(1);
        });

        input.addEventListener('input', () => {
            let value = parseInt(input.value) || 1;
            if (isNaN(value) || value < 1) value = 1;
            if (value > 999) value = 999;
            input.value = value;
        });

        input.addEventListener('change', () => {
            if (!input.value) input.value = 1;
        });
    });
}

function initAll() {
    initQuantityControls();
}

if (document.readyState === 'complete') {
    initAll();
} else {
    document.addEventListener('DOMContentLoaded', initAll);

    if (document.readyState === 'interactive') {
        initAll();
    }
}