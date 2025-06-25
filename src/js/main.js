import * as loader from './loader.js';
import * as fetcher from './fetcher.js';

async function main() {
    try {
        await Promise.all(
            [
                //loader.loadHTML('header', 'components/organisms/header.html'),
                //loader.loadHTML('footer', 'components/organisms/footer.html'),

                //loader.loadHTML('body-left', 'components/molecules/body-left.html'),
                //loader.loadHTML('main-right-ad', 'components/molecules/body-ad.html'),

                //loader.loadHTML('main', 'components/organisms/main.html'),
                //loader.loadHTML('card', 'components/organisms/card.html'),
                //loader.loadHTML('cart', 'components/organisms/cart.html'),
                //loader.loadHTML('buying', 'components/organisms/buying.html')
            ]
        );
    } catch (error) {
        console.error(error);
    };

    try {
        const data = await fetcher.loadJSON('data/body-left-goods.json');
        const template = await fetcher.loadHTML('components/atoms/body-left-good.html');

        fetcher.fillerBodyGoods(template, data);
    } catch (error) {
        console.error(error);
    };

    try {
        const data = await fetcher.loadJSON('data/main-catalog.json');
        const template = await fetcher.loadHTML('components/atoms/main-catalog-block.html');

        fetcher.fillerMainCatalog(template, data);
    } catch (error) {
        console.error(error);
    };

    try {
        const data = await fetcher.loadJSON('data/goods.json');
        const template = await fetcher.loadHTML('components/atoms/card-v1.html');

        fetcher.fillerMainCards('main-set-discounts-down', template, data);
        fetcher.fillerMainCards('main-set-popular-down', template, data);
        fetcher.fillerMainCards('main-set-news-down', template, data);
    } catch (error) {
        console.error(error);
    };

    try {
        const data = await fetcher.loadJSON('data/goods.json');
        const template = await fetcher.loadHTML('components/atoms/card-v3.html');
        
        fetcher.fillerCartCards('cart-goods-list', template, data);
    } catch (error) {
        console.error(error);
    };

    try {
        const data = await fetcher.loadJSON('data/goods.json');
        const template = await fetcher.loadHTML('components/atoms/card-v4.html');

        fetcher.fillerBuyingCards('buying-blocks-goods-list', template, data);
    } catch (error) {
        console.error(error);
    };
};

main()
