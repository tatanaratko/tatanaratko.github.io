var LEFT_DIRECTION = -1;
var RIGHT_DIRECTION = 1;

var ANIMATION_DURATION = 3100;

var COMPANY_SLIDER_DATA = [
    {
        title: "Рыбный мир",
        subTitle: "24 киоска со свежей рыбной продукцией по городу",
        text: "Скидка от 3 до 7% по Вашей карте Город Легенд! Отличное качество продукции для Вас по выгодным ценам!",
        imageUri: "img/company_slider/1c.png"
    },

    {
        
        title: "Сказка",
        subTitle: "Комплекс загородного отдыха",
        text: "Оплатите посещение по карте Город Легенд и Вам вернуться 10-25% от суммы чека бонусами! Оплачивайте ими до 50% от суммы чека и наслаждайтесь прекрасными пейзажами, чистым воздухом и активными развлечениями! 1 бонус = 1 рубль",
        imageUri: "img/company_slider/2c.svg"
    },
    {
        title: "Аквабан",
        subTitle: "Туннельная автомойка",
        text: "Каждый раз 10% от суммы чека возвращаются бонусами нан шу карту Город Легенд! 1 бонус = 1 рубль! Готовы обслуживать Вас и Ваш автомобиль 24 часа в сутки!",
        imageUri: "img/company_slider/3c.svg"
    },
    {
        title: "АкваРИО",
        subTitle: "Крытый аквапарк",
        text: "На Вашу карту бонусами будет возвращаться 10% от суммы чека! А это значит, что уже при слеующем посещении Вы сможете использовать бонусы для оплаты! 1 бонус = 1 рубль! Посетите настоящее водное царство не выезжая из города!!",
        imageUri: "img/company_slider/4c.png"
 
    },
    {
        title: "Фасоль",
        subTitle: "4 супермаркета по городу",
        text: "Скидки по Вашей карте Город Легенд! Широкий выбор продуктов! Собственное производство! Свежайшая выпечка!",
        imageUri: "img/company_slider/5c.svg"
    },
    {
        title: "Омская Энергосбытовая Компания",
        subTitle: "38 филиалов для оплаты услуг в городе и области",
        text: "Накопительная скидка по карте Город Легенд от 1 до 9%, которой Вы можете воспользоваться, приобретая продукцию в филиалах ОЭК (счетчики, кабельная продукция, щитовое оборудование, светотехнические и установочные изделия). Гарантия качества - доступная цена!",
        imageUri: "img/company_slider/6c.svg"
    },
    {
        title: "FlexGym",
        subTitle: "7 современных фитнес-центров по городу",
        text: "По Вашей карте Город Легенд рады предоставить 10% скидку в любом филиале! Бесплатная гостевая тренировка - первыйшаг к идеальным формам!",
        imageUri: "img/company_slider/7c.svg"
    },
    {
        title: "Линейка",
        subTitle: "19 филиалов канцелярских магазинов",
        text: "Возврат 5% от суммы чека на Вашу карту Город Легенд! Копите бонусы и оплачивайте ими до 100% при следующей покупке! Экономьте свое время, делая заказ в интернет магазине и оформляя доставку!",
        imageUri: "img/company_slider/8c.png"
    },
    {
        title: "Альбион",
        subTitle: "Ресторан-Паб",
        text: "Отдых в английском стиле позволит вернуть Вам 10% бонусами на Вашу карту Город Легенд! Оплачивайте ими до 50% от суммы следущего чека! Заходя сюда гостем, Вы быстро становитесь другом!",
        imageUri: "img/company_slider/9c.svg"
    },
    
];

