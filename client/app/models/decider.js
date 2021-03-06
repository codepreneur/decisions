import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  seniority: DS.attr('string'),
  q11: DS.attr('string'),
  q12: DS.attr('string'),
  q13: DS.attr('string'),
  q14: DS.attr('string'),
  q15: DS.attr('string'),
  q21: DS.attr('string'),
  q22: DS.attr('string'),
  q32: DS.attr('string'),
  q33: DS.attr('string'),
  q33count: DS.attr('string'),
  q41: DS.attr('string'),
  q42: DS.attr('string'),
  q43: DS.attr('string'),
  q44: DS.attr('string'),
  q45: DS.attr('string'),
  q46: DS.attr('string'),
  q47: DS.attr('string'),
  q5: DS.attr('string'),
  category: DS.attr('string'),
  meaning: DS.attr('string'),
  image: DS.attr('string'),
  gender: DS.attr('string'),
  age: DS.attr('string'),
  qx: DS.attr('string'),
  involved: DS.attr('string'),
  twitter: DS.attr('string'),
  facebook: DS.attr('string'),
  completed: DS.attr('number'),
  facebookDescription: DS.attr('string'),
  facetOneMeaning: DS.attr('string'),
  facetTwoMeaning: DS.attr('string'),
  facetFourMeaning: DS.attr('string'),
  facetFiveMeaning: DS.attr('string'),
  facetSixMeaning: DS.attr('string')
});
