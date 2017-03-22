var a = [1, 3, 9];
var b = a.map(function(e) {
  return e * 2;
})
console.log(b);

//////////////////////
// Plucking values

var c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

d = c.map(function(e) {
  return e[0];
})
console.log(d);