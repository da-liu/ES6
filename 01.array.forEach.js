[1, 3, 9].forEach(function(e, i) {
  console.log(e, i);
})


// Side effects
var sum = 0;

function add(n) {
  sum += n;
}

[1, 3, 9].forEach(add)
console.log(sum);
