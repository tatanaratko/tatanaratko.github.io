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

    var ANIMATION_FADING_STEP = 0.1;
    var ANIMATION_PERIOD = 15;

    var BULLET_TEMPLATE = function(cls)
    {
        var bullet = document.createElement("div");
        bullet.classList.add("bullet");
        bullet.classList.add("bullet-2");
        bullet.classList.add(cls);
        return bullet;
    }

    var animateFading = function (el)
        {

        if (!el.style.opactiy)
        {
            el.style.opacity = '1';
        }

        var promise = new Promise(function (resolve, reject)
        {

            var fadingInterval = setInterval(function ()
            {
                var newOpacity = parseFloat(el.style.opacity) - ANIMATION_FADING_STEP;
                el.style.opacity = newOpacity.toString();
    
                if (newOpacity <= 0)
                {
                    clearInterval(fadingInterval);
                    resolve();
                }
            }, ANIMATION_PERIOD);
        });

        return promise;
    };

    var animateAppearance = function (el)
    {

        if (!el.style.opactiy)
        {
            el.style.opacity = '0';
        }

        var promise = new Promise(function (resolve, reject)
        {


            var appearanceInterval = setInterval(function ()
            {
                var newOpacity = parseFloat(el.style.opacity) + ANIMATION_FADING_STEP;
                el.style.opacity = newOpacity.toString();
    
                if (newOpacity >= 1)
                {
                    clearInterval(appearanceInterval);
                    resolve();
                }
            }, ANIMATION_PERIOD);
        });

        return promise;
    };

    

    var Slider = function (leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data)
    {

        this.isDebounceBlocked = false;

        this.sliderData = null;

        this.leftArrow = document.querySelector(leftArrowSelector);
        this.rightArrow = document.querySelector(rightArrowSelector);
        this.sliderInfoEl = document.querySelector(companyInfoSelector);

        this.companyImg = typeof companyImgSelector === "string" ? document.querySelector(companyImgSelector) : document.querySelector(companyImgSelector[0]);
        this.additionalImg = typeof companyImgSelector === "object" ? document.querySelector(companyImgSelector[1]) : null;

        this.bulletGroupEl = this.sliderInfoEl.querySelector(".bullet-group");
        
        this.hasBulletGroup = (this.bulletGroupEl && this.bulletGroupEl.offsetParent !== null);
        this.bullets = null;

        this.sliderData = data.map(function(e,i){
            e.id = i;
            return e;
        });


        
        this.renderCompanyInfo = async function (el, info)
        {

            this.isDebounceBlocked = true;
    
           await animateFading(el);
    
            var title = el.querySelector(".title");
            var subTitle = el.querySelector(".subtitle");
            var text = el.querySelector(".text");
    
            if(title)
            {
                title.textContent = info.title;
            }


            if (subTitle)
            {
                subTitle.textContent = info.subTitle;
            }

            if(text)
            {
                text.textContent = info.text;
            }
    
            this.companyImg.setAttribute("src", info.imageUri);

            if (this.additionalImg && info.additionalImageUri)
            {
                this.additionalImg.setAttribute("src", info.additionalImageUri);
            }
    
            await animateAppearance(el);
    
            this.isDebounceBlocked = false;
    
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

        }).bind(this);
    
        this.onClickRight = (function ()
        {
            this.goTo(RIGHT_DIRECTION);
        }).bind(this);
    
        this.onClickLeft = (function ()
        {
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
            that.leftArrow.removeEventListener('click', that.onClickLeft);
            that.rightArrow.removeEventListener('click', that.onClickRight);

            that.sliderInfoEl.removeEventListener("touchstart", that.startTouch);
            that.sliderInfoEl.removeEventListener("touchmove", that.moveTouch);
        }
    };

    window.slider = {
        init: function (leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data)
        {
            return new Slider(leftArrowSelector, rightArrowSelector, companyInfoSelector, companyImgSelector, data);
        }
    };

})();