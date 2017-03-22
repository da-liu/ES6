var a = [1, 2, 3].filter(function(e) {
  return e < 3;
})
console.log(a);

var b = [
  { name: 'carrot',     type: 'veg' },
  { name: 'bok choi',   type: 'veg' },
  { name: 'orange',     type: 'fruit' },
  { name: 'watermelon', type: 'fruit' }
]
var c = b.filter(function(e) {
  return e.type === 'fruit';
})
console.log(c);

var d = b.filter(function(e) {
  return e.type === 'fruit';
}).map(function(e) {
  return e.name;
})
console.log(d);