var INTERNET_SHOPS_DATA = [
    {
        title: "Aliexpress",
        subTitle: "Интернет-магазин модных новинок",
        text: "Вернем 10% Легенд Баллами с любой суммы покупки!",
        imageUri: "img/company_slider/1i.png"
    },
    {
        title: "Mamsy",
        subTitle: "Интернет-магазин распродаж товаров для всей семьи",
        text: "Вернем 10% Легенд Баллами с любой суммы покупки!",
        imageUri: "img/company_slider/2i.svg"
    },
    {
        title: "МВидео",
        subTitle: "Интернет-магазин цифровой и бытовой техники и электроники",
        text: "Вернем 10% Легенд Баллами с любой суммы покупки!",
        imageUri: "img/company_slider/3i.png"
    },
    {
        title: "New balance",
        subTitle: "Интернет-магазин кросовок на каждый день",
        text: "Вернем 10% Легенд Баллами с любой суммы покупки!",
        imageUri: "img/company_slider/6i.svg"
    },
    {
        title: "Adidas",
        subTitle: "Интернет-магазин спортивной одежды и обуви",
        text:"Вернем 10% Легенд Баллами с любой суммы покупки!",
        imageUri: "img/company_slider/7i.svg"
    },
    {
        title: "Билайн",
        subTitle: "Оператор сотовой связи",
        text: "Вернем 10% Легенд Баллами с любой суммы покупки!",
        imageUri: "img/company_slider/8i.svg"
    },
    {
        title: "OLDI",
        subTitle: "Интернет-магазин электроники, компьютерных комплектующих и бытовой техники",
        text: "Вернем 10% Легенд Баллами с любой суммы покупки!",
        imageUri: "img/company_slider/9i.svg"
    },  
];


var USERS_DATA = [
    {
        title: "Марина 25 лет. г.Москва",
        text: "Все начисляется, списывается и копится, после стал рекомендовать друзьям. На данный момент получаю исключительно положительные эмоции.",
        imageUri: "img/video_1-min.png",
        additionalImageUri: "img/users_slider/u3.png"
    },
    {
        title: "Даша 25 лет. г.Москва",
        text: "Все начисляется, списывается и копится, после стал рекомендовать друзьям.",
        imageUri: "img/video_2-min.png",
        additionalImageUri: "img/users_slider/u2.png"  
    },
    {
        title: "Саша 25 лет. г.Москва",
        text: "Все начисляется, списывается и копится, после стал рекомендовать друзьям.",
        imageUri: "img/video_3-min.png",
        additionalImageUri: "img/users_slider/u3.png"
    },
    {
        title: "Леша 25 лет. г.Москва",
        text: "Все начисляется, списывается и копится, после стал рекомендовать друзьям.",
        imageUri: "img/video_2-min.png",
        additionalImageUri: "img/users_slider/u4.png"
    },

    {
        title: "Аня 25 лет. г.Москва",
        text: "Все начисляется, списывается и копится, после стал рекомендовать друзьям.",
        imageUri: "img/video_2-min.png",
        additionalImageUri: "img/users_slider/u5.png"
    },
];

var CLASSES_TO_RESET = ["c2","c3","c4","c5","c6","c7","c8","c9"];
var RESET_SELECTOR = ".c-size";

var companyClassState = ["c1","c2","c3","c4","c5","c6","c7","c8","c9"];
var inetshopsClassState = ["c1","c2","c3","c6","c7","c8","c9"];

var usersClassState = ["pu1", "pu2", "pu3", "pu4", "pu5"];
var usersMobileClassState = ["u1", "u2", "u3", "u4", "u5"];

var companyElements;
var inetshopsElements;

var usersElements;

var buildChangeOrder = function(array) {
    var shiftedArray = [...array];
    shiftedArray.push(shiftedArray.shift());

    var result = {right:{}, left:{}};
    for(var i = 0; i<shiftedArray.length; i++)
    {
        result.left[shiftedArray[i]] = array[i];
        result.right[array[i]] = shiftedArray[i]
    }

    return result
};

var commitChanges = function(array, order, direction) {
    
    var first, second;
    var newArray = [...array];

    if(direction === RIGHT_DIRECTION)
    {
        first = newArray[0];
        second = order.right[first];
    
    }
    else if(direction === LEFT_DIRECTION)
    {
        first = newArray[0];
        second = order.left[first];
    }

    var secondIndex = newArray.indexOf(second);
    newArray[0] = second;
    newArray[secondIndex] = first;

    return newArray;
};

var companyOrder = buildChangeOrder(companyClassState);
var inetshopsOrder = buildChangeOrder(inetshopsClassState);

