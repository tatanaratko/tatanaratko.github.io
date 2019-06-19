document.addEventListener('DOMContentLoaded', init);

var FORMS = document.getElementsByClassName("contact-form-section")
var LABELS = document.querySelectorAll("#progressbar > li")

var serverBody = {}


document.getElementById('menu-down_projects').addEventListener("mouseover", (e) => document.getElementById("menu-dropdown_projects").hidden = false)
document.getElementById('menu-down_projects').addEventListener("mouseout", (e) => document.getElementById("menu-dropdown_projects").hidden = true)
document.getElementById('menu-down_funders').addEventListener("mouseover", (e) => document.getElementById("menu-dropdown_funders").hidden = false)
document.getElementById('menu-down_funders').addEventListener("mouseout", (e) => document.getElementById("menu-dropdown_funders").hidden = true)
document.getElementById('menu-down_experts').addEventListener("mouseover", (e) => document.getElementById("menu-dropdown_experts").hidden = false)
document.getElementById('menu-down_experts').addEventListener("mouseout", (e) => document.getElementById("menu-dropdown_experts").hidden = true)


function addListenerIfExist(elementToListenId, eventType, listener)
{
    var element = document.getElementById(elementToListenId);
    if (element)
    {
        console.log('listener is here')
        element.addEventListener(eventType, listener);
    }
}

function init()
{
    addListenerIfExist('contact-form', 'submit', onSubmitContactForm);
    addListenerIfExist('details-form', 'submit', onSubmitDetailsForm);
    addListenerIfExist('fund-analitic-btn', 'click', onClickFunds);
    //Нужно редактировать onSubmitCourses, курсы должны появляться в зависимости от сферы проекта.
    // addListenerIfExist('course-analitic-btn', 'submit', onSubmitCourses);
    addListenerIfExist('entity', 'click', onClickFunderEntity);
    addListenerIfExist('register-ready-btn', 'click', onClickRegisterReady);
}


function toggleForm(formId)
{
    var labelId = formId

    if (formId === "expert_form" || formId === "funder_form" || formId === "project_form")
    {
        labelId = "project_funder_expert_form";
    }

    for (var f of FORMS)
    {
        f.hidden = f.getAttribute("id") != formId
    }

    for (var l of LABELS)
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
};

function setOneOfClasses(elementId, removeClass, addClass)
{
    var element = document.getElementById(elementId);
    element.classList.remove(removeClass);
    element.classList.add(addClass);
}



function validate(isValid, elementId, classOne, classTwo)
{
    isValid ? setOneOfClasses(elementId, classOne, classTwo) : setOneOfClasses(elementId, classTwo, classOne);
    return +!isValid
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
    var industry = formDetails.get('social-link');
    var agree = formDetails.get('agree');
    var mainSphere = formDetails.get('main-sphere');
    var socialLink = formDetails.get('social-link');

    // Сколько полей заполено неправильно
    var mistakes = 0;

    //classList - взять весь список классов из стилей с указанным значением
    mistakes += validate(agree == 'agree', "policy-form", "no-agreement", "yes-agreement")// validate(false,"policy-form", "no-agreement", "yes-agreement" )


    mistakes += validate(citixenship != 'default-form-area', "citixenship", "err", "suc");
    // if (citixenship == 'default-form-area')
    // {
    //     mistakes++;

    //     setOneOfClasses('citixenship','suc','err');
    // }

    // else
    // {
    //     serverBody.citizenship = citixenship;
    //     setOneOfClasses('citixenship', 'err', 'suc');
    // }

    if (mainSphere == 'default-form-area')
    {
        mistakes++;
        setOneOfClasses('main-sphere', 'suc', 'err');
    }

    else
    {
        setOneOfClasses('main-sphere', 'err', 'suc');
    }

    if (status == 'default-form-area')
    {
        mistakes++;
        setOneOfClasses('status', 'suc', 'err');
    }

    else
    {
        setOneOfClasses('status', 'err', 'suc');
    }

    if (industry === '')
    {
        mistakes++;
        setOneOfClasses('social-link', 'suc', 'err');
    }

    else
    {
        serverBody.industry = industry;
        setOneOfClasses('social-link', 'err', 'suc');
    }
    // Если нигде не ошиблись - подсвечиваем всё зелёным
    if (mistakes == 0 && status == 'developer')
    {
        allGreen();
        serverBody.status = 'developer'
        setTimeout(() => toggleForm("project_form"), 1000)
    }

    if (mistakes == 0 && status == 'funder')
    {
        allGreen();
        serverBody.status = 'funder'
        setTimeout(() => toggleForm("funder_form"), 1000)
    }

    if (mistakes == 0 && status == 'expert')
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
    serverBody.entity = entity
    var fund = funderEntity.get('fund');
    var organizationName = funderEntity.get('organization-name');
    var primaryWorking = funderEntity.get('primary-working');
    // Сколько полей заполено неправильно
    var mistakes = 0;

    var fund = document.getElementById('fund');
    var yurOrganization = document.getElementById('organization-name');
    var fizPrimaryWork = document.getElementById('primary-working');

    fund.hidden = entity != 'ur' // прятать всегда когда entity не равно ur
    yurOrganization.hidden = entity != 'ur'
    fizPrimaryWork.hidden = entity != "fiz"

}


function onClickCourses()
{
    var formCourse = new FormData(document.querySelector('#industry-form'));
    var course = formCourse.get('course');
    var mistakes = 0;

    if (course == 'programming')
    {
        var industryContent = document.getElementById('programming-courses');
        industryContent.classList.remove('no-programming-courses');
        industryContent.classList.add('programming-courses');
    }
}

function onClickRegisterReady()
{
    var yurOrganization = document.getElementById('organization-name');
    if (yurOrganization)
    {
        serverBody.organizationName = yurOrganization.querySelector("input").value;
    }
    localStorage.setItem(serverBody.email + ":" + serverBody.password, JSON.stringify(serverBody))
    setTimeout(() => window.location.href = "into_form.html", 1000)
}

