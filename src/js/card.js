function initQuantityControls() {
    const buttonMinus = document.getElementById('card-preview-right-block-block-choice-minus');
    const buttonPlus = document.getElementById('card-preview-right-block-block-choice-plus');
    const input = document.getElementById('card-preview-right-block-block-choice-input');

    if (!buttonMinus || !buttonPlus || !input) {
        setTimeout(initQuantityControls, 100);
        return;
    }

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
}

function initTabs() {
    const buttons = document.querySelectorAll('.card-info-button');
    const tabs = document.querySelectorAll('.tab-content');
    
    if(buttons.length === 0 || tabs.length === 0) {
        setTimeout(initTabs, 100);
        return;
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));
            
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId)?.classList.add('active');
        });
    });
    
    if(buttons.length > 0) {
        buttons[0].click();
    }
}

function initAll() {
    initQuantityControls();
    initTabs();
}

if (document.readyState === 'complete') {
    initAll();
} else {
    document.addEventListener('DOMContentLoaded', initAll);

    if (document.readyState === 'interactive') {
        initAll();
    }
}