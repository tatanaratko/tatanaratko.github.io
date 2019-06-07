document.addEventListener('DOMContentLoaded', init);

var FORMS = document.getElementsByClassName("contact-form-section")
var LABELS = document.querySelectorAll("#progressbar > li")

var serverBody = {}

function init()
{


    //'submit' - стандартное событие. Оно говорит о том, что форма отправлена.
    // onSubmit - слушатель, который навешивается на событие.
    // getElementById('contact-form') и getElementById('details-form') -
    // источники событий, у разных источников могут быть разные слушатели
    // одного и того же события
    //Здесь мы проверяем, нашли ли айди и подключаем слушателя событий

    if (document.getElementById('contact-form'))
    {
        console.log("contact form listener")
        document.getElementById('contact-form').addEventListener('submit', onSubmitContactForm);
    }

    if (document.getElementById('details-form'))
    {
        console.log("details form listener")
        document.getElementById('details-form').addEventListener('submit', onSubmitDetailsForm);
    }

    if (document.getElementById('fund-analitic-btn'))
    {
        console.log('fund analitic listener')
        document.getElementById('fund-analitic-btn').addEventListener('click', onClickFunds);
    }

    if (document.getElementById('course-analitic-btn'))
    {
        console.log('course analitic listener')
        document.getElementById('course-analitic-btn').addEventListener('click', onClickCourses);
    }

    if (document.getElementById('entity'))
    {
        console.log('funder entity listener')
        document.getElementById('entity').addEventListener('click', onClickFunderEntity);
    }

    if(document.getElementById("register-ready-btn"))
    {
        document.getElementById("register-ready-btn").addEventListener("click", onClickRegisterReady)
    }
}

function toggleForm(formId)
{
    var labelId = formId

    if(formId === "expert_form" || formId === "funder_form" || formId === "project_form")
    {
        labelId = "project_funder_expert_form";
    }

    for(var f of FORMS)
    {
        f.hidden = f.getAttribute("id") != formId
    }

    for(var l of LABELS)
    {
        l.classList.remove("active")
    }
    document.querySelector(`[data-form=${labelId}]`).hidden = false
    document.querySelector(`[data-form=${labelId}]`).classList.add("active")
}


