var xhr = new XMLHttpRequest();

xhr.onload=function() {         //Сервер готов к взаимодействию
    if (xhr.status===200) {     //Если он ответил статус:200
        var responseOblect = JSON.parse(xhr.responseText);   // xhr.responseText - свойство, дающее доступ к данным, пришедшим с сервера в формате JSON, который мы парсим, чтобы получить объект JS
        
        var newContent='';                                   //Тут будет лежать контент, взятый из JSON
        
        //Добавляем новый контент на страницу
        for (var i=0; i<responseOblect.events.length; i++)  { //responseOblect.events.length - берем объект JSON, далее берем объекты внутри него и над каждым из них выполняем тело функции
            newContent+='<div class="event">';
            newContent+='<img src="'+responseOblect.events[i].map+'"';
            newContent+='aly="'+responseOblect.events[i].location+'"/>';
            newContent+='<p><b>'+responseOblect.events[i].location+'</b><br>'; //Преобразуем данные JSON в html
            newContent+=responseOblect.events[i].date+'<p>';
            newContent+='</div>';
        }

        //Обновляем страницу
        document.getElementById('content').innerHTML=newContent;
    }
};

        //Отправляем запрос на сервер 
        xhr.open('GET', 'data/data.json', true);
        xhr.send(null);