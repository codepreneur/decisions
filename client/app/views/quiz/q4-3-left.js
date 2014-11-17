import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
		Ember.$('.background-normal').css('background', 'url("img/visual-bg.jpg")');
		Ember.$('.progress .meter').css('background', '#2daf64');
    Ember.$('.background-jazzy, .background-jazzy-2').hide();
    Ember.$('body').css('background', 'url("img/warning-bg.jpg") #B93435');
    this.setAllTheHeights();
  }
});
