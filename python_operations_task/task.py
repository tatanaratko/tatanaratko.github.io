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
            pass
        else:
            new_data.append(user_data)
    sort = sorted(new_data, key=lambda user_data: user_data['date'])
    return sort


def five_dates(sorted_data):
    result_datas = sorted_data[-5:]
    result_datas.reverse()
    dates_to_print = []
    for d in result_datas:
        from_account = 'anon'
        if 'from' in d:
            from_account = d['from']
        date = d['date']
        date_format=datetime.datetime.strptime(date, '%Y-%m-%dT%H:%M:%S.%f')
        date_str=date_format.strftime('%d.%m.%Y')
        to = d['to']
        to_number = extract_number(to)
        to_acc = extract_acc_to(to)
        from_acc = extract_acc_from(from_account)
        to_masked = 'incorrect number (to)'
        if len(to_number) ==16:
            to_masked = mask_card_number(to_number)
        elif len(to_number) == 20:
            to_masked = mask_acc_number(to_number)
        des = d['description']



        amount = d['operationAmount']['amount']
        currency = d['operationAmount']['currency']['name']
        print('{date} {des}\n{from_type} {from_acc} -> {to_account} {to}\n{amount} {currency}\n'.format(
            date=date_str,
            des=des,
            to_account=to_acc,
            to=to_masked,
            from_type=from_acc,
            from_acc=from_account,
            amount=amount,
            currency=currency
        ))
    return

def extract_number(string):
    splited = string.split()
    number = splited[-1]
    if number.isdigit():
        return number
    return 'not a number'

def extract_acc_to(string):
    splited = string.split()
    acc_name = []
    for my_str in splited:
        if not my_str.isdigit():
           acc_name.append(my_str)
           acc_format = ' '.join(acc_name)
    return acc_format


def extract_acc_from(string):
    splited = string.split()
    acc_name = []
    for my_str in splited:
        if not my_str.isdigit():
            acc_name.append(my_str)
            acc_format = ' '.join(acc_name)
    return acc_format

def mask_acc_number(acc_number):
    masked = '**' + acc_number[-4:]    
    return masked

def mask_card_number(card_number):
    masked = card_number[:4]+ ' '+card_number[5:7]+ '** **** ' + card_number[-4:]
    return masked

cd = catch_data()
sd = sort_dates(cd)
fd = five_dates(sd)