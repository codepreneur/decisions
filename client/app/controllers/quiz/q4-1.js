import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['start','application'],
	setupProgress: function(){
		this.set('controllers.application.style', '');
		this.set('controllers.application.class', '');
		this.set('controllers.application.percent', 68);
	}.on('init'),
	actions: {
		updateQ41: function(val){

			var decider = this.get('controllers.start.deciderModel');
			decider.set('q41', val);
			decider.save();

		}
	}
});
