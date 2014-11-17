import Ember from 'ember';

export default Ember.Controller.extend(Ember.Validations.Mixin, {

  deciderModel: null,

	actions: {
		addDecider: function(){

			this.set('deciderModel', this.store.createRecord('decider', {
				email: this.get('email'),
				name: this.get('name'),
				seniority: this.get('seniority')
			}));

			this.get('deciderModel').save();

			console.log(this.deciderModel);
			console.log(this.deciderModel.id);

			this.set('name', '');
			this.set('email', '');
			this.transitionToRoute('quiz.q1');

		}
	},
	validations: {
		name: {
			presence: true
		},
		email: {
			presence: true,
			format: { with: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, allowBlank: false, message: 'please enter a valid email'  }
		},
		seniority: {
			presence: true
		}
	}
});
