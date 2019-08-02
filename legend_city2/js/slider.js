'use strict';

(function () {

    var LEFT_DIRECTION = -1;
    var RIGHT_DIRECTION = 1;

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
    var companyInfoRight = document.querySelector(".company-info-right");
    var companyInfoLeft = document.querySelector(".company-info-left");

    var companyImg = document.querySelector(".company-info-img");

    var leftArrow = document.querySelector(".left-arrow");
    var rightArrow = document.querySelector(".right-arrow");

    var renderCompanyInfo = function(el, info) {
        var title = el.querySelector(".company-title");
        var subTitle = el.querySelector(".company-subtitle");
        var text = el.querySelector(".company-text");

        title.textContent = info.title;
        subTitle.textContent = info.subTitle;
        text.textContent = info.text;

        companyImg.setAttribute("src", info.imageUri);

    };

    var goTo = function(direction) {
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