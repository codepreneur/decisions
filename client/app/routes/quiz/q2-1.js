import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		this.controllerFor('application').set('style', '');
		this.controllerFor('application').set('class', '');
		this.controllerFor('application').set('percent', 36);
	},	

	actions: {
		nextQuestion: function(){
			this.transitionTo('quiz.q2-2');
		}
	}	

});
