from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from uvicorn import run

import json
import os


app = FastAPI()
db = {}

templates = Jinja2Templates('templates')

app.mount('/js', StaticFiles(directory='js'), name='js')
app.mount('/css', StaticFiles(directory='css'), name='css')
app.mount('/data', StaticFiles(directory='data'), name='data')
app.mount('/fonts', StaticFiles(directory='fonts'), name='fonts')
app.mount('/images', StaticFiles(directory='images'), name='images')
app.mount('/components', StaticFiles(directory='components'), name='components')


@app.get('/favicon.ico', include_in_schema=False)
async def path_favicon():
    print(124)
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
            'request': request
        }
    )


@app.get('/card', response_class=HTMLResponse)
async def path_card(request: Request):
    return templates.TemplateResponse(
        'card.html',
        {
            'request': request
        }
    )


@app.get('/cart', response_class=HTMLResponse)
async def path_cart(request: Request):
    return templates.TemplateResponse(
        'cart.html',
        {
            'request': request
        }
    )


@app.get('/buying', response_class=HTMLResponse)
async def path_buying(request: Request):
    return templates.TemplateResponse(
        'buying.html',
        {
            'request': request
        }
    )


def load_db(filepath: str) -> dict:
    with open(filepath, mode='r', encoding='utf-8') as file:
        return json.load(file)


if __name__ == '__main__':
    db = load_db('data/goods.json')

    run('server:app', host='127.0.0.1', port=8000, reload=True)
