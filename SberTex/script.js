var Info = {
    "ProfileId": "12w562qrx",
    "PersonInfo": {
        "Name": "Василий Иванов",
        "BirthDate": "12-09-1990",
        "Citizenship": "Russian Federation"
    },
    "CardInfo": [
        {
            "CardNumber": "1234890456793333",
            "CardName": "VISA CLASSIC",
            "ExpDate": "30-02-2019"
        },
        {
            "CardNumber": "1234000145292133",
            "CardName": "MASTERCARD GOLD",
            "ExpDate": "21-05-2020"
        },
        {
            "CardNumber": "1234000145293333",
            "CardName": "MIR КЛАССИЧЕСКАЯ",
            "ExpDate": "02-12-2019"
        }
    ]
}


//Создать массив "resultOldCards" для карт с истекшим сроком
//Получить доступ к ключу "CardInfo"
//Зайти внутрь этого массива
//Получить доступ к первому, второму...двадцатому объекту массива
//В первом объекте получить значение ключа "ExpDate"
// ExpDate.split("-")
// day=[0], month=[1], year=[2]
// new Date(year+"-"+month+"-"+day)
//Если это значение < , чем значение поля Date, то:  
//В первом объекте получить значение ключа "CardNumber"
//Отсчитать у значения последние 4 цифры
//Записать это число в массив "oldCards" 
//Перебрать таким образом все элементы

function getCardsArrayExpDate(json, date) {
    var resultOldCardNumbers = [];
    var cardInfoMas = json["CardInfo"];

    for (var i = 0; i < cardInfoMas.length; i++) {
        var cardExpDates = cardInfoMas[i].ExpDate;
        var splited = cardExpDates.split('-');
        var day = splited[0];
        var month = splited[1];
        var year = splited[2];

        var newDate = new Date(year + '-' + month + '-' + day);
        if (newDate < date) {
            var cardNumberDate = cardInfoMas[i].CardNumber;
            var oldCardNumber=cardNumberDate.substr(-4,4);
            resultOldCardNumbers.push(oldCardNumber);   
        }    
    }

    if (resultOldCardNumbers.length===0) {
        return null;
    }

    return resultOldCardNumbers; 
}

getCardsArrayExpDate(Info,new Date('2019-03-21'));