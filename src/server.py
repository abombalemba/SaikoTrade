from fastapi import FastAPI, Request, Query
from fastapi.responses import FileResponse
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from uvicorn import run

import random
import os

from tools import *


app = FastAPI()

db = load_db('data/goods.json')
body_left_goods = load_db('data/body-left-goods.json')
main_catalog_blocks = load_db('data/main-catalog.json')

templates = Jinja2Templates('templates')

app.mount('/js', StaticFiles(directory='js'), name='js')
app.mount('/css', StaticFiles(directory='css'), name='css')
app.mount('/data', StaticFiles(directory='data'), name='data')
app.mount('/fonts', StaticFiles(directory='fonts'), name='fonts')
app.mount('/images', StaticFiles(directory='images'), name='images')


@app.get('/favicon.ico', include_in_schema=False)
@app.get('/images/logo/favicon.ico', include_in_schema=False)
async def path_favicon():
    return FileResponse(
        'images/logo/favicon.ico',
        media_type='image/x-icon',
        headers={'Cache-Control': 'public, max-age=86400'}
    )


@app.get('/', response_class=HTMLResponse)
async def path_index(request: Request):
    return templates.TemplateResponse(
        'index.html',
        {
            'request': request,
            'goods': db,
            'body_left_goods': body_left_goods,
            'catalog_blocks': main_catalog_blocks
        }
    )


@app.get('/card', response_class=HTMLResponse)
async def path_card(request: Request, id: int = Query(..., description='ID товара')):
    good = get_good(db, id)

    return templates.TemplateResponse(
        'card.html',
        {
            'request': request,
            'data': good,
            'body_left_goods': body_left_goods
        }
    )


@app.get('/cart', response_class=HTMLResponse)
async def path_cart(request: Request):
    goods = list()

    summary = {
        'old_price': 0,
        'new_price': 0,
        'weight': 0
    }

    for i in range(1, len(db)):
        good = random.choice(db)

        summary['old_price'] += good['price']
        summary['new_price'] += good['price'] - (good['price'] * round(good['discount'] / 100, 2))
        summary['weight'] += good['weight']

        goods.append(good)

    summary['old_price'] = round(summary['old_price'], 2)
    summary['new_price'] = round(summary['new_price'], 2)
    summary['weight'] = round(summary['weight'], 2)
    summary['length'] = len(goods)
    summary['discount'] = round(summary['old_price'] - summary['new_price'], 2)

    return templates.TemplateResponse(
        'cart.html',
        {
            'request': request,
            'goods': goods,
            'body_left_goods': body_left_goods,
            'summary': summary
        }
    )


@app.get('/buying', response_class=HTMLResponse)
async def path_buying(request: Request):
    goods = list()

    summary = {
        'old_price': 0,
        'new_price': 0,
        'weight': 0
    }

    for i in range(1, len(db)):
        good = random.choice(db)

        summary['old_price'] += good['price']
        summary['new_price'] += good['price'] - (good['price'] * round(good['discount'] / 100, 2))
        summary['weight'] += good['weight']

        goods.append(good)

    summary['old_price'] = round(summary['old_price'], 2)
    summary['new_price'] = round(summary['new_price'], 2)
    summary['weight'] = round(summary['weight'], 2)

    return templates.TemplateResponse(
        'buying.html',
        {
            'request': request,
            'goods': goods,
            'body_left_goods': body_left_goods,
            'summary': summary
        }
    )


if __name__ == '__main__':
    run('server:app', host='127.0.0.1', port=8000, reload=True)
