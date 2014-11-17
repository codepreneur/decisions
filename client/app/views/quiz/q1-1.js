import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
		Ember.$('.background-normal').css('background', 'url("img/speed-bg.jpg")');
    Ember.$('.progress .meter').css('background', '#aa64a5');
		Ember.$('.background-jazzy, .background-jazzy-2').hide();
    this.setAllTheHeights();
  }
});
