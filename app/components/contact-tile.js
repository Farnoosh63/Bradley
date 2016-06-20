import Ember from 'ember';

export default Ember.Component.extend({
  addItemFormSubmit: false,
  actions: {
    saveContact(){
     var params= {
       name: this.get('name'),
       email: this.get('email'),
       phone: this.get('phone'),
       message: this.get('message')
     };
     this.set("addItemFormSubmit", true);
     this.sendAction('savedContact', params);
   }
 }
});
