/*global DS.FirebaseAdapter*/
import DS from 'ember-data';


export default DS.FirebaseAdapter.extend({  
  firebase: new Firebase('https://decider.firebaseio.com/quiz')
});