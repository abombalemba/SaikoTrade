const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (button.classList.contains('button-join-normal')) {
            button.classList.remove('button-join-normal');
            button.classList.add('button-join-hover');
        } else if (button.classList.contains('button-to-cart-normal')) {
            button.classList.remove('button-to-cart-normal');
            button.classList.add('button-to-cart-hover');
        }
    });

    button.addEventListener('mouseleave', () => {
        if (button.classList.contains('button-join-hover')) {
            button.classList.remove('button-join-hover');
            button.classList.add('button-join-normal');
        } else if (button.classList.contains('button-to-cart-hover')) {
            button.classList.remove('button-to-cart-hover');
            button.classList.add('button-to-cart-normal');
        }
    });
});


function headerUpAccount(isHovered) {
    const text = document.getElementById('header-up-account-text');
    const icon = document.getElementById('header-up-account-icon');

    if (isHovered) {
        text.style.color = 'var(--color-RED-ACTIVE)';
        icon.src = 'images/icons/account-hover.png';
    } else {
        text.style.color = 'var(--color-LIGHT-BLACK)';
        icon.src = 'images/icons/account-normal.png';
    }
}

function headerUpAccountAdd(isHovered) {
    const text = document.getElementById('header-up-account-add-text');
    const icon = document.getElementById('header-up-account-add-icon');

    if (isHovered) {
        text.style.color = 'var(--color-RED-ACTIVE)';
        icon.src = 'images/icons/account-add-hover.png';
    } else {
        text.style.color = 'var(--color-LIGHT-BLACK)';
        icon.src = 'images/icons/account-add-normal.png';
    }
}


function headerCenterSearch(isHovered) {
    const block = document.getElementById('header-center-search');

    if (isHovered) {
        block.style.backgroundColor = 'var(--color-RED-ACTIVE)';
    } else {
        block.style.backgroundColor = 'var(--color-RED)';
    }
}


function headerDownButton(_id, isHovered) {
    const buttons = [
        document.getElementById(_id)
    ];

    buttons.forEach(button => {
        if (isHovered) {
            button.style.backgroundColor = 'var(--color-YELLOW)';
        } else {
            button.style.backgroundColor = 'var(--color-BLACK)';
        }
    });
}