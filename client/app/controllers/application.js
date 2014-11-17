import Ember from 'ember';

export default Ember.Controller.extend({
	class: null,
	percent: null,
	style: null,
	setDefaults: function() {
		this.set('class', 'hide');
		this.set('percent', 1);
		this.set('style', 'margin-left: 50rem');
	}
});
