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

export function fillerCartCards(elementID, template, data) {
    const container = document.getElementById(elementID);

    for (let index = 0; index < 3; index++) {
        const element = data[index];
        const item = template.getElementById('card-v3').cloneNode(true);
        
        item.setAttribute('data-id', element.id);
        item.querySelector('#card-v3-image').src = element.icons[0];
        item.querySelector('#card-v3-info-title').textContent = element.title;
        item.querySelector('#card-v3-info-desc-weight').textContent = element.weight;
        item.querySelector('#card-v3-info-desc-maker').textContent = element.maker;
        item.querySelector('#card-v3-price-price').textContent = element.price;

        container.appendChild(item);

        if (index < data.length - 1) {
            const divider = document.createElement('span');
            divider.className = 'cart-goods-list-horizontal-divider';
            container.appendChild(divider);
        }
    }
}


export function fillerBuyingCards(elementID, template, data) {
	const container = document.getElementById(elementID);

	for (let index = 0; index < 3; index++) {
		const element = data[index];
		const item = template.getElementById('card-v4').cloneNode(true);

		item.setAttribute('data-id', element.id);
		item.querySelector('#card-v4-image').src = element.icons[0];
		item.querySelector('#card-v4-url').href = element.url;
		item.querySelector('#card-v4-title').textContent = element.title;
		item.querySelector('#card-v4-prices-new').textContent = element.price + ' руб.';
		item.querySelector('#card-v4-prices-old').textContent = element.price - (element.price * (element.discount / 100)) + ' руб.';

		container.appendChild(item);
		
		const divider = document.createElement('span');
		divider.className = 'buying-goods-list-horizontal-divider';
		container.appendChild(divider);
	}
}