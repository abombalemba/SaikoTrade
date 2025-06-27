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


@app.middleware("http")
async def add_device_type(request: Request, call_next):
    user_agent = request.headers.get("user-agent", "").lower()
    width = int(request.query_params.get("width", 0))

    print(width, user_agent)
    
    if width > 0:  # Если передана ширина экрана
        if width <= 768:
            device_type = "mobile"
        elif width <= 1024:
            device_type = "tablet"
        else:
            device_type = "desktop"
    else:  # Определение по User-Agent
        user_agent_lower = user_agent.lower()
        
        # Сначала проверяем iPad (все модели)
        if "ipad" in user_agent_lower or 'macintosh' in user_agent_lower:
            device_type = "tablet"
        # Затем проверяем другие планшеты (Android)
        elif "tablet" in user_agent_lower or "tab" in user_agent_lower:
            device_type = "tablet"
        # Проверяем мобильные (но исключаем iPad)
        elif ("mobile" in user_agent_lower or "android" in user_agent_lower) and "ipad" not in user_agent_lower:
            device_type = "mobile"
        # Все остальное - десктоп
        else:
            device_type = "desktop"

    print(device_type)
    
    request.state.device_type = device_type
    response = await call_next(request)
    return response


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
    device_type = request.state.device_type

    return templates.TemplateResponse(
        'index.html',
        {
            'request': request,
            'device_type': device_type,
            'goods': db,
            'body_left_goods': body_left_goods,
            'catalog_blocks': main_catalog_blocks
        }
    )


@app.get('/card', response_class=HTMLResponse)
async def path_card(request: Request, id: int = Query(..., description='ID товара')):
    device_type = request.state.device_type
    good = get_good(db, id)

    return templates.TemplateResponse(
        'card.html',
        {
            'request': request,
            'device_type': device_type,
            'data': good,
            'body_left_goods': body_left_goods
        }
    )


@app.get('/cart', response_class=HTMLResponse)
async def path_cart(request: Request):
    device_type = request.state.device_type
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
            'device_type': device_type,
            'goods': goods,
            'body_left_goods': body_left_goods,
            'summary': summary
        }
    )


@app.get('/buying', response_class=HTMLResponse)
async def path_buying(request: Request):
    device_type = request.state.device_type
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
            'device_type': device_type,
            'goods': goods,
            'body_left_goods': body_left_goods,
            'summary': summary
        }
    )


if __name__ == '__main__':
    run('server:app', host='127.0.0.1', port=8000, reload=True)
