//import * as parser from './parser.js';
import * as loader from './loader.js';
import * as fetcher from './fetcher.js';

async function main() {
    await Promise.all(
        [
            loader.loadHTML('header', 'components/organisms/header.html'),
            loader.loadHTML('main-left', 'components/organisms/main-left.html'),
            loader.loadHTML('footer', 'components/organisms/footer.html')
        ]
    );

    try {
        const data = await fetcher.fetchJSON('data/main-left-list-goods.json');
        const template = await fetcher.atomic('components/atoms/atoms.html');
        fetcher.filler(template, data);
    } catch (error) {
        console.log(error);
    }
};

main()