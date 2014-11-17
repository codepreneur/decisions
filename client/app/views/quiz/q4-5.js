import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
    Ember.$('body').css('background', '#242530');
		Ember.$('.background-normal').css('background', 'url("img/visual-bg.jpg")').show();
		Ember.$('.progress .meter').css('background', '#2daf64');
    Ember.$('.background-jazzy, .background-jazzy-2').hide();
    this.setAllTheHeights();
  }
});
