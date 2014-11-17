import Ember from 'ember';

export default Ember.Component.extend({
	percent: 1,
	percentCss: function() {
		return "width: " + this.percent + "%"
	}.property('percent')
});
