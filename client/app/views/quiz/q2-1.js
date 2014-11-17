import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
		Ember.$('.background-normal').css('background', 'url("img/bg-timer.gif")');
		Ember.$('.progress .meter').css('background', '#f5a500');
    Ember.$('.background-jazzy, .background-jazzy-2').hide();
    Ember.$('.background-jazzy').removeClass('bg-warning');
    Ember.$('.background-jazzy-2').removeClass('bg-warning-2');

    this.setAllTheHeights();
  }
});
