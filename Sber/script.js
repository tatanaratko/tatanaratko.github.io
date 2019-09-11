Info={
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
  
  function getCardsArrayExpDate(json, date)  {
      var result=[];
      var cardInfoMas=json.CardInfo;
      for (var i=0; i<cardInfoMas.length; i++) {
          var expDateData=cardInfoMas[i].ExpDate;
          var dateMas=expDateData.split('-');
          //Собрать даты по типу Date
          var day=dateMas[0];
          var month=dateMas[1];
          var year=dateMas[2];
          
          var dateFormatString = year+'-'+month+'-'+day; 
          var oldDate=new Date(dateFormatString);
          if (oldDate< date) {
              var oldCard=cardInfoMas[i].CardNumber.substr(-4,4);
              result.push(oldCard);
            }
        }
             if (result.length===0) {
                result=null;
              }
        return result;
  }

  getCardsArrayExpDate(Info,new Date('2025-10-02'));