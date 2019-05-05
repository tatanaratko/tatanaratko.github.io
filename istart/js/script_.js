document.addEventListener('DOMContentLoaded', init);

function init() {
	document.getElementById('contact-form').addEventListener('submit', onSubmit);
	ymaps.ready(initYMaps);
}

function onSubmit(e) {
	e.preventDefault();
	var formData = new FormData(document.querySelector('#contact-form'));

	var serverBody  = {};
	for (var[key, value] of formData.entries()) {
		serverBody[key] = value;
	}
	var pass=formData.get('form_passwd');
	var passrep=formData.get('form_passwd_repeat');
	
	if (pass===passrep) {
		var allInputs=document.querySelectorAll('#contact-form .form-group');
		for(var input of allInputs)
		{
			input.classList.remove('err');
			input.classList.add('suc');
			
		}
		// console.log(serverBody)
		// fetch('http://localhost:3050/reg', {
		// 	method: "POST",
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	  },
		// 	body: JSON.stringify(serverBody)
		// })
  		// 	.then(function(response) {
		// 		return response.json()
		// 	})
		// 	.then(function (body) {
		// 		console.log(body)
		// 	})
	}

	else {
		var passColor=document.querySelector('#password');
		var passrepColor=document.querySelector('#password_repeat');

		passColor.classList.remove('suc');
		passrepColor.classList.remove('suc');
		passColor.classList.add('err');
		passrepColor.classList.add('err');


	}
}


	
	

function initYMaps() {
    var myPlacemark,
        myMap = new ymaps.Map('map', {
            center: [54.98655697, 73.37736619],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Слушаем клик на карте.
    myMap.events.add('click', function (e) {
        var coords = e.get('coords');

        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);
            // Слушаем событие окончания перетаскивания на метке.
            myPlacemark.events.add('dragend', function () {
                getAddress(myPlacemark.geometry.getCoordinates());
            });
		}
		console.log(coords)
        getAddress(coords);
    });

    // Создание метки.
    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            iconCaption: 'поиск...'
        }, {
            preset: 'islands#violetDotIconWithCaption',
            draggable: true
        });
    }

    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);

            myPlacemark.properties
                .set({
                    // Формируем строку с данными об объекте.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                    balloonContent: firstGeoObject.getAddressLine()
                });
        });
    }
}
