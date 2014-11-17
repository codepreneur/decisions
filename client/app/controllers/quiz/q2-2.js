import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['start','application'],
	count: 0,
	setupProgress: function(){
		this.set('controllers.application.style', '');
		this.set('controllers.application.class', '');
		this.set('controllers.application.percent', 40);
	}.on('init'),
	actions: {
		// incrementCount: function(){
		// 	 this.incrementProperty('count');
		// 	 console.log(this.get('count'));
		// },
		updateQ22: function(){

			var points = Ember.$('input[name="score"]:checked').val();
			var decider = this.get('controllers.start.deciderModel');
			decider.set('q22', points);
			decider.set('q22count', this.get('count'));
			decider.save();

		}
	}
});
