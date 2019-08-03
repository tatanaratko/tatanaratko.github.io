'use strict';

(function () {

    var LEFT_DIRECTION = -1;
    var RIGHT_DIRECTION = 1;

    var ANIMATION_FADING_STEP = 0.1;
    var ANIMATION_PERIOD = 15;

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

    

    var Slider = function(leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data){

        this.isDebounceBlocked = false;

        this.sliderData = null;
        
        this.renderCompanyInfo = async function(el, info) {

            this.isDebounceBlocked = true;
    
           await animateFading(el);
    
            var title = el.querySelector(".company-title");
            var subTitle = el.querySelector(".company-subtitle");
            var text = el.querySelector(".company-text");
    
            title.textContent = info.title;
            subTitle.textContent = info.subTitle;
            text.textContent = info.text;
    
            this.companyImg.setAttribute("src", info.imageUri);
    
            await animateAppearance(el);
    
            this.isDebounceBlocked = false;
    
        };
    
        this.initialRender = async function()
        {
            await this.renderCompanyInfo(companyInfoCenter, this.sliderData[0]);
        }
    
    
        this.goTo = (function(direction) {
    
            if(this.isDebounceBlocked)
            {
                return;
            }
    
            if(direction === LEFT_DIRECTION)
            {
                var leftElement = this.sliderData.pop();
    
                this.renderCompanyInfo(companyInfoCenter, leftElement);
    
                this.sliderData.unshift(leftElement);
            }
            else if(direction === RIGHT_DIRECTION && this.sliderData.length > 1)
            {
                var rightElement = this.sliderData[1];
    
                this.renderCompanyInfo(companyInfoCenter, rightElement);
    
                this.sliderData.push(this.sliderData.shift());
            }
        }).bind(this);
    
        this.onClickRight = (function() {
            this.goTo(RIGHT_DIRECTION);
        }).bind(this);
    
        this.onClickLeft = (function() {
            this.goTo(LEFT_DIRECTION);
        }).bind(this)

        this.leftArrow = document.querySelector(leftArrowSelector);
        this.rightArrow = document.querySelector(rightArrowSelector);
        this.companyInfoCenter = document.querySelector(companyInfoSelector);
        this.companyImg = document.querySelector(companyImgSelector);

        this.sliderData = data;

        var that = this;
        
        this.initialRender().then(function(){
            leftArrow.addEventListener('click', that.onClickLeft);
            rightArrow.addEventListener('click', that.onClickRight);
        });

        this.remove = function(){
            leftArrow.removeEventListener('click', this.onClickLeft);
            rightArrow.removeEventListener('click', this.onClickRight);
        }
    };

    window.slider = {
        init: function(leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data){
            return new Slider(leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data);
        }
    };

})();