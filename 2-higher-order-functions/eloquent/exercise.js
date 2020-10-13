// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

arrays.reduce((accumulator, currentValue) =>
 accumulator.concat(currentValue), []);

// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

function loop(value, condition, change, takeAction) {
  while (condition(value)) {
    takeAction(value);
    value = change(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  let resultedArray = [];
  for (let element of array) {
      if (test(element)) resultedArray.push(element);
  }
  return resultedArray.length == array.length;
}

function every(array, test) {
  let resultedArray = [];

  array.map(value => [value]).forEach(element => {
    if (element.some(actualValue => test(actualValue))) {
      resultedArray.push(element[0]);
    }
  });

  return resultedArray.length == array.length;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  let charArray = text.split('');
  let directionCount = {
    rtl : 0,
    ltr : 0,
    ttb : 0
  }
  charArray.forEach(char => {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return char.codePointAt() >= from && char.codePointAt() < to;
      })) {
        directionCount[script.direction] += 1;
      }
    }
  });
  let finalDirection = Object.values(directionCount)
  .reduce((a, c) => a > c ? a : c);
  
  return Object.keys(directionCount)[Object.values(directionCount).indexOf(finalDirection)];
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
