function buttonJoin(isHovered) {
    const button = document.getElementById('button-join');

    if (isHovered) {
        button.classList.remove('button-join-normal');
        button.classList.add('button-join-hover');
    } else {
        button.classList.remove('button-join-hover');
        button.classList.add('button-join-normal');
    }
}


function buttonToCart(isHovered) {
    const button = document.getElementById('button-to-cart');

    if (isHovered) {
        button.classList.remove('button-to-cart-normal');
        button.classList.add('button-to-cart-hover');
    } else {
        button.classList.remove('button-to-cart-hover');
        button.classList.add('button-to-cart-normal');
    }
}


function mainLeftListGood(_id, isHovered) {
    const good = document.getElementById(_id);
    const text = good.getElementById('main-left-good-text');
    
    if (isHovered) {
        good.style.borderRadius = '5px';
        text.style.color = 'var(--color-RED-ACTIVE)';
    } else {
    }
}


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


function headerCenterBasket(isHovered) {
    const icon = document.getElementById('header-center-basket');
    const text1 = document.getElementById('header-center-text1');
    const text2 = document.getElementById('header-center-text2');

    if (isHovered) {
        icon.src = 'images/icons/basket-hover.png';
        text1.style.color = 'var(--color-RED)';
        text2.style.color = 'var(--color-RED)';
    } else {
        icon.src = 'images/icons/basket-normal.png';
        text1.style.color = 'var(--color-GRAY)';
        text2.style.color = 'var(--color-GRAY)';
    }
}


function headerDownButton(_id, isHovered) {
    const button = document.getElementById(_id);

    if (isHovered) {
        button.style.backgroundColor = 'var(--color-YELLOW)';
    } else {
        if (_id === 'header-down-button1') {
            button.style.backgroundColor = 'var(--color-RED)';
        } else {
        button.style.backgroundColor = 'var(--color-BLACK)';
        }
    }
}