var _init = function(){
    var spending = 48000;
    var percent = 5;

    companyElements = [".c-border1", ".c-border2",".c-border3",".c-border4",".c-border5",".c-border6",".c-border7",".c-border8",".c-border9"].map(e=>document.querySelector(e));
    inetshopsElements = [".c-border1",".c-border2",".c-border3",".c-border6",".c-border7",".c-border8",".c-border9"].map(e=>document.querySelector(e));
    
    usersElements = [".users-slider div.u1",".users-slider div.u2", ".users-slider div.u3", ".users-slider div.u4", ".users-slider div.u5"].map(e=>document.querySelector(e));
    usersElementsMoblie = [".mobile-user-slider div.u1",".mobile-user-slider div.u2", ".mobile-user-slider div.u3", ".mobile-user-slider div.u4", ".mobile-user-slider div.u5"].map(e=>document.querySelector(e));

    function fadingText() {
        fadeText.classList.add("in-down");
    }
    
    function fadingCalculator() {
        fadeCalculator.classList.add("in-down");
    }

    function fadingMobile() {
        fadeMobile.classList.add("in-down");
    }

    function fadingCalculatorMobile () {
        fadeCalculatorMobile.classList.add("in-down");
    }

    var onGreenSliderChange = function(e){
        var classStateCopy = [...companyClassState];
        var currentClass = document.querySelector(".view-company").getAttribute("class").replace(/.*([ci][0-9])\s+.*/g, '$1')
        classStateCopy = commitChanges(classStateCopy, companyOrder, e.detail);

        for(let i = 0; i<companyClassState.length; i++)
        {
            companyElements[i].classList.replace(companyClassState[i], classStateCopy[i]);
            if(companyElements[i].classList.contains(currentClass))
            {
                companyElements[i].classList.add("company-animation-fading");
                companyElements[i].addEventListener("animationend", function(){
                    companyElements[i].classList.remove("company-animation-fading")
                });
            }
        }

        companyClassState = [...classStateCopy];

    };

    var onInetshopsSliderChange = function(e){
        var classStateCopy = [...inetshopsClassState];
        classStateCopy = commitChanges(classStateCopy, inetshopsOrder, e.detail);

        for(let i = 0; i<inetshopsClassState.length; i++)
        {
            inetshopsElements[i].classList.replace(inetshopsClassState[i], classStateCopy[i]);
        }

        inetshopsClassState = [...classStateCopy];
    };

    var onUserSliderChange = function(e){
        var classStateCopy = [...usersClassState];

        if(e.detail === LEFT_DIRECTION)
        {
            classStateCopy.unshift(classStateCopy.pop());
        }
        else if(e.detail == RIGHT_DIRECTION)
        {
            classStateCopy.push(classStateCopy.shift());
        }

        for(let i = 0; i<usersClassState.length; i++)
        {
            if(e.detail === LEFT_DIRECTION)
            {
                usersElements[i].classList.add("reversed");

                usersElements[i].addEventListener("animationend", function onAnimEnd(){
                    usersElements[i].classList.remove("reversed");
                    usersElements[i].removeEventListener("animationend", onAnimEnd);
                });
            }
            else
            {
                usersElements[i].classList.add("direct");

                usersElements[i].addEventListener("animationend", function onAnimEnd(){
                    usersElements[i].classList.remove("direct");
                    usersElements[i].removeEventListener("animationend", onAnimEnd);
                });
            }
            usersElements[i].classList.replace(usersClassState[i], classStateCopy[i]);
        }


        usersClassState = [...classStateCopy];
    };

    var onUserSliderMobileChange = function(e){
        var classStateCopy = [...usersMobileClassState];

        if(e.detail === LEFT_DIRECTION)
        {
            classStateCopy.unshift(classStateCopy.pop());
        }
        else if(e.detail == RIGHT_DIRECTION)
        {
            classStateCopy.push(classStateCopy.shift());
        }

        for(let i = 0; i<usersMobileClassState.length; i++)
        {
            usersElementsMoblie[i].classList.replace(usersMobileClassState[i], classStateCopy[i]);
        }


        usersMobileClassState = [...classStateCopy];
    };

    var initSliderElements = function(elements, classes)
    {
        var all = document.querySelectorAll(RESET_SELECTOR);

        for(var i=0;i<all.length;i++)
        {
            all[i].classList.remove(...CLASSES_TO_RESET);
        }

        for(var i = 0; i<elements.length; i++)
        {
            elements[i].classList.add(classes[i]);
        }
    };

    var ourNumbersEl = document.querySelector(".our-number-all");
    var fadeText = document.querySelector("body > div > section.about-us > div > div > div.col-lg-7 > div");
    var fadeCalculator = document.querySelector("body > div > section:nth-child(8) > div > div > div.col-lg-7 > div.calculator");
    var fadeMobile = document.querySelector("body > div > section.mobile-app > div > div.row.mobile-align > div:nth-child(1)");
    var fadeCalculatorMobile=document.querySelector("body > div > section.user-numerals.user-numerals-mobile > div.calculator");

    window.userScrolling.addUserSeeEvent(ourNumbersEl, ()=>window.animation.animateNumberInc(0,100,".our-number-left .single-number"));
    window.userScrolling.addUserSeeEvent(ourNumbersEl, ()=>window.animation.animateNumberInc(0,115,".our-number-right .single-number"));
    window.userScrolling.addUserSeeEvent(fadeText, fadingText, 0.6);
    window.userScrolling.addUserSeeEvent(fadeCalculator, fadingCalculator, 0.5);
    window.userScrolling.addUserSeeEvent(fadeMobile, fadingMobile,0.6);
    window.userScrolling.addUserSeeEvent(fadeCalculatorMobile, fadingCalculatorMobile, 0.5);

    var greenSliderEl = document.querySelector(".company-info-center");
    var blueSliderDesktopEl = document.querySelector(".users-slider .users-info");
    var blueSliderMobileEl = document.querySelector(".mobile-user-slider .users-info");
    var videoSliderEl = document.querySelector("section.videos .row.videos");

    
    
    var greenSlider = window.slider.init("div.left-arrow","div.right-arrow",".company-info-center", ".company-info-img", COMPANY_SLIDER_DATA);
    var blueSlideDesktop = window.slider.init("div.left-arrow-2", "div.right-arrow-2", ".users-slider .users-info", [".users-slider .video-content"], USERS_DATA, ANIMATION_DURATION);
    var blueSlideMobile = window.slider.init("div.left-arrow-2", "div.right-arrow-2", ".mobile-user-slider .users-info", [".mobile-user-slider .video-content", ".mobile-user-slider .u3-img"], USERS_DATA);
    var videoSlider = window.slider.init(null, null, "section.videos .row.videos", "section.videos .row.videos .video-content", USERS_DATA);
    
    blueSlideDesktop.addEventListener("sliderchange", onUserSliderChange);
    blueSlideMobile.addEventListener("sliderchange", onUserSliderMobileChange);

    window.userScrolling.addUserSeeEvent(greenSliderEl, greenSlider.startAutoRotation);
    if(window.innerWidth > 768)
    {
        window.userScrolling.addUserSeeEvent(blueSliderDesktopEl, blueSlideDesktop.startAutoRotation);
    }
    else
    {
        window.userScrolling.addUserSeeEvent(blueSliderMobileEl, blueSlideMobile.startAutoRotation);
        window.userScrolling.addUserSeeEvent(videoSliderEl, videoSlider.startAutoRotation);
    }

    greenSlider.addEventListener("sliderchange", onGreenSliderChange);

    var inetShopsBtn = document.querySelector(".inter-shop");
    var companiesBtn = document.querySelector(".company-btn");

    var companySliderEl = document.querySelector(".company-slider");

    var spendingRangeDesktop = new window.RangeSlider(
       ".price-filter-desktop", 
        0, 100000, '\u20BD', spending);
    var spendingRangeMobile = new window.RangeSlider(
       ".price-filter-mobile", 
        0, 100000, '\u20BD', spending);

    var percentRangeDesktp = new window.RangeSlider(
       ".period-filter-desktop", 
        0, 12, '%', percent, 12);
    var percentRangeMobile = new window.RangeSlider(
       ".period-filter-mobile", 
        0, 12, '%', percent, 12);


    
    var changeSpending = function(newSpending)
    {
        spending = newSpending
        redrawBenefitSum()
    }
    
    var changePercent = function(newPercent)
    {
        percent = newPercent
        redrawBenefitSum()
    }

    var redrawBenefitSum = function()
    {
        var benefitSums = Array.from(document.querySelectorAll(".benefit-sum"));

        for(var bs of benefitSums)
        {
            bs.textContent = window.RangeSlider.prototype.formatNumber(spending * 0.01 * percent) + '\u20BD';
        }

    };

    spendingRangeDesktop.addCallback(changeSpending);
    spendingRangeMobile.addCallback(changeSpending);

    percentRangeDesktp.addCallback(changePercent);
    percentRangeMobile.addCallback(changePercent);

    inetShopsBtn.addEventListener('click', function(){
        greenSlider.removeEventListener("sliderchange", onGreenSliderChange);
        greenSlider.remove();
        companySliderEl.classList.replace("company-slider-companies", "company-slider-inetshops");
        companiesBtn.classList.remove("slider-btn-visited");
        inetShopsBtn.classList.add("slider-btn-visited");
        greenSlider = window.slider.init("div.left-arrow","div.right-arrow",".company-info-center", ".company-info-img", INTERNET_SHOPS_DATA);;
        inetshopsClassState = ["c1","c2","c3","c6","c7","c8","c9"];
        inetshopsElements = [".c-border1",".c-border2",".c-border3",".c-border6",".c-border7",".c-border8",".c-border9"].map(e=>document.querySelector(e));
        initSliderElements(inetshopsElements, inetshopsClassState);
        inetshopNext = 1;
        greenSlider.addEventListener("sliderchange", onInetshopsSliderChange);
        window.userScrolling.addUserSeeEvent(greenSliderEl, greenSlider.startAutoRotation);
    });

    companiesBtn.addEventListener('click', function(){
        greenSlider.removeEventListener("sliderchange", onInetshopsSliderChange);
        greenSlider.remove();
        companySliderEl.classList.replace("company-slider-inetshops", "company-slider-companies");
        companiesBtn.classList.add("slider-btn-visited");
        inetShopsBtn.classList.remove("slider-btn-visited");
        greenSlider = window.slider.init("div.left-arrow","div.right-arrow",".company-info-center", ".company-info-img", COMPANY_SLIDER_DATA);
        companyClassState = ["c1","c2","c3","c4","c5","c6","c7","c8","c9"];
        companyElements = [".c-border1", ".c-border2",".c-border3",".c-border4",".c-border5",".c-border6",".c-border7",".c-border8",".c-border9"].map(e=>document.querySelector(e));
        initSliderElements(companyElements, companyClassState);
        companyNext = 1;
        greenSlider.addEventListener("sliderchange", onGreenSliderChange);
        window.userScrolling.addUserSeeEvent(greenSliderEl, greenSlider.startAutoRotation);
    });
    redrawBenefitSum();
    window.userScrolling.activateEvents();
    
};

document.addEventListener("DOMContentLoaded", _init);

function onClickPlayMarket() {
    document.location.href = 'https://play.google.com/store/apps/details?id=com.legendcity.legendcity&hl=ru&utm_source=app-web&utm_campaign=app-web&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1http://www.mozilla.org';
}

function onClickAppStore() {
    document.location.href='https://apps.apple.com/ru/app/legendcity/id1229070695';
}

function onClickVk() {
    document.location.href='https://vk.com/legendcity55';
}

function onClickInst() {
    document.location.href='https://www.instagram.com/legendcity.official/';
}

function onClickYt() {
    document.location.href='https://www.youtube.com/user/perfectlegendinfo/videos';
}


document.getElementById('google-play').addEventListener('click', onClickPlayMarket);
document.getElementById('google-play-2').addEventListener('click', onClickPlayMarket);

document.getElementById('app-store').addEventListener('click', onClickAppStore);
document.getElementById('app-store-2').addEventListener('click', onClickAppStore);


document.getElementById('vk-group').addEventListener('click', onClickVk);
document.getElementById('inst-group').addEventListener('click', onClickInst);
document.getElementById('yt-chan').addEventListener('click', onClickYt);