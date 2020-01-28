import json
import datetime


def catch_data():
    with open('operations.json', 'r', encoding='utf-8') as f:
        json_data = json.load(f)
        return json_data


def sort_dates(data):
    new_data = []
    for user_data in data:
        if user_data == {}:
            print('no data here')
        else:
            new_data.append(user_data)
    sort = sorted(new_data, key=lambda user_data: user_data['date'])
    return sort


def five_dates(sorted_data):
    result_datas = sorted_data[-5:]
    result_datas.reverse()
    dates_to_print = []
    for d in result_datas:
        if d['date'] in result_datas and d['description'] in result_datas and d['from'] in result_datas and ['to'] in result_datas:
            return_date = d['date']
            return_des = d['description']
            return_to = d['to']
            return_from = d['from']
            print(f'{return_date} {return_des}\n'
                  f'{return_from} -> {return_to}\n'
                  'сумма первода и валюта\n')
    return

cd = catch_data()
sd = sort_dates(cd)
fd = five_dates(sd)