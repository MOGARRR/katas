const repeatNumbers = function(data) {
  let str = [];
  for (const array of data) {
    for (let i = 0; i < array[1]; i++) {
      str.push(array[0]);
    }
    str.push(',');
  }
  str.pop();
  return str.join('');
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);