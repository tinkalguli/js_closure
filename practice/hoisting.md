## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// undefined
```

```js
console.log(animal);
let animal = "monkey";
// Uncaught referenceError : Cannot access 'animal' before initialization
```

```js
console.log(animal);
const animal = "monkey";
// Uncaught ReferenceError : Cannot access 'animal' before initialization
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// alert "Hey Everyone"
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// alert "Hey Everyone"
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Uncaught TypeError : sayHello is not a function
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
// Uncaught ReferenceError : Cannot access 'sayHello' before initialization
```
