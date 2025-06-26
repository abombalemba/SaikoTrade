let currentPos = 0;
const container = document.querySelector('.main-set-container');
const cards = document.querySelectorAll('#card-v1');
const cardWidth = cards[0].offsetWidth + 15;

function moveCarousel(direction) {
    const containerWidth = document.querySelector('#main-set-discounts').offsetWidth;
    const maxScroll = container.scrollWidth - containerWidth;
    
    currentPos += direction * containerWidth * 0.4;
    
    currentPos = Math.max(0, Math.min(currentPos, maxScroll));
    
    container.style.transform = `translateX(-${currentPos}px)`;
    updateButtons();
}

function updateButtons() {
    const containerWidth = document.querySelector('#main-set-discounts').offsetWidth;
    const maxScroll = container.scrollWidth - containerWidth;
    const leftBtn = document.getElementById('main-set-discounts-up-right-left');
    const rightBtn = document.getElementById('main-set-discounts-up-right-right');
    
    leftBtn.style.opacity = currentPos <= 0 ? '0.5' : '1';
    rightBtn.style.opacity = currentPos >= maxScroll ? '0.5' : '1';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('main-set-discounts-up-right-left').addEventListener('click', () => moveCarousel(-1));
    document.getElementById('main-set-discounts-up-right-right').addEventListener('click', () => moveCarousel(1));
    
    updateButtons();
});

function mainContainerButtons(id, isHover, direction) {
    const btn = document.getElementById(id);
    if ((direction === 'left' && currentPos <= 0) || 
        (direction === 'right' && currentPos >= container.scrollWidth - container.offsetWidth)) {
        return;
    }
    btn.src = btn.src.replace(isHover ? 'normal' : 'hover', isHover ? 'hover' : 'normal');
}