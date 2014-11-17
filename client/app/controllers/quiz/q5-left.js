import Ember from 'ember';

export default Ember.Controller.extend(Ember.Validations.Mixin, {

	emailModel: null,

	name: null,
	category: null,
  meaning: null,
  image: null,
  twitter: null,
  facebook: null,
  facebookDescription: null,
  involved: null,
  involvedRugby: null,
  facetOneMeaning: null,
  facetTwoMeaning: null,
  facetFourMeaning: null,
  facetFiveMeaning: null,
  facetSixMeaning: null,
  needs: ['start'],
  player: Ember.computed.alias('controllers.start.deciderModel.id'),
  email: Ember.computed.alias('controllers.start.deciderModel.email'),

  sports: ['Football', 'Cricket', 'Swimming', 'Hockey', 'Tennis', 'Other'],
  selectedSport: null,
  players: ['Please select a Position','Prop', 'Hooker', 'Second Row', 'Flanker',
  'Number 8', 'Scrum Half', 'Fly Half', 'Centre', 'Winger', 'Full Back'],
  selectedPlayer: null,
  levels: ['Occasional', 'Amateur Club', 'Regional', 'Professional'],
  selectedLevel: null,
  professionals: ['Prop', 'Hooker', 'Second Row', 'Flanker',
  'Number 8', 'Scrum Half', 'Fly Half', 'Centre', 'Winger', 'Full Back'],
  selectedProfessional: null,
  coaches: ['Grassroots', 'Level One', 'QBE Coaching Club', 'National'],
  selectedCoach: null,

  isRugbyInvolved: function() {
    if (this.get('involved') === 'involved-rugby') {
      return true;
    }
    return false;
  }.property('involved'),

  isNotRugbyInvolved: function() {
    if (this.get('involved') === 'not-involved-rugby') {
      this.set('involvedRugby', null);
      return true;
    }
    return false;
  }.property('involved'),

  isCoach: function() {
    if (this.get('involvedRugby') === 'coach') {
      return true;
    }
    return false;
  }.property('involvedRugby'),

  isProfessional: function() {
    if (this.get('involvedRugby') === 'professional') {
      return true;
    }
    return false;
  }.property('involvedRugby'),

  isPlayer: function() {
    if (this.get('involvedRugby') === 'player') {
      return true;
    }
    return false;
  }.property('involvedRugby'),

  isPlayerAndSelected: function() {
  	if (this.get('selectedPlayer') && 
  		this.get('selectedPlayer') !== this.get('players')[0] &&
  		this.get('involvedRugby') === 'player') {
      return true;
    }
    return false;
  }.property('selectedPlayer', 'involvedRugby'),

  actions: {
    updateQ5: function(val){
    	var _this = this;
      var selectedInvolved = null;
      if (this.get('involved') === 'not-involved-sport') {
        selectedInvolved = this.get('involved');
      } else if (this.get('involved') === 'not-involved-rugby'){
        selectedInvolved = this.get('selectedSport');
      } else if (this.get('involved') === 'involved-rugby') {
        switch (this.get('involvedRugby')) {
          case 'player':
            selectedInvolved = this.get('selectedPlayer') + " " + this.get('selectedLevel');
            break;
          case 'professional':
            selectedInvolved = this.get('selectedProfessional')
            break;
          case 'coach':
            selectedInvolved = this.get('selectedCoach');
            break;
          case 'fan':
            selectedInvolved = 'fan';
            break;
          case 'referee':
            selectedInvolved = 'referee';
            break;
        }
      } else {
        console.log('returning false');
        return false;
      }

      var decider = this.get('controllers.start.deciderModel');
      decider.set('q5', val);
      decider.set('age', this.get('age'));
      decider.set('gender', this.get('gender'));
      decider.set('qx', this.get('qx'));
      decider.set('involved', selectedInvolved);
      decider.save();

      var q11 = decider.get('q11') === "air" ? 1 : 0;
      var q12 = decider.get('q12') === "ground" ? 1 : 0;
      var q13 = decider.get('q13') === "air" ? 1 : 0;
      var q14 = decider.get('q14') === "ground" ? 1 : 0;
      var q15 = decider.get('q15') === "air" ? 1 : 0;
      var q21 = decider.get('q21') === "10" ? 1 : 0;
      var q22 = decider.get('q22');
      var q22count = decider.get('q22count') === 1 ? 1 : 0;
      var q32 = decider.get('q32') === "corner" ? 1 : 0;
      var q33 = decider.get('q33');
      var q33count = parseInt(decider.get('q33count'));
      var q41 = decider.get('q41') === "right" ? 1 : 0;
      var q42 = decider.get('q42') === "right" ? 1 : 0;
      var q43 = decider.get('q43') === "left" ? 1 : 0;
      var q44 = decider.get('q44');
      var q45 = decider.get('q45') === "right" ? 1 : 0;
      var q46 = decider.get('q46') === "right" ? 1 : 0;
      var q47 = decider.get('q47') === "left" ? 1 : 0;
      var q5 = decider.get('q5') === "coin" ? 1 : 0;
      var qx = decider.get('qx') === "yes" ? 1 : 0;

		  // fixed with }, 0)
			var q1 = [q11,q12,q13,q14,q15].filter(Number).reduce(function(a,b){return a + b;}, 0) >= 3 ? 1 : 0;
			var q4 = [q41,q42,q43,q45,q46,q47].filter(Number).reduce(function(a,b){return a + b;}, 0) >= 3 ? 1 : 0;



		  // Risk-taking or Loss Avoidance
		  function facetOne() {
		  	if (q32 === 1 && q5 === 1) {
          return "A";
        } else if ((q32 === 0 && q5 === 1) || (q32 === 1 && q5 === 0)) {
          return "B";
        } else if (q32 === 0 && q5 === 0) {
          return "C";
        }
      }

		  // Prioritisation: Speed vs Accuracy
		  function facetTwo() {
		  	if (q1 === 0 && q21 === 0) {
		  		return "D";
		  	} else if (q1 === 0 && q21 === 1) {
		  		return "E";
		  	} else if (q1 === 1 && q21 === 0) {
		  		return "F";
		  	} else if (q1 === 1 && q21 === 1) {
		  		return "G";
		  	}
		  }

			// Consulting and Infromation use
      function facetThree() {
       if (q33count === 0) {
        return "H";
      } else if (q33count === 1 || q33count === 2) {
        return "I";
      } else {
        return "J";
      }
    }

		  // Pressure sensitive or responsive
		  function facetFour() {
		  	if(q4 === 0){
		  		return "K";
		  	} else {
		  		return "L";
		  	}
		  }

		  // Flexibility
		  function facetFive() {
		  	if (q22count === 0) {
		  		return "M";
		  	} else {
		  		return "N";
		  	}
		  }

		  // Openness to new experiences
		  function facetSix() {
		  	if (qx === 1) {
		  		return "O";
		  	} else if (qx === 0) {
		  		return "P";
		  	}
		  }

		  var classification = {
		  	"A": {
		  		"D": {
		  			"H": "INSTINCTIVE",
		  			"I": "MAVERICK",
		  			"J": "GAMBLER"
		  		},
		  		"E": {
		  			"H": "INSTINCTIVE",
		  			"I": "GAMBLER",
		  			"J": "TACTICIAN"
		  		},
		  		"F": {
		  			"H": "INSTINCTIVE",
		  			"I": "GAMBLER",
		  			"J": "TACTICIAN"
		  		},
		  		"G": {
		  			"H": "MAVERICK",
		  			"I": "TACTICIAN",
		  			"J": "PLANNER"
		  		}
		  	},
		  	"B": {
		  		"D": {
		  			"H": "INSTINCTIVE",
		  			"I": "MAVERICK",
		  			"J": "GAMBLER"
		  		},
		  		"E": {
		  			"H": "MAVERICK",
		  			"I": "PLANNER",
		  			"J": "CONSCIENTIOUS"
		  		},
		  		"F": {
		  			"H": "MAVERICK",
		  			"I": "PLANNER",
		  			"J": "CONSCIENTIOUS"
		  		},
		  		"G": {
		  			"H": "MAVERICK",
		  			"I": "TACTICIAN",
		  			"J": "CONSCIENTIOUS"
		  		}
		  	},
		  	"C": {
		  		"D": {
		  			"H": "INSTINCTIVE",
		  			"I": "INSTINCTIVE",
		  			"J": "PLANNER"
		  		},
		  		"E": {
		  			"H": "MAVERICK",
		  			"I": "CONSCIENTIOUS",
		  			"J": "CONSCIENTIOUS"
		  		},
		  		"F": {
		  			"H": "MAVERICK",
		  			"I": "CONSCIENTIOUS",
		  			"J": "CONSERVATIVE"
		  		},
		  		"G": {
		  			"H": "TACTICIAN",
		  			"I": "CONSERVATIVE",
		  			"J": "CONSERVATIVE"
		  		}
		  	}

		  }

		  var letters = {
		  	"A": "You look for opportunities to maximize potential gain, and are willing to take risks to achieve this. Whilst you can win big, you also run the risk of losing big too.",
		  	"B": "You adopt a balanced approach when it comes to taking opportunities. Whilst at times you will take risks to ‘win big’, sometimes you decide to protect what you have rather than risk losing out completely.",
		  	"C": "You are loss adverse and prefer to protect the status quo. This means you have a tendency to avoid taking risks when making choices, so although you rarely lose out completely you may not always obtain the maximum reward from a situation.",
		  	"D": "Your answers suggest that you prioritize speed over accuracy. This was consistent for simple tasks and more difficult problems.  This is good for competitive situations where speed is of the essence, but this may mean you make more errors.",
		  	"E": "Your answers suggest that you prioritize speed over accuracy for simple tasks, but take longer and reflect on more difficult problems. This was consistent for simple tasks and more difficult problems.  This suggests you can adapt your style depending on the task required, which is a useful skill.",
		  	"F": "Your answers suggest that you prioritize accuracy over speed for simple tasks, but are quicker for more difficult problems. This suggests you avoid errors when tasks are simple but are more willing to risk an incorrect answer in a difficult situation.",
		  	"G": "Your answers suggest that you prioritize accuracy over speed. This was consistent for simple tasks and more difficult problems. You are unlikely to make an error, which is good for tasks when there are large negative consequences associated with mistakes. On occasions you may miss out if others are competing to respond quickly.",
		  	"H": "When placed in a leadership role and asked to make a complex decision, you trusted your opinion and preferred to make a decision independently and quickly. This may be useful under time pressure, but could mean that your decisions are not always fully informed.",
		  	"I": "When placed in a leadership role and asked to make a complex decision, you preferred to consult information available to you but were still able to make a decision independently and quickly.",
		  	"J": "When placed in a leadership role and asked to make a complex decision, you were thorough and preferred to review all information available. This means that your decisions are likely to be fully informed, however, this can sometimes be problematic when time is limited.",
		  	"K": "When tasks became more time pressured, you tended to slow down. This suggests that the pressure made you more sensitive to making mistakes. If there are important consequences depending on a quick decision, successful athletes seem to be able to maintain a fast reaction time even under increased pressure (e.g., following mistakes).",
		  	"L": "When tasks became more pressured, you were able to maintain or even improve your speed of responses. This suggests that you were resilient in the face of the increased pressure. If there are important consequences depending on a quick decision, successful athletes seem to be able to maintain a fast reaction time even under increased pressure (e.g., following mistakes).",
		  	"M": "When new information was presented, you demonstrated a willingness to reconsider you decision. Having confidence in choices you’ve made can be important when requiring long-term commitment, however, it is useful to be able to refine or disengage from poor decisions, especially in the light of new information.",
		  	"N": "When new information was presented, you demonstrated a resistance to changing your original decision. Standing by your choices is useful especially when tasks require long-term commitment, however, we have to be careful to disengage from poor decisions especially in the light of new information.",
		  	"O": "During the test, when you were offered the opportunity to do something new, you took it. Being open to opportunities and seeing them as exciting rather than threatening may push you out of your comfort zone but is also likely to lead to useful experiences.",
		  	"P": "During the test, when you were offered the opportunity to do something new, you declined. Whilst this may protect you from some difficult situations, being open to opportunities and seeing them as exciting rather than threatening may lead to useful experiences."
		  }

		  var description = {
		  	"INSTINCTIVE": "Instinctive decision makers make fast and intuitive choices. You are able to quickly identify a preferred outcome, and are willing to take a chance rather than risk missing out on an opportunity. Instinctive decision makers prefer to have sole control over decisions and will seek to make them alone if possible. A potential drawback to this is you may miss information that challenges your first opinion, and can fail to consider the views of others in your team.",
		  	"MAVERICK": "Mavericks are the most diverse and unpredictable type of decision maker. Whilst you tend to have a preference for making quick decisions, this is not always the case. You are autocratic and like to make big decisions by yourself – taking responsibility comes naturally to you and you are likely to gain from quickly taking advantage of opportunities. A potential drawback is that you can be difficult to work with, as others are unclear how you will react, and may jump into complex situations too quickly.",
		  	"GAMBLER": "When it comes to decision-making, a ‘gambler’ looks for opportunities for gains and rewards. Where information is available you will use this to assess the odds of success, taking chances on simple decisions but often adopting a more measured approach to complex problems. ‘Gambler’ decision-makers are likely to function well in environments that allow opportunities for intuition, and where the consequences of mistakes are not too high.",
		  	"TACTICIAN": "Tacticians are reflective and calculated. You demonstrate a preference for assessing problems carefully, and are likely to weigh up the potential value and risk of any choice. Tacticians are therefore good at identifying genuine opportunities for gain but equally will apply good judgment to avoid losses.  At times, however, this approach may not always be viable, for example when time is pressured. Such situations may unsettle the tactician.",
		  	"PLANNER": "When it comes to decision making, planners tend to have a neutral view of risk. In complex situations you prefer to be loss adverse, although you will take more risky opportunities if you have had a chance to consider the available options. Planners like to be thorough and well-informed; this is useful in situations where you can lead or draw from expertise across a team, but may not work well in fast-paced environments or when time is critical.",
		  	"CONSCIENTIOUS": "Conscientious decision makers adopt a thorough and rigorous evaluative approach to making choices. Whilst erring towards risk avoidance, conscientious decision makers will seek opportunities for gain if they have been able to review available information carefully. A conscientious decision maker can be relied upon to follow processes accurately, even for simple tasks. A potential drawback is that this can be slow and CDMs may feel uncomfortable in ambiguous or time-pressured situations.",
		  	"CONSERVATIVE": "Conservative decision makers avoid losses and are very careful to protect themselves and their organization/team. Making a safe and careful decision is most important to these individuals. Conservative decision makers prefer situations where they can evaluate all options and draw from as much information as possible to inform choices. A potentially drawback is that this can be slow and CDMs may feel uncomfortable in ambiguous or time-pressured situations."
		  }


		  var category = classification[facetOne()][facetTwo()][facetThree()];
		  var meaning = description[category];
		  var image = 'img/' + category + '.jpg';
		  var twitter = "http://twitter.com/home?status=I%20am%20a " + category + " Find%20out%20what%20decision%20maker%20you%20are%20by%20taking%20the%20@QBERugby%20Decision%20Breakdown%20https://decisions.qberugby.com";
		  var facebook = "https://www.facebook.com/sharer/sharer.php?u=https://decisions.qberugby.com";
		  var facebookDescription = "I%20am%20a " + category + " Find%20out%20what%20decision%20maker%20you%20are%20by%20taking%20the%20@QBERugby%20Decision%20Breakdown%20https://decisions.qberugby.com";
		  var facetOneMeaning = letters[facetOne()];
		  var facetTwoMeaning = letters[facetTwo()];
		  var facetThreeMeaning = letters[facetThree()];

		  var facetFourMeaning = letters[facetFour()];
		  var facetFiveMeaning = letters[facetFive()];
		  var facetSixMeaning = letters[facetSix()];


		  decider.set('category', category);
		  decider.set('meaning', meaning);
		  decider.set('image', image);
		  decider.set('twitter', twitter);
		  decider.set('facebook', facebook);
		  decider.set('facebookDescription', facebookDescription);
		  
		  decider.set('facetOneMeaning', facetOneMeaning);
		  decider.set('facetTwoMeaning', facetTwoMeaning);
		  decider.set('facetThreeMeaning', facetThreeMeaning);

		  decider.set('facetFourMeaning', facetFourMeaning);
		  decider.set('facetFiveMeaning', facetFiveMeaning);
      decider.set('facetSixMeaning', facetSixMeaning);
      decider.set('completed', 1);
      decider.save();

      this.set('name', decider.get('name'));
      this.set('category', category);
      this.set('meaning', meaning);
      this.set('image', image);
      this.set('twitter', twitter);
      this.set('facebook', facebook);
      this.set('facebookDescription', facebookDescription);
      this.set('facetOneMeaning', facetOneMeaning);
      this.set('facetTwoMeaning', facetTwoMeaning);
      this.set('facetThreeMeaning', facetThreeMeaning);
      this.set('facetFourMeaning', facetFourMeaning);
      this.set('facetFiveMeaning', facetFiveMeaning);
      this.set('facetSixMeaning', facetSixMeaning);

      // this.set('emailModel', this.store.createRecord('email',{
      // 	player: _this.get('player'),
      // 	email: _this.get('email'),
      // 	category: _this.get('category')
      // }));

			var newEmail = this.store.createRecord('email',{
				player: _this.get('player'),
      	email: _this.get('email'),
      	category: _this.get('category'),
      	name: _this.get('name'),
      	meaning: _this.get('meaning')
			}).save();

      // this.get('emailModel').save();

      console.log(newEmail);


      this.transitionToRoute('quiz.result', {queryParams: {player: this.get('player')}});


    }
  },
  validations: {
    age: {
     presence: true,
     numericality: true
   },
   gender: {
     presence: true
   },
   qx: {
     presence: true
   }
 }
});
