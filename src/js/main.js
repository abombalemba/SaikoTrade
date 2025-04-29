const button = document.getElementById('button-join');

button.addEventListener('mouseenter', () => {
		button.classList.remove('button-join-normal')
		button.classList.add('button-join-hover');
});

button.addEventListener('mouseleave', () => {
		button.classList.remove('button-join-hover')
		button.classList.add('button-join-normal');
});
