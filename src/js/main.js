function setupCarousel(containerId, prevButtonId, nextButtonId) {
    const container = document.getElementById(containerId);
    const items = container.querySelectorAll('.card-v1');
    const itemWidth = 170;
    const visibleItems = 6;
    let position = 0;
    const maxPosition = -(items.length - visibleItems) * itemWidth;

    document.getElementById(prevButtonId).addEventListener('click', () => {
        position = Math.min(position + itemWidth * 2, 0);
        container.style.transform = `translateX(${position}px)`;
    });

    document.getElementById(nextButtonId).addEventListener('click', () => {
        position = Math.max(position - itemWidth * 2, maxPosition);
        container.style.transform = `translateX(${position}px)`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupCarousel('main-set-discounts-down', 'main-set-discounts-up-right-left', 'main-set-discounts-up-right-right');
    setupCarousel('main-set-popular-down', 'main-set-popular-up-right-left', 'main-set-popular-up-right-right');
    setupCarousel('main-set-news-down', 'main-set-news-up-right-left', 'main-set-news-up-right-right');
});