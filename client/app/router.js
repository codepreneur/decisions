import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('start');
  this.resource('quiz', function() {
  	this.route('q1', { path: '1' });
  	this.route('q1-1');
    this.route('q1-2-up');
  	this.route('q1-2-down');
    this.route('q1-3-up');
  	this.route('q1-3-down');
    this.route('q1-4-up');
  	this.route('q1-4-down');
    this.route('q1-5-up');
  	this.route('q1-5-down');
    this.route('q2-up', { path: '2-up' });
    this.route('q2-down', { path: '2-down' });
    this.route('q2-1');
    this.route('q2-2');
    this.route('q3', { path: '3' });
    this.route('q3-1');
    this.route('q3-2');
    this.route('q3-3');
    this.route('q4', { path: '4' });
    this.route('q4-1');
    this.route('q4-2-left');
    this.route('q4-2-right');
    this.route('q4-3-left');
    this.route('q4-3-right');
    this.route('q4-4-left');
    this.route('q4-4-right');
    this.route('q4-5');
    this.route('q4-6-left');
    this.route('q4-6-right');
    this.route('q4-7-left');
    this.route('q4-7-right');
    this.route('q5-left', { path: '5-left' });
    this.route('q5-right', { path: '5-right' });
    this.route('result');
    this.route('result2');
  });
  
  this.route('quiz/q1-3-up');
  this.route('quiz/q1-4-up');
  this.route('quiz/q1-5-up');
  this.route('quiz/q2-up');
});

export default Router;
