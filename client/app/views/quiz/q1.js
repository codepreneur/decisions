import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
    Ember.$('.background-normal').css('background', 'url("img/speed-bg.jpg")');
    Ember.$('.background-jazzy').addClass('bg-arrow');
    Ember.$('.background-jazzy-2').addClass('bg-arrow-2');
    Ember.$('.progress .meter').css('background', '#aa64a5');

    this.setAllTheHeights();
  }
});
