// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

arrays.reduce((a, c) => a.concat(c), []);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

function loop(n, condition, change, fn) {
  while (condition(n)) {
    fn(n);
    n = change(n);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  let arr = [];
  for (element of array) {
      if (test(element)) arr.push(element);
  }
  return arr.length == array.length;
}

function every(array, test) {
  let arr = [];
  let elementsArray = [...array].map(e => [e]);
  elementsArray.forEach(e => {
    if (e.some(a => test(a))) arr.push(e[0]);
  });
  return arr.length == array.length;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
