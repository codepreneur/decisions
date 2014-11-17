import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['start','application'],
	setupProgress: function(){
		this.set('controllers.application.style', '');
		this.set('controllers.application.class', '');
		this.set('controllers.application.percent', 54);
	}.on('init'),
	actions: {
		updateQ32: function(val){
			
			var decider = this.get('controllers.start.deciderModel');
			decider.set('q32', val);
			decider.save();

		}
	}
});
