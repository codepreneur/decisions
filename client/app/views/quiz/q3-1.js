import Ember from 'ember';
import HeightView from '../height';

export default HeightView.extend({
	didInsertElement: function(){
		Ember.$('.background-normal').css('background', 'url("img/tactics-bg.jpg")');
		Ember.$('.progress .meter').css('background', '#14a09b');
    Ember.$('.background-jazzy, .background-jazzy-2');

    this.setAllTheHeights();
    var video = this.$('video')[0];
    var controller = this.get('controller');
    this.$(video).on('ended', function(){
      Ember.run(function(){
        controller.set('videoEnded',true);
        //controller.transitionToRoute('quiz.q3-2');
      });
    });


		// var myFilename = "video.mp4";
		// var myUrl = cordova.file.applicationDirectory + "www/videos/" + myFilename;
		// var fileTransfer = new FileTransfer();
		// var filePath = cordova.file.dataDirectory + myFilename;
		// console.log(myUrl);
		// console.log(encodeURI(myUrl));
		// console.log(filePath);

		// fileTransfer.download(encodeURI(myUrl), filePath, (function(entry) {
		  
		//   var res = "download complete:\n";
		//   res += "fullPath: " + entry.fullPath + "\n";
		//   res += "localURL: " + entry.localURL + "\n";
		//   res += "toNativeURL: " + entry.toNativeURL() + "\n";
		//   console.log(res += "nativeURL: " + entry.nativeURL + "\n");
		   
		//   var vid = document.getElementById("video2");
		//   vid.src = entry.nativeURL;
		//   vid.loop = true;
  //   	vid.load();
		// 	vid.play();

		// }), (function(error) {
		//   alert("Video download error: source " + error.source);
		//   alert("Video download error: target " + error.target);
		// }), true, {
		//   headers: {
		//     Authorization: "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
		//   }
		// });    


  }
});
