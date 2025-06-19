export async function loadJSON(filepath) {
	try {
		const response = await fetch(filepath);
		
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		
		return await response.json();
	} catch (error) {
		console.error(error);
		throw error;
	}
}


export async function loadHTML(filepath) {
	try {
		const response = await fetch(filepath);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const parser = new DOMParser();
		const data = await response.text();
    
		return parser.parseFromString(data, 'text/html');
	} catch (error) {
		throw error;
	}
}


export function fillerBodyGoods(template, data) {
	const container = document.getElementById('body-left-hits-list');

	data.forEach(element => {
		const item = template.getElementById('body-left-good').cloneNode(true);

		item.id = Math.random().toString(36).substring(2, 9);
		item.querySelector('p').textContent = element.title;
		item.querySelector('img').src = element.icon;
		item.querySelector('a').href = element.url;

		container.appendChild(item);
	});
}


export function fillerMainCatalog(template, data) {
	const container = document.getElementById('main-catalog');

	data.forEach(element => {
		const item = template.getElementById('main-catalog-block').cloneNode(true);

		item.id = Math.random().toString(36).substring(2, 9);
		item.querySelector('p').textContent = element.title;
		item.querySelector('img').src = element.icon;
		item.querySelector('a').href = element.url;

		container.appendChild(item);
	});
}


export function fillerMainCards(elementID, template, data) {
	const container = document.getElementById(elementID);

	data.forEach(element => {
		const item = template.getElementById('card-v1').cloneNode(true);

		item.id = Math.random().toString(36).substring(2, 9);
		item.setAttribute('data-id', element.id);
		item.querySelector('#card-v1-image').src = element.icons[0];
		item.querySelector('#card-v1-title').textContent = element.title;
		item.querySelector('#card-v1-price').textContent = element.price - (element.price * (element.discount / 100)) + ' руб.';
		item.querySelector('#card-v1-image-a').href = element.url;
		item.querySelector('#card-v1-title-a').href = element.url;
		
		container.appendChild(item);
	});
}