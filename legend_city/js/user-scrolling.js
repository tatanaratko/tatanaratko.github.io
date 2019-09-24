'use strict';

(function(){

    var SCROLLING_RATIO = 0.75;

    var cumulativeOffset = function(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop  || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while(element);
    
        return top;
    };

    window.userScrolling = {

        listeners: [],

        addUserSeeEvent: function(el, listener, position=SCROLLING_RATIO){
            var elPositionTop = cumulativeOffset(el) - window.innerHeight*position;

            this.listeners.push({position:elPositionTop, listener:listener});

        },

        onScroll: function(){
            for(var i = 0; i < this.listeners.length; i++)
            {
                if(window.pageYOffset >= this.listeners[i].position)
                {
                    this.listeners[i].listener.call();
                    this.listeners.splice(i,1);
                }
            }
        },

        activateEvents: function()
        {
            window.addEventListener("scroll", this.onScroll.bind(this));
        }
    };
})();