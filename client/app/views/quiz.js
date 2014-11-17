import Ember from 'ember';
import HeightView from './height';

export default HeightView.extend({
  didInsertElement: function() {
    Ember.$('.background-normal').css('background', 'url("img/start2-bg.png")');
    //var _this = this;
    this.setAllTheHeights();
    //setTimeout( function({ Ember.run.next(_this, _this.setAllTheHeights()); }), 1000);
  }
});