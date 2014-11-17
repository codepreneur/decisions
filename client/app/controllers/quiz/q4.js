import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	setupProgress: function(){
		this.set('controllers.application.style', '');
		this.set('controllers.application.class', '');
		this.set('controllers.application.percent', 64);
	}.on('init')
});
