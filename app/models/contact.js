import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  message: DS.attr(),
});
