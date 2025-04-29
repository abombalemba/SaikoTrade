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
