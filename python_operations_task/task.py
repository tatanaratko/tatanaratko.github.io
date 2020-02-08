import json
import datetime

CARD_NUMBER_LEN = 16
ACCOUNT_NUMBER_LEN = 20

def catch_data():
    with open('operations.json', 'r', encoding='utf-8') as f:
        json_data = json.load(f)
        return json_data

def filter_dates(data):
    new_data = []
    for user_data in data:
        if user_data == {}:
            pass
        elif user_data['state'] != "EXECUTED":
            pass
        else:
            new_data.append(user_data)
    return new_data

def sort_dates(data):
    sort = sorted(data, key=lambda user_data: user_data['date'])   
    return sort

def get_results(sorted_data):
    five_datas_result = get_five_datas(sorted_data)

    for d in five_datas_result:
        from_account = '****'

        if 'from' in d:
            from_account = d['from']
        
        to = d['to']
        to_acc = extract_acc_type(to)
        to_number = extract_number(to)
        to_masked = get_masked_number(to_number)
        
        from_acc = extract_acc_type(from_account)
        from_number = extract_number(from_account)
        from_masked = get_masked_number(from_number)
            
        print_result(d, to_acc, to_masked, from_acc, from_masked)
        

def get_five_datas (data):
    result_datas = data[-5:]
    result_datas.reverse()
    return result_datas

def format_date(date_str):
    date_format=datetime.datetime.strptime(date_str, '%Y-%m-%dT%H:%M:%S.%f')
    result=date_format.strftime('%d.%m.%Y')
    return result
    

def extract_number(string):
    splited = string.split()
    number = splited[-1]
    if number.isdigit():
        return number
    return 'not a number'

def get_masked_number(number):
    masked = ''
    if len(number) == CARD_NUMBER_LEN:
        masked = mask_card_number(number)
    elif len(number) == ACCOUNT_NUMBER_LEN:
        masked = mask_acc_number(number)

    return masked

def extract_acc_type(string):
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

def print_result(data_to_print, to_acc, to_masked, from_acc, from_masked):
    des = data_to_print['description']
    amount = data_to_print['operationAmount']['amount']
    currency = data_to_print['operationAmount']['currency']['name']
    date_str = format_date(data_to_print['date'])
    print('{date} {des}\n{from_type} {from_acc} -> {to_account} {to}\n{amount} {currency}\n'.format(
        date=date_str,
        des=des,
        to_account=to_acc,
        to=to_masked,
        from_type=from_acc,
        from_acc=from_masked,
        amount=amount,
        currency=currency
    ))

data_from_json = catch_data()
filtered_data = filter_dates(data_from_json)
sorted_data = sort_dates(filtered_data)
result = get_results(sorted_data)