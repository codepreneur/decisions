import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
    Ember.$('.background-normal').css('background', 'url("img/pressure-bg.jpg")');

    Ember.$('.progress .meter').css('background', '#f5a500');

    Ember.$('.background-jazzy').addClass('bg-warning').show();
    Ember.$('.background-jazzy-2').addClass('bg-warning-2').show();

    this.setAllTheHeights();
  }
});
