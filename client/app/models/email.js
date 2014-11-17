import DS from 'ember-data';

export default DS.Model.extend({
  player: DS.attr('string'),
  email: DS.attr('string'),
  category: DS.attr('string'),
  name: DS.attr('string'),
  meaning: DS.attr('string')
});
