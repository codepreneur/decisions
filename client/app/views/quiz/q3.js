import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
    Ember.$('.background-normal').css('background', 'url("img/tactics-bg.jpg")');
		// Ember.$('body>.ember-view>.liquid-container').css('background', 'url("img/tactics-bg.png")');
		Ember.$('.progress .meter').css('background', '#14a09b');
		// Ember.$('body > .ember-view').removeClass('bg-warning');
		// Ember.$('body > .ember-view > .liquid-container').removeClass('bg-warning-2');

    Ember.$('.background-jazzy').addClass('bg-tactics').show();
    Ember.$('.background-jazzy-2').addClass('bg-tactics-2').show();

    this.setAllTheHeights();
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
        });
    }
    preload([
        'img/q41.jpg',
        'img/q42.jpg',
        'img/q43.jpg',
        'img/q44.jpg',
        'img/q45.jpg',
        'img/q46.jpg',
    ]);
  }
});