function onSubmitContactForm(e)
{
    e.preventDefault();
    var formData = new FormData(document.querySelector('#contact-form'));

    var pass = formData.get('form_passwd');
    var passrep = formData.get('form_passwd_repeat');
    var email = formData.get("form_email");
    var name = formData.get("form_name");
    var lastname = formData.get("form_lastname");
    var fathername = formData.get("form_fathername");

    if (pass === passrep)
    {
        var allInputs = document.querySelectorAll('#contact-form .form-group');
        for (var input of allInputs)
        {
            input.classList.remove('err');
            input.classList.add('suc');
            

            serverBody.password = pass;
            serverBody.email = email;

            serverBody.name = name;
            serverBody.lastname = lastname;
            serverBody.fathername = fathername;

            setTimeout(() => toggleForm("details_form"), 1000);

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

    else
    {
        var passColor = document.querySelector('#password');
        var passrepColor = document.querySelector('#password_repeat');

        passColor.classList.remove('suc');
        passrepColor.classList.remove('suc');
        passColor.classList.add('err');
        passrepColor.classList.add('err');


    }
}

function onSubmitDetailsForm(e)
{
    e.preventDefault();

    var formDetails = new FormData(document.querySelector('#details-form'));

    for (var [key, value] of formDetails.entries())
    {
        serverBody[key] = value;
    }

    var citixenship = formDetails.get('citixenship');
    var status = formDetails.get('status');
    var industry = formDetails.get('industry');
    var agree = formDetails.get('agree');

    // Сколько полей заполено неправильно
    var mistakes = 0;

    //classList - взять весь список классов из стилей с указанным значением
    if (agree == 'agree')
    {

        var yesAgree = document.getElementById('policy-form');
        yesAgree.classList.remove('no-agreement');
        yesAgree.classList.add('yes-agreement');

    }

    else
    {
        mistakes++;
        var notAgree = document.getElementById('policy-form');
        notAgree.classList.remove('yes-agreement');
        notAgree.classList.add('no-agreement');
    }

    if (citixenship == 'default-form-area')
    {
        mistakes++;
        var selectColor = document.getElementById('citixenship');
        selectColor.classList.remove('suc');
        selectColor.classList.add('err');
    }

    else
    {
        serverBody.citizenship = citixenship
        var selectColor = document.getElementById('citixenship');
        selectColor.classList.remove('err');
        selectColor.classList.add('suc');
    }

    if (status == 'default-form-area')
    {
        mistakes++;
        var selectColor = document.getElementById('status');
        selectColor.classList.remove('suc');
        selectColor.classList.add('err');

    }

    else
    {
        var selectColor = document.getElementById('status');
        selectColor.classList.remove('err');
        selectColor.classList.add('suc');
    }

    if (industry === '')
    {
        mistakes++;
        var selectColor = document.getElementById('industry');
        selectColor.classList.remove('suc');
        selectColor.classList.add('err');

    }

    else
    {
        serverBody.industry = industry
        var selectColor = document.getElementById('industry');
        selectColor.classList.remove('err');
        selectColor.classList.add('suc');
    }
    // Если нигде не ошиблись - подсвечиваем всё зелёным
    if (mistakes == 0 && status=='developer')
    {
        allGreen();
        serverBody.status = 'developer'
        setTimeout(() => toggleForm("project_form"), 1000)
    }

    if (mistakes == 0 && status=='funder')
    {
        allGreen();
        serverBody.status = 'funder'
        setTimeout(() => toggleForm("funder_form"), 1000)
    }

    if (mistakes == 0 && status=='expert')
    {
        allGreen();
        serverBody.status = 'expert'
        setTimeout(() => toggleForm("expert_form"), 1000)
    }

}

function allGreen()
{
    var allDetails = document.querySelectorAll('#details-form .form-group');
    for (var details of allDetails)
    {
        details.classList.remove('err');
        details.classList.add('suc');
    }

    console.log(serverBody)
}


function onClickFunds()
{
    var maxElement = document.getElementById('max-value-rangeslider');
    var maxValue = parseInt(maxElement.value);

    var formIndustry = new FormData(document.querySelector('#industry-form'));
    var industry = formIndustry.get('sphere');

    var mistakes = 0;
    
    

    if (maxValue <= 500000 && industry == 'social')
    {
        var industryContent = document.getElementById('social-industry');
        industryContent.classList.remove('no-social-content');
        industryContent.classList.add('social-content');
    }
}

function onClickFunderEntity() 
{
    var funderEntity = new FormData(document.querySelector('#funder-form'));

    var entity = funderEntity.get('entity');
    var fund = funderEntity.get('fund');
    var organizationName = funderEntity.get('organization-name');
    var primaryWorking = funderEntity.get('primary-working');
    // Сколько полей заполено неправильно
    var mistakes = 0;

    var fund=document.getElementById('fund');
    var yurOrganization=document.getElementById('organization-name');
    var fizPrimaryWork=document.getElementById('primary-working');

    fund.hidden = entity!='ur' // прятать всегда когда entity не равно ur
    yurOrganization.hidden = entity!='ur'
    fizPrimaryWork.hidden = entity != "fiz"

}


function onClickCourses()
{
    var formCourse = new FormData(document.querySelector('#industry-form'));
    var course = formCourse.get('course');
    var mistakes = 0;
    
    if (course=='programming')
    {
        var industryContent = document.getElementById('programming-courses');
        industryContent.classList.remove('no-programming-courses');
        industryContent.classList.add('programming-courses');
    }
}

function onClickRegisterReady()
{
    localStorage.setItem(serverBody.email + ":" + serverBody.password, JSON.stringify(serverBody))
    setTimeout(()=>window.location.href = "into_form.html", 1000)
}