function onClickFunderEntity() {
    e.preventDefault();

    var funderEntity = new FormData(document.querySelector('#entity'));

    var serverFunderEntity = {};
    for (var [key, value] of funderEntity.entries())
    {
        serverFunderEntity[key] = value;
    }

    var entity = formDetails.get('entity');
    var fund = formDetails.get('fund');
    var organizationName = formDetails.get('organization-name');
    var primaryWorking = formDetails.get('primary-working');
    // Сколько полей заполено неправильно
    var mistakes = 0;

    if (entity=='fiz') {
       var entityFiz=document.getElementById('fund');
        entityFiz.classList.add('true-fund select');
    }

}