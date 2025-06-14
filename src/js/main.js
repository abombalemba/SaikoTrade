import * as loader from './loader.js';
import * as fetcher from './fetcher.js';

async function main() {
    await Promise.all(
        [
            loader.loadHTML('header', 'components/organisms/header.html'),
            loader.loadHTML('body-left', 'components/molecules/body-left.html'),
            //loader.loadHTML('main', 'components/organisms/main'),
            loader.loadHTML('card', 'components/organisms/card.html'),
            //loader.loadHTML('cart', 'components/molecules/cart.html'),
            //loader.loadHTML('buying', 'components/molecules/buying.html'),
            loader.loadHTML('footer', 'components/organisms/footer.html')
        ]
    );

    try {
        const data = await fetcher.loadJSON('data/main-left-list-goods.json');
        const template = await fetcher.loadHTML('components/atoms/main-left-good.html');

        fetcher.filler1(template, data);
    } catch (error) {
        console.log(error);
    }

    try {
        const data = await fetcher.loadJSON('data/main-right-catalog.json');
        const template = await fetcher.loadHTML('components/atoms/main-right-catalog-block.html');

        console.log(data);
        console.log(template);

        fetcher.filler2(template, data);
    } catch (error) {
        console.log(error);
    }
};

main()