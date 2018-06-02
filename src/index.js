/* let allows you to declare variables that are limited in scope to the block,
 statement, or expression on which it is used. This is unlike the var keyword, 
 which defines a variable globally, or locally to an entire function regardless 
 of block scope.*/

 {
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
 }

console.log(x);
// expected output: ReferenceError: x is not defined

/* Constants are block-scoped, much like variables defined using the let 
statement. The value of a constant cannot change through re-assignment, and it
 can't be redeclared.*/

 const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42
