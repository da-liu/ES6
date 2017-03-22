var res = [1, 2, 3].reduce(function(sum, e) {
  return sum + e;
}, 0)

console.log(res);

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, desk) {
  if (desk.type === 'sitting') prev.sitting += 1;
  if (desk.type === 'standing') prev.standing += 1;
  return prev;
}, { sitting: 0, standing: 0 });
console.log(deskTypes);

function unique(array) {
  return array.reduce(function(prev, n) {
      if(!prev.includes(n)) prev.push(n);
      return prev;
  }, [])
}
console.log(unique([1, 1, 2, 2, 3]))