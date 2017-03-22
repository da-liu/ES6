var users = [
  { name: 'Jack', age: 19 },
  { name: 'Jill', age: 17 },
  { name: 'John', age: 24 }
]

// every == must all return true
var allAdults = users.every(function(user) {
  return user.age >= 18;
})
console.log('allAdults:', allAdults);

// form validation
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field('euler');
var password = new Field('pie');
var birthday = new Field('4/15/1707');

var fields = [username, password, birthday];
var formIsValid = fields.every(function(field) {
  return field.validate();
})
console.log('formIsValid:', formIsValid);

// some == at least one returns true
var someYouth = users.some(function(user) {
  return user.age < 18;
})
console.log('someYouth:', someYouth);
