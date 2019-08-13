'use strict';

/****
 * 
 * Mikhail Semikolenov & Tatyana Ratko
 * Omsk, August 2019
 * 
 */

(function ()
{

    var LEFT_DIRECTION = -1;
    var RIGHT_DIRECTION = 1;
    var AUTO_ROTATION_INTERVAL = 5000;

    var BULLET_TEMPLATE = function(cls)
    {
        var bullet = document.createElement("div");
        bullet.classList.add("bullet");
        bullet.classList.add("bullet-2");
        bullet.classList.add(cls);
        return bullet;
    }

    var Emitter = function() {
        var eventTarget = document.createDocumentFragment();
        
        var delegate = function(method) {
            this[method] = eventTarget[method].bind(eventTarget)
        };
        
        [
            "addEventListener",
            "dispatchEvent",
            "removeEventListener"
        ].forEach(delegate, this)
    };
    
    var Slider = function (leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data)
    {

        Emitter.call(this);
        this.isDebounceBlocked = false;
        this.isAutoRotationBlocked = false;

        this.rotationInterval = null;

        this.sliderData = null;

        this.leftArrow = document.querySelector(leftArrowSelector);
        this.rightArrow = document.querySelector(rightArrowSelector);
        this.sliderInfoEl = document.querySelector(companyInfoSelector);

        this.$title = this.sliderInfoEl.querySelector(".title");
        this.$subTitle = this.sliderInfoEl.querySelector(".subtitle");
        this.$text = this.sliderInfoEl.querySelector(".text");

        this.companyImg = typeof companyImgSelector === "string" ? document.querySelector(companyImgSelector) : document.querySelector(companyImgSelector[0]);
        this.additionalImg = typeof companyImgSelector === "object" ? document.querySelector(companyImgSelector[1]) : null;

        this.bulletGroupEl = this.sliderInfoEl.querySelector(".bullet-group");
        
        this.hasBulletGroup = (this.bulletGroupEl && this.bulletGroupEl.offsetParent !== null);
        this.bullets = null;

        this.sliderData = data.map(function(e,i){
            e.id = i;
            return e;
        });

        this.event = new Event("sliderchange");

        
        this.renderCompanyInfo = function (el, info)
        {

            this.isDebounceBlocked = !!this.leftArrow;
            
            var that = this;

            el.addEventListener("animationend", function onFadeAnimationEnd(){

                el.removeEventListener("animationend", onFadeAnimationEnd);
                el.addEventListener("animationend", function onShowAnimationEnd(){
                    that.isDebounceBlocked = false;
                    el.removeEventListener("animationend", onShowAnimationEnd)
                });
                
                if(that.$title)
                {
                    that.$title.textContent = info.title;
                }
    
    
                if (that.$subTitle)
                {
                    that.$subTitle.textContent = info.subTitle;
                }
    
                if(that.$text)
                {
                    that.$text.textContent = info.text;
                }

                el.classList.remove("slider-text-faded");
            }, false);
    
            el.classList.add("slider-text-faded");

            this.companyImg.setAttribute("src", info.imageUri);

            if (this.additionalImg && info.additionalImageUri)
            {
                this.additionalImg.setAttribute("src", info.additionalImageUri);
            }
    
        };
    
        this.renderBullets = (function(){
            this.bullets = this.sliderData.map(function(e,i){
                return BULLET_TEMPLATE("bullet-point-"+i);
            });

            this.bullets[0].classList.add("bullet-active");

            for(var i = 0; i < this.bullets.length; i++)
        {
                this.bulletGroupEl.append(this.bullets[i]);
            }

        }).bind(this);


        this.setActiveBullet = function(){
            for(var i = 0; i < this.bullets.length; i++)
            {
                this.bullets[i].classList.toggle("bullet-active", this.sliderData[0].id === i);
            }
        };


        this.initialRender = async function ()
        {
            await this.renderCompanyInfo(this.sliderInfoEl, this.sliderData[0]);

            if(this.hasBulletGroup)
            {
                this.renderBullets();
        }
        }
    
    
        this.goTo = (function (direction)
        {
    
            if (this.isDebounceBlocked)
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

            if(this.hasBulletGroup)
            {
                this.setActiveBullet();
            }

            this.dispatchEvent(this.event);

        }).bind(this);
    
        this.onClickRight = (function ()
        {
            this.disallowAutoRotation();
            this.goTo(RIGHT_DIRECTION);
        }).bind(this);
    
        this.onClickLeft = (function ()
        {
            this.disallowAutoRotation();
            this.goTo(LEFT_DIRECTION);
        }).bind(this)

        var that = this;
        
        this.initialX = null;
        this.initialY = null;

        this.startTouch = (function (e)
        {
            this.initialX = e.touches[0].clientX;
            this.initialY = e.touches[0].clientY;
        }).bind(this);

        this.allowAutoRotation = function(){
            this.isAutoRotationBlocked = false;
        }

        this.disallowAutoRotation = function(){
            this.isAutoRotationBlocked = true;

            setTimeout(this.allowAutoRotation, AUTO_ROTATION_INTERVAL * 2);
        };

        this.onSwipeLeft = (function(){
            this.goTo(RIGHT_DIRECTION);
        }).bind(this);

        this.onSwipeRight = (function(){
            this.goTo(LEFT_DIRECTION);
        }).bind(this);

        this.moveTouch = (function (e)
        {
            
            if (this.initialX === null)
            {
                return;
            }

            if (this.initialY === null)
            {
                return;
            }

            var currentX = e.touches[0].clientX;
            var currentY = e.touches[0].clientY;

            var diffX = this.initialX - currentX;
            var diffY = this.initialY - currentY;

            if (Math.abs(diffX) > Math.abs(diffY))
            {
                this.disallowAutoRotation();
                if (diffX > 0)
                {
                    this.onSwipeLeft();
                } else
                {
                    this.onSwipeRight();
                }
                
            }
            
            this.initialX = null;
            this.initialY = null;

            try{

                e.preventDefault();
            }
            catch(e)
            {
                console.log(e)
            }
        }).bind(this);

        this.initialRender().then(function ()
        {
            if(that.leftArrow && that.rightArrow)
            {
                that.leftArrow.addEventListener('click', that.onClickLeft);
                that.rightArrow.addEventListener('click', that.onClickRight);
            }

            that.sliderInfoEl.addEventListener("touchstart", that.startTouch, false);
            that.sliderInfoEl.addEventListener("touchmove", that.moveTouch, false);
        });

        this.remove = function ()
        {
            this.leftArrow.removeEventListener('click', this.onClickLeft);
            this.rightArrow.removeEventListener('click', this.onClickRight);

            this.sliderInfoEl.removeEventListener("touchstart", this.startTouch);
            this.sliderInfoEl.removeEventListener("touchmove", this.moveTouch);

            if(this.rotationInterval)
            {
                clearInterval(this.rotationInterval);
            }

            this.isDebounceBlocked = false;
            this.isAutoRotationBlocked = false;
            this.sliderData = null;
        };

        this.autoRotate = function(){
            if(this.isAutoRotationBlocked)
            {
                return;
            }
            this.goTo(RIGHT_DIRECTION)
        };

        this.startAutoRotation = function(){
            this.rotationInterval = setInterval(this.autoRotate, AUTO_ROTATION_INTERVAL);
        };

        this.startAutoRotation = this.startAutoRotation.bind(this);
        this.autoRotate = this.autoRotate.bind(this);
        this.allowAutoRotation = this.allowAutoRotation.bind(this);
        this.disallowAutoRotation = this.disallowAutoRotation.bind(this);
        this.remove = this.remove.bind(this);
        
    };

    window.slider = {
        init: function (leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data)
        {
            return new Slider(leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data);
        }
    };

})();