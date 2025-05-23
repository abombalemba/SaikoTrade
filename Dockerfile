# syntax=docker/dockerfile:latest
# escape=`
# check=error=true

FROM python:3.12-slim

LABEL maintainer="github.com/abombalemba"

WORKDIR /src

COPY requirements.txt requirements.txt
RUN python -m venv venv && `
    venv/bin/pip install -r requirements.txt

COPY . .

EXPOSE 5050

CMD ["venv/bin/python", "src/server.py"]
