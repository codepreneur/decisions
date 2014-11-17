import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
		Ember.$('.background-normal').css('background', 'url("img/tactics-bg.jpg")');
		// Ember.$('body').css('background', 'url("img/tactics-bg.png")');
		Ember.$('.progress .meter').css('background', '#14a09b');
    Ember.$('.background-jazzy, .background-jazzy-2');
    this.setAllTheHeights();

    var controller = this.get('controller');
    controller.set('clickedPeople', []);
    controller.set('clickedPersonInfo', null);

  }
});
