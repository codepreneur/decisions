import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function(){
		Ember.$('.background-normal').css('background', 'url("img/bg-timer.gif")');
		Ember.$('.progress .meter').css('background', '#f5a500');
		Ember.$('.background-jazzy, .background-jazzy-2').hide();

		var controller = this.get('controller');

		
		controller.set('scoreSelected', false);
		
		this.setAllTheHeights();

		
		var score = this.$('input[name="score"]');

		this.$(score).on('change', function(){
			
			if(Ember.$('input[name="score"]:checked')){
				Ember.run(function(){
					controller.set('scoreSelected', true);
					controller.incrementProperty('count');
					console.log(controller.count);
				});
			}
		});

		Ember.$('input[name="score"]:checked').prop('checked', false);


	}
});
