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


function headerUpAccount(isHovered) {
    const text = document.getElementById('header-up-block-account-text');
    const icon = document.getElementById('header-up-block-account-icon');

    if (isHovered) {
        text.style.color = 'var(--color-RED-ACTIVE)';
        icon.src = 'images/icons/account-hover.svg';
    } else {
        text.style.color = 'var(--color-LIGHT-BLACK)';
        icon.src = 'images/icons/account-normal.svg';
    }
}

function headerUpAddAccount(isHovered) {
    const text = document.getElementById('header-up-block-add-account-text');
    const icon = document.getElementById('header-up-block-add-account-icon');

    if (isHovered) {
        text.style.color = 'var(--color-RED-ACTIVE)';
        icon.src = 'images/icons/account-add-hover.svg';
    } else {
        text.style.color = 'var(--color-LIGHT-BLACK)';
        icon.src = 'images/icons/account-add-normal.svg';
    }
}


function headerCenterSearch(isHovered) {
    const block = document.getElementById('header-center-search-button');

    if (isHovered) {
        block.style.backgroundColor = 'var(--color-RED-ACTIVE)';
    } else {
        block.style.backgroundColor = 'var(--color-RED)';
    }
}


function headerCenterBasket(isHovered) {
    const icon = document.getElementById('header-center-basket-icon');
    const text1 = document.getElementById('header-center-basket-text1');
    const text2 = document.getElementById('header-center-basket-text2');

    if (isHovered) {
        icon.src = 'images/icons/basket-hover.svg';
        text1.style.color = 'var(--color-RED-ACTIVE)';
        text2.style.color = 'var(--color-RED-ACTIVE)';
    } else {
        icon.src = 'images/icons/basket-normal.svg';
        text1.style.color = 'var(--color-GRAY)';
        text2.style.color = 'var(--color-GRAY)';
    }
}

function cardToFavourite(isHovered) {
    const icon = document.getElementById('card-preview-right-block-block-button-to-favourite-icon');
    const text = document.getElementById('card-preview-right-block-block-button-to-favourite-text');

    if (isHovered) {
        icon.src = 'images/symbols/heart/hover.png';
        text.style.color = 'var(--color-RED-ACTIVE)';
    } else {
        icon.src = 'images/symbols/heart/normal.png';
        text.style.color = 'var(--color-GRAY)';
    }
}

function mainAdvantagesFirst(isHovered) {
    const icon = document.getElementById('main-advantages-first-icon');
    const large = document.getElementById('main-advantages-first-large');
    const small = document.getElementById('main-advantages-first-small');

    if (isHovered) {
        icon.src = 'images/icons/support-hover.svg';
        large.style.color = 'var(--color-RED)';
        small.style.color = 'var(--color-RED)';
    } else {
        icon.src = 'images/icons/support-normal.svg';
        large.style.color = 'var(--color-RED-BLACK)';
        small.style.color = 'var(--color-RED-BLACK)';
    }
}

function mainAdvantagesSecond(isHovered) {
    const icon = document.getElementById('main-advantages-second-icon');
    const large = document.getElementById('main-advantages-second-large');
    const small = document.getElementById('main-advantages-second-small');

    if (isHovered) {
        icon.src = 'images/icons/turnover-hover.svg';
        large.style.color = 'var(--color-RED)';
        small.style.color = 'var(--color-RED)';
    } else {
        icon.src = 'images/icons/turnover-normal.svg';
        large.style.color = 'var(--color-RED-BLACK)';
        small.style.color = 'var(--color-RED-BLACK)';
    }
}

function mainAdvantagesThird(isHovered) {
    const icon = document.getElementById('main-advantages-third-icon');
    const large = document.getElementById('main-advantages-third-large');
    const small = document.getElementById('main-advantages-third-small');

    if (isHovered) {
        icon.src = 'images/icons/coins-hover.svg';
        large.style.color = 'var(--color-RED)';
        small.style.color = 'var(--color-RED)';
    } else {
        icon.src = 'images/icons/coins-normal.svg';
        large.style.color = 'var(--color-RED-BLACK)';
        small.style.color = 'var(--color-RED-BLACK)';
    }
}