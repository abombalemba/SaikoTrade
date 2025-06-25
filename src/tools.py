import json


def load_db(filepath: str) -> dict:
    with open(filepath, mode='r', encoding='utf-8') as file:
        return json.load(file)


def get_good(DB: list[dict], ID: int) -> dict:
    if not DB:
        raise Exception('DB is empty')

    for good in DB:
        print(good)
        if good['id'] == ID:
            return good
    
    raise Exception('The good is not found')
