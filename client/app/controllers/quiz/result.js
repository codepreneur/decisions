import Ember from 'ember';

export default Ember.ArrayController.extend({

	needs: ['start', 'quiz/q5-left', 'quiz/q5-right'],
	queryParams: ['player'],
	player: null,
	fillResultsPage: function(){
		var player = this.get('player');
		var _this = this;
		console.log(player);

		this.store.find('decider', player).then(function(decider){
			_this.set('name', decider.get('name'));
			_this.set('category', decider.get('category'));
			_this.set('meaning', decider.get('meaning'));
			_this.set('image', decider.get('image'));
			_this.set('facebook', decider.get('facebook'));
			_this.set('facebookDescription', decider.get('facebookDescription'));
			_this.set('twitter', decider.get('twitter'));
			_this.set('facetOneMeaning', decider.get('facetOneMeaning'));
			_this.set('facetTwoMeaning', decider.get('facetTwoMeaning'));
			_this.set('facetThreeMeaning', decider.get('facetThreeMeaning'));
			_this.set('facetFourMeaning', decider.get('facetFourMeaning'));
			_this.set('facetFiveMeaning', decider.get('facetFiveMeaning'));
			_this.set('facetSixMeaning', decider.get('facetSixMeaning'));
		});
	}.observes('player'),
	name: Ember.computed.alias('controllers.quiz/q5-left.name') || Ember.computed.alias('controllers.quiz/q5-right.name'),
	category: Ember.computed.alias('controllers.quiz/q5-left.category') || Ember.computed.alias('controllers.quiz/q5-right.category'),  
	// category: function(){
	// 	console.log(this.get('controllers.quiz/q5.category'));
	// 	return this.get('controllers.quiz/q5.category');
	// }.property('controllers.quiz/q5.category'), 
	meaning: Ember.computed.alias('controllers.quiz/q5-left.meaning') || Ember.computed.alias('controllers.quiz/q5-right.meaning'), 
	image: Ember.computed.alias('controllers.quiz/q5-left.image') || Ember.computed.alias('controllers.quiz/q5-right.image'), 
	facebookDescription: Ember.computed.alias('controllers.quiz/q5-left.facebookDescription') || Ember.computed.alias('controllers.quiz/q5-right.facebookDescription'), 
	facebook: Ember.computed.alias('controllers.quiz/q5-left.facebook') || Ember.computed.alias('controllers.quiz/q5-right.facebook'), 
	twitter: Ember.computed.alias('controllers.quiz/q5-left.twitter') || Ember.computed.alias('controllers.quiz/q5-right.twitter'), 
	facetOneMeaning: Ember.computed.alias('controllers.quiz/q5-left.facetOneMeaning') || Ember.computed.alias('controllers.quiz/q5-right.facetOneMeaning'), 
	facetTwoMeaning: Ember.computed.alias('controllers.quiz/q5-left.facetTwoMeaning') || Ember.computed.alias('controllers.quiz/q5-right.facetTwoMeaning'), 
	facetThreeMeaning: Ember.computed.alias('controllers.quiz/q5-left.facetThreeMeaning') || Ember.computed.alias('controllers.quiz/q5-right.facetThreeMeaning'), 
	facetFourMeaning: Ember.computed.alias('controllers.quiz/q5-left.facetFourMeaning') || Ember.computed.alias('controllers.quiz/q5-right.facetFourMeaning'), 
	facetFiveMeaning: Ember.computed.alias('controllers.quiz/q5-left.facetFiveMeaning') || Ember.computed.alias('controllers.quiz/q5-right.facetFiveMeaning'), 
	facetSixMeaning: Ember.computed.alias('controllers.quiz/q5-left.facetSixMeaning') || Ember.computed.alias('controllers.quiz/q5-right.facetSixMeaning'), 

	actions: {
		updateResult: function(){
			this.transitionToRoute('quiz.result2', {queryParams: {player: this.get('player')}});

		}
	}





});
