'use strict';

(function () {

    var LEFT_DIRECTION = -1;
    var RIGHT_DIRECTION = 1;

    var ANIMATION_FADING_STEP = 0.1;
    var ANIMATION_PERIOD = 15;

    var isDebounceBlocked = false;

    var mockCompanies = [
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

    var companyInfoCenter = document.querySelector(".company-info-center");
    var companyImg = document.querySelector(".company-info-img");

    var leftArrow = document.querySelector(".left-arrow");
    var rightArrow = document.querySelector(".right-arrow");

    var animateFading = function(el){

        if(!el.style.opactiy)
        {
            el.style.opacity = '1';
        }

        var promise = new Promise(function(resolve, reject){

            var fadingInterval = setInterval(function(){
                var newOpacity = parseFloat(el.style.opacity) - ANIMATION_FADING_STEP;
                el.style.opacity = newOpacity.toString();
    
                if(newOpacity <= 0)
                {
                    clearInterval(fadingInterval);
                    resolve();
                }
            }, ANIMATION_PERIOD);
        });

        return promise;
    };

    var animateAppearance = function(el){

        if(!el.style.opactiy)
        {
            el.style.opacity = '0';
        }

        var promise = new Promise(function(resolve, reject){


            var appearanceInterval = setInterval(function(){
                var newOpacity = parseFloat(el.style.opacity) + ANIMATION_FADING_STEP;
                el.style.opacity = newOpacity.toString();
    
                if(newOpacity >= 1)
                {
                    clearInterval(appearanceInterval);
                    resolve();
                }
            }, ANIMATION_PERIOD);
        });

        return promise;
    };

    var renderCompanyInfo = async function(el, info) {

        isDebounceBlocked = true;

       await animateFading(el);

        var title = el.querySelector(".company-title");
        var subTitle = el.querySelector(".company-subtitle");
        var text = el.querySelector(".company-text");

        title.textContent = info.title;
        subTitle.textContent = info.subTitle;
        text.textContent = info.text;

        companyImg.setAttribute("src", info.imageUri);

        await animateAppearance(el);

        isDebounceBlocked = false;

    };


    var goTo = function(direction) {

        if(isDebounceBlocked)
        {
            return;
        }

        if(direction === LEFT_DIRECTION)
        {
            var leftElement = mockCompanies.pop();

            renderCompanyInfo(companyInfoCenter, leftElement);

            mockCompanies.unshift(leftElement);
        }
        else if(direction === RIGHT_DIRECTION && mockCompanies.length > 1)
        {
            var rightElement = mockCompanies[1];

            renderCompanyInfo(companyInfoCenter, rightElement);

            mockCompanies.push(mockCompanies.shift());
        }
    }

    var onClickRight = function() {
        goTo(RIGHT_DIRECTION);
    }

    var onClickLeft = function() {
        goTo(LEFT_DIRECTION);
    }

    var _init = function() {
        leftArrow.addEventListener('click', onClickLeft);
        rightArrow.addEventListener('click', onClickRight);
    }



    document.addEventListener("DOMContentLoaded", _init);

})();