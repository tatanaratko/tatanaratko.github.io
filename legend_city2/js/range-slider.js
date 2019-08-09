(function(){

    var RangeSlider = function(selector, from, to, suffix='', initialValue=0, step=100){
        this.$el = document.querySelector(selector);
        this.$rangeInput = this.$el.querySelector('.range-slider-slider');
        this.$textInput = this.$el.querySelector('.range-slider-input');
        this.$from = this.$el.querySelector('.range-slider-limit-left');
        this.$to = this.$el.querySelector('.range-slider-limit-right');
        this.$progressBar = this.$el.querySelector('.range-slider-progress');
        this.$suffix = this.$el.querySelector(".range-slider-suffix");

        this.$rangeInput.setAttribute("min", from.toString());
        this.$rangeInput.setAttribute("max", to.toString());
        this.$rangeInput.setAttribute("step", ((to-from)/step).toString());

        this.$rangeInput.value = initialValue;
        this.$progressBar.style.width = (initialValue*100/to).toString()+"%";

        this.$textInput.value = this.formatNumber(initialValue);
        this.$suffix.textContent = suffix.toString();

        this.$from.textContent = from.toString();
        this.$to.textContent = to.toString();

        this.callbacks = [];

        this.addCallback = function(callback){
            this.callbacks.push(callback);
        };

        this.onInput = function(e){
            var newValue = e.target.value;

            this.$progressBar.style.width = (newValue*100/to).toString()+"%";
            this.$textInput.value = this.formatNumber(newValue);
            for(var c of this.callbacks)
            {
                c.apply(this, [newValue]);
            }
        };

        this.onInput=this.onInput.bind(this);
        this.addCallback = this.addCallback.bind(this);



        this.$rangeInput.addEventListener('input', this.onInput);
    };


    RangeSlider.prototype.formatNumber = function(num) {
        
        if(num < 1000)
        {
            return num.toString();
        }

        var result = "";
        var start = num.toString();

        for(var i = 0; i<start.length; i++)
        {
            result = result + start[i];
            if((start.length-i-1)%3 === 0)
            {
                result = result + " ";
            }
        }

        return result;

    };

    window.RangeSlider = RangeSlider;
})();