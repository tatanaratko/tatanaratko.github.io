var info={
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
            "CardNumber": "1234000145293332",
            "CardName": "MIR КЛАССИЧЕСКАЯ",
            "ExpDate": "02-12-2019"
        }
    ]
  }
  
  function getOldExpCArds (json, date) {
      var oldCardMas=[];
      var cardInfoMas =json.CardInfo;

      for (var i=0; i<cardInfoMas.length;i++) {
          var expDateValue=cardInfoMas[i].ExpDate;
          var expDateSplited=expDateValue.split('-');
          var day=expDateSplited[0];
          var month=expDateSplited[1];
          var year=expDateSplited[2];
          var expDateTyped=new Date( year+'-'+month+'-'+day);
          if (expDateTyped<date) {
              var oldFormatedNumber= cardInfoMas[i].CardNumber.substring(cardInfoMas[i].CardNumber.length-4);
              oldCardMas.push(oldFormatedNumber);
            }   
        }
        
        if (oldCardMas.length===0) {
            return null;
            
        }
        
        return oldCardMas;
  }
  getOldExpCArds(info, new Date('2013-01-01'));