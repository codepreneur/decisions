import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
  didInsertElement: function() {
    // Ember.$('body>.ember-view>.liquid-container').css('background', 'url("img/visual-bg.png")');
    Ember.$('.background-normal').css('background', 'url("img/visual-bg.jpg")');
    Ember.$('.progress .meter').css('background', '#2daf64');
    Ember.$('.background-jazzy').addClass('bg-visual').show();
    Ember.$('.background-jazzy-2').addClass('bg-visual').hide();
    //Ember.run.next(this, this.setAllTheHeights);
    this.setAllTheHeights();
  }
});
