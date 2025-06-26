let currentPos = 0;
const container = document.querySelector('.main-set-container');
const cards = document.querySelectorAll('#card-v1');

function moveCarousel(direction) {
    const containerWidth = document.querySelector('#main-set-discounts').offsetWidth;
    const maxScroll = container.scrollWidth - containerWidth;
    
    currentPos += direction * containerWidth * 0.2;
    currentPos = Math.max(0, Math.min(currentPos, maxScroll));
    
    container.style.transform = `translateX(-${currentPos}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('main-set-discounts-up-right-left').addEventListener('click', () => {
        moveCarousel(-1);
    });
    
    document.getElementById('main-set-discounts-up-right-right').addEventListener('click', () => {
        moveCarousel(1);
    });
});