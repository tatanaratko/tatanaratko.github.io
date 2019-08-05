'use strict';

(function(){

    var SCROLLING_RATIO = 0.75;

    window.userScrolling = {

        listeners: [],

        addUserSeeEvent: function(el, listener){
            var elPositionTop = el.offsetTop - window.innerHeight*SCROLLING_RATIO;

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