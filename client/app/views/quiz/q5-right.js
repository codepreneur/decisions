import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
		$(document).foundation({
			dropdown: {
        // specify the class used for active dropdowns
        active_class: 'open'
      }
    });
		Ember.$(".f-dropdown li").on("click", function(){        
			if( Ember.$(this).parent().hasClass("open") ) { 
				Ember.$(this).parent().css("left", "-999999px");
				Ember.$(this).parent().removeClass("open");
			} else {

			}
		});
		Ember.$('.background-normal').css('background', 'url("img/start2-bg.jpg")');
		Ember.$('.background-jazzy').attr( 'class', 'background-jazzy' );
		Ember.$('.background-jazzy-2').attr( 'class', 'background-jazzy-2' );
		this.setAllTheHeights();

		var controller = this.get('controller');
		controller.set('age', null);
		Ember.$('input[name="gender"]:checked').prop('checked', false);
		Ember.$('input[name="rugby"]:checked').prop('checked', false);
		Ember.$('input[name="qx"]:checked').prop('checked', false);

		
	}
});
