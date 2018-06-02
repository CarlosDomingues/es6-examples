"use strict";

var numbers = [1, 2, 3];

var double = function double(num) {
  return 2 * num;
};

var doubleNumArray = numbers.map(double);

console.log(doubleNumArray);
