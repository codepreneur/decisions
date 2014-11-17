import Ember from 'ember';

export default Ember.Component.extend({

	elId: null,
	interval: null,
	second: 10,

	didInsertElement: function(){
		var _this = this;
		console.log(this.get('elId'));
		var element = document.getElementById(this.get('elId'));
		element.innerHTML = '<span class="clock-seconds" id="seconds-' + this.get('elId') + '"></span>';
		var textElement = document.getElementById('seconds-' + this.get('elId'));

		var seconds = new ProgressBar.Circle(element, {
			duration: 200,
			color: "#FCB03C",
			trailColor: "#ddd"
		});

		this.set('interval', setInterval(function() {
	    // var second = new Date().getSeconds();
	    var second = _this.second;
	    seconds.animate(second / 10, function() {
	        textElement.innerHTML = second;
	        
	        if(second > 0){
	        	_this.decrementProperty('second');
	        } else {
	        	_this.sendAction();
	        }

	    })
		    
		}, 1000))
	},
	willDestroyElement: function() {
		clearInterval(this.get('interval'));
		// this.set('timer', null);
	}
});