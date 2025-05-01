from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


app.get('/')
async def index() -> str:
	return '1'
	return FileResponse('index.html')


if __name__ == '__main__':
	uvicorn.run(app, host='0.0.0.0', port=5050)
