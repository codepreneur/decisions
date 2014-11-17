import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['start','application'],
	setupProgress: function(){
		this.set('controllers.application.style', '');
		this.set('controllers.application.class', '');
		this.set('controllers.application.percent', 59);
	}.on('init'),
	clickedPeople: [], // function(){ return []; }.property(),
	clickedPeopleCount: Ember.computed.alias('clickedPeople.length'),
	
	actions: {
		updateQ33: function(val){
			
			var decider = this.get('controllers.start.deciderModel');
			decider.set('q33', val);
			decider.set('q33count', this.clickedPeople.length);
			decider.save();

		},
		clickPerson: function(personName) {
			console.log('personName',personName);
			if (this.get('clickedPeople').indexOf(personName) === -1) {
				this.get('clickedPeople').pushObject(personName);
			}

			var personInfo;
			switch (personName) {
				case 'youth-team-coach':
				  personInfo = '"Very skilful, sometimes over-confident"';
				  break;
				case 'player-himself':
				  personInfo = '"I can’t wait, I’m definitely ready to play at a higher level"';
				  break;
				case 'youth-team-captain':
				  personInfo = '"Live-wire, creative, can be selfish with the ball"';
				  break;
				case 'club-doctor':
				  personInfo = '"Serious shoulder injury aged 12, no notable injuries since"';
				  break;
				case 'club-fitness-coach':
				  personInfo = '"Fittest player in the squad, bottom 10% for explosive leg strength"';
				  break;   

			}

			this.set('clickedPersonInfo', personInfo);
		}
	}
});
