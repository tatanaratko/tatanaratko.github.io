document.addEventListener('DOMContentLoaded', init);

function init() {
    //'submit' - стандартное событие. Оно говорит о том, что формв отправлена.
    // onSubmit - слушатель, который навешивается на событие.
    // getElementById('contact-form') и getElementById('details-form') -
    // источники событий, у разных источников могут быть разные слушатели
    // одного и того же события
    if(document.getElementById('contact-form'))
    {
        console.log("contact form listener")
        document.getElementById('contact-form').addEventListener('submit', onSubmitContactForm);
    }

    if(document.getElementById('details-form'))
    {
        console.log("details form listener")
        document.getElementById('details-form').addEventListener('submit', onSubmitDetailsForm);
    }
}

function onSubmitContactForm(e) {
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

function onSubmitDetailsForm(e) {
    e.preventDefault();

    var formDetails = new FormData(document.querySelector('#details-form'));

    var serverDetails= {};
    for (var[key, value] of formDetails.entries()) {
        serverDetails[key]=value;
    }

    var citixenship=formDetails.get('citixenship');
    var status=formDetails.get('status');
    var industry=formDetails.get('industry');
    //agree

    // Сколько полей заполено неправильно
    var mistakes = 0;

    if (citixenship=='default-form-area') {
        mistakes++;
        var selectColor=document.getElementById('citixenship');
        selectColor.classList.remove('suc');
        selectColor.classList.add('err');
    }

    else {
        var selectColor=document.getElementById('citixenship');
        selectColor.classList.remove('err');
        selectColor.classList.add('suc');
    }

    if (status=='default-form-area') {
        mistakes++;
        var selectColor=document.getElementById('status');
        selectColor.classList.remove('suc');
        selectColor.classList.add('err');

    }

    else {
        var selectColor=document.getElementById('status');
        selectColor.classList.remove('err');
        selectColor.classList.add('suc');
    }

    if (industry='') {
        mistakes++;
        var selectColor=document.getElementById('industry');
        selectColor.classList.remove('suc');
        selectColor.classList.add('err');

    }

    else {
        var selectColor=document.getElementById('industry');
        selectColor.classList.remove('err');
        selectColor.classList.add('suc');
    }
    // Если нигде не ошиблись - подсвечиваем всё зелёным
    if(mistakes == 0)
    {
        allGreen();
    }

}

function allGreen(){
    var allDetails=document.querySelectorAll('#details-form .form-group');
    for(var details of allDetails) {
        details.classList.remove('err');
        details.classList.add('suc');
    }
}

