import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
    Ember.$('body').css('background', 'url("img/warning-bg.jpg") #B93435');
    Ember.$('.background-normal').hide();
		Ember.$('.progress .meter').css('background', '#2daf64');
    Ember.$('.background-jazzy, .background-jazzy-2').hide();
    this.setAllTheHeights();
  }
});
