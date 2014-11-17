import Ember from 'ember';
import HeightView from './height';

export default HeightView.extend({
	click: function(){
		this.get('controller').transitionToRoute('start');
	},
	didInsertElement: function() {
		Ember.$('.background-normal').css('background', 'url("img/start2-bg.jpg")');

    if (Ember.$('html').hasClass('touch')) {
      Ember.$('.click-touch').text('Touch');
    }
    this.setAllTheHeights();
    (new Image).src = 'img/speed-bg.jpg';
	}
});