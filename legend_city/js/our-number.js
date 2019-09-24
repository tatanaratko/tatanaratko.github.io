'use strict';

(function(){

    var ANIMATION_FRAME_RATE = 50;
    var RANDOMIZING_LEVEL = 1;

    var animateOne = function(from, to, el)
    {
        var currentNumber = from;
        var sign = from < to ? 1 : -1; 

        var animationInterval = setInterval(function(){
            
            if(currentNumber === to)
            {
                clearInterval(animationInterval);
            }

            el.textContent = currentNumber;
            currentNumber += sign;

        }, ANIMATION_FRAME_RATE);
    };

    var animateMany = function(from, to, digits) {
        var currentNumber = from;
        var sign = from < to ? 1 : -1; 

        var animationInterval = setInterval(function(){
            
            if(currentNumber >= to)
            {
                clearInterval(animationInterval);
            }
            var currentString = currentNumber.toString();

            for(var i=currentString.length; i<digits.length; i++)
            {
                currentString = "0"+currentString;
            }

            for(var i = 0; i < digits.length; i++)
            {
                
                digits[i].textContent = currentString[i];
            }

            currentNumber += sign * (Math.floor(Math.random()*RANDOMIZING_LEVEL)+1);

        }, ANIMATION_FRAME_RATE);
    };

    window.animation = {
        animateNumberInc: function(from, to, selector)
        {
            var numberElements = document.querySelectorAll(selector);

            if(numberElements.length === 1)
            {
                animateOne(from, to, numberElements[0]);
            }
            else if(numberElements.length > 1)
            {
                animateMany(from, to, numberElements);
            }
        }
    }
})();