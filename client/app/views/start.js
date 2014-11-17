import Ember from 'ember';
import HeightView from './height';

export default HeightView.extend({
	didInsertElement: function() {
		Ember.$('.background-normal').css('background', 'url("img/start2-bg.jpg")');
    //var _this = this;
    this.setAllTheHeights();
    //setTimeout( function({ Ember.run.next(_this, _this.setAllTheHeights()); }), 1000);

    Ember.$('input[name="seniority"]:checked').prop('checked', false);

    
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
        });
    }
    preload([
        'img/q11.jpg',
        'img/q12.jpg',
        'img/q13.jpg',
        'img/q14.jpg',
        'img/q15.jpg',
        'img/bg-timer.gif',
        'img/visual-bg.jpg',
        'img/warning-bg.jpg',
        'img/tactics-bg.jpg',
    ]);
	}
});
