import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function() {
		Ember.$('.background-normal').css('background', 'url("img/start2-bg.jpg")');

		
		var facebookTag=document.createElement('meta');
		facebookTag.property = "og:description";
		facebookTag.content = this.get('controller.facebookDescription');
		console.log(this.get('controller.facebookDescription'));
		document.getElementsByTagName('head')[0].appendChild(facebookTag);

    this.setAllTheHeights();
  }
});
