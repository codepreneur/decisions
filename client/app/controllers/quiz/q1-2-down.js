import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['start','application'],
	setupProgress: function(){
		this.set('controllers.application.style', '');
		this.set('controllers.application.class', '');
		this.set('controllers.application.percent', 13);
	}.on('init'),
	actions: {
		updateQ12: function(val){

			var decider = this.get('controllers.start.deciderModel');
			decider.set('q12', val);
			decider.save();
		}
	}
});
