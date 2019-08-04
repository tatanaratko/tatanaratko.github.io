'use strict';

(function () {

    var LEFT_DIRECTION = -1;
    var RIGHT_DIRECTION = 1;

    var ANIMATION_FADING_STEP = 0.1;
    var ANIMATION_PERIOD = 15;

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

        this.leftArrow = document.querySelector(leftArrowSelector);
        this.rightArrow = document.querySelector(rightArrowSelector);
        this.sliderInfoEl = document.querySelector(companyInfoSelector);

        this.companyImg = typeof companyImgSelector === "string" ? document.querySelector(companyImgSelector) : document.querySelector(companyImgSelector[0]);
        this.additionalImg = typeof companyImgSelector === "object" ? document.querySelector(companyImgSelector[1]) : null;

        this.sliderData = data;
        
        this.renderCompanyInfo = async function(el, info) {

            this.isDebounceBlocked = true;
    
           await animateFading(el);
    
            var title = el.querySelector(".title");
            var subTitle = el.querySelector(".subtitle");
            var text = el.querySelector(".text");
    
            title.textContent = info.title;
            if(subTitle)
            {
                subTitle.textContent = info.subTitle;
            }
            text.textContent = info.text;
    
            this.companyImg.setAttribute("src", info.imageUri);

            if(this.additionalImg && info.additionalImageUri)
            {
                this.additionalImg.setAttribute("src", info.additionalImageUri);
            }
    
            await animateAppearance(el);
    
            this.isDebounceBlocked = false;
    
        };
    
        this.initialRender = async function()
        {
            await this.renderCompanyInfo(this.sliderInfoEl, this.sliderData[0]);
        }
    
    
        this.goTo = (function(direction) {
    
            if(this.isDebounceBlocked)
            {
                return;
            }
    
            if(direction === LEFT_DIRECTION)
            {
                var leftElement = this.sliderData.pop();
    
                this.renderCompanyInfo(this.sliderInfoEl, leftElement);
    
                this.sliderData.unshift(leftElement);
            }
            else if(direction === RIGHT_DIRECTION && this.sliderData.length > 1)
            {
                var rightElement = this.sliderData[1];
    
                this.renderCompanyInfo(this.sliderInfoEl, rightElement);
    
                this.sliderData.push(this.sliderData.shift());
            }
        }).bind(this);
    
        this.onClickRight = (function() {
            this.goTo(RIGHT_DIRECTION);
        }).bind(this);
    
        this.onClickLeft = (function() {
            this.goTo(LEFT_DIRECTION);
        }).bind(this)

        var that = this;
        
        this.initialRender().then(function(){
            that.leftArrow.addEventListener('click', that.onClickLeft);
            that.rightArrow.addEventListener('click', that.onClickRight);
        });

        this.remove = function(){
            that.leftArrow.removeEventListener('click', that.onClickLeft);
            that.rightArrow.removeEventListener('click', that.onClickRight);
        }
    };

    window.slider = {
        init: function(leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data){
            return new Slider(leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data);
        }
    };

})();