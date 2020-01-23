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
            print('no data')
        else:
            new_data.append(user_data)
    sort = sorted(new_data ,key=lambda user_data: user_data['date'])
    return sort


def five_dates(sorted_data):
    result_datas = sorted_data[-5:]
    result_datas.reverse()
    for d in result_datas:
        print(d['date'])
    return result_datas

cd = catch_data()
sd = sort_dates(cd)
fd = five_dates(sd)