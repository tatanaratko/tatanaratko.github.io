var COMPANY_SLIDER_DATA = [
    {
        title: "Рыбный мир",
        subTitle: "24 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 3 до 7%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/2c.svg"
    },
    {
        title: "Сказка",
        subTitle: "222 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 3 до 70%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/3c.svg"
    },
    {
        title: "Линейка",
        subTitle: "2112134 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 300 до 700%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/4c.svg"
    },
    {
        title: "ОЭК",
        subTitle: "77777 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 3 до 7%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/5c.svg"
    },
    {
        title: "АкваРИО",
        subTitle: "24513246 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 333333 до 731414%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/6c.svg"
    },
    {
        title: "Фасоль",
        subTitle: "1242 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 3 до 4%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/7c.svg"
    },
    {
        title: "ДНС",
        subTitle: "2 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 2 до 7%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/8c.svg"
    },
];

var INTERNET_SHOPS_DATA = [
    {
        title: "Интернет магазин ОЗОН",
        subTitle: "24 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 3 до 7%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/2i.svg"
    },
    {
        title: "Алиекспресс",
        subTitle: "222 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 3 до 70%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/3i.svg"
    },
    {
        title: "Беру ру",
        subTitle: "2112134 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 300 до 700%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/4i.svg"
    },
    {
        title: "ТаоБао",
        subTitle: "77777 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 3 до 7%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/5i.svg"
    },
    {
        title: "Яндекс маркет",
        subTitle: "24513246 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 333333 до 731414%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/6i.svg"
    },
    {
        title: "читай город",
        subTitle: "1242 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 3 до 4%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/7i.svg"
    },
    {
        title: "авито",
        subTitle: "2 филиала по городу",
        text: "По единой карте Город Легенд действует накопительная скидка от 2 до 7%. Больше покупок - больше экономия!!!",
        imageUri: "img/company_slider/8i.svg"
    },
];

var _init = function(){
    var greenSlider = window.slider.init(".left-arrow",".right-arrow",".company-info-center", ".company-info-img", COMPANY_SLIDER_DATA);

    var inetShopsBtn = document.querySelector(".inter-shop");
    var companiesBtn = document.querySelector(".company-btn");

    var companySliderEl = document.querySelector(".company-slider");

    inetShopsBtn.addEventListener('click', function(){
        greenSlider.remove();
        companySliderEl.classList.replace("company-slider-companies", "company-slider-inetshops");
        companiesBtn.classList.remove("slider-btn-visited");
        inetShopsBtn.classList.add("slider-btn-visited");
        greenSlider = window.slider.init(".left-arrow",".right-arrow",".company-info-center", ".company-info-img", INTERNET_SHOPS_DATA);
    });

    companiesBtn.addEventListener('click', function(){
        greenSlider.remove();
        companySliderEl.classList.replace("company-slider-inetshops", "company-slider-companies");
        companiesBtn.classList.add("slider-btn-visited");
        inetShopsBtn.classList.remove("slider-btn-visited");
        greenSlider = window.slider.init(".left-arrow",".right-arrow",".company-info-center", ".company-info-img", COMPANY_SLIDER_DATA);
    });

    
};


document.addEventListener("DOMContentLoaded", _init);


