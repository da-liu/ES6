var users = [
  { name: 'Jack', age: 24 },
  { name: 'Jill', age: 23 },
  { name: 'Jack', age: 37 }
]

var user = users.find(function(e) {
  return e.name === 'Jack';
})

console.log(user);
