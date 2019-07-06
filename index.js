// FUNCTION EXERCISES
// 1: Write a function that can double a number.

const double = num => num * 2;

console.log('2 times 2 is', double(2));


// 2: Write a function that takes a number and raises it to a power.

const power = (num, power) => num ** power;

console.log('4 to the 2nd power is', power(4, 2));

// 3: Write a function that takes an array and doubles each number 
// in the array. Use your double function from exercise 1.

const doubleEach = arr => arr.map(double);

console.log('[1, 2] doubled is', doubleEach([1, 2]));

// 4: Write a function that takes numbers (use rest parameters) 
// and return the sum of the numbers.

const add = (...nums) => nums.reduce((a, b) => a + b);

console.log('The sum of 1, 2, and 3 is', add(1, 2, 3));

// 5: Write a function that takes an array of numbers and 
// returns an array of only the even numbers.

const evens = arr => arr.filter(num => num % 2 === 0);

console.log('The evens from [1, 2, 3, 4] are', evens([1, 2, 3, 4]));

// 6: Write a function that takes an array of numbers and 
// returns the first even number.

const firstEven = arr => arr.find(num => num % 2 === 0);

console.log('The first even in [1, 2, 3, 4] is', firstEven([1, 2, 3, 4]));

// 7: Write a function that takes an array of numbers and 
// returns true if all numbers are even, otherwise false.

const allEven = arr => evens(arr).length === arr.length;

console.log('Are [1, 2, 3, 4] all even?', allEven([1, 2, 3, 4]));
console.log('Are [2, 4] all even?', allEven([2, 4]));

// 8: Write a function that takes an array of numbers and 
// returns the sum of all even numbers.

const sumEvens = arr => evens(arr).reduce((a, b) => a + b);

console.log('The sum of all evens in [1, 2, 3, 4] is', sumEvens([1, 2, 3, 4]));

// 9: Write a function numberManipulator that takes a number 
// n and a function callback. Manipulate the n by passing it 
// to callback. Return the result.

const numberManipulator = (n, callback) => callback(n);

console.log('n is 5 and callback function is n => n * 2:', numberManipulator(5, n => n * 2));

// 10: Write a function repeater that takes a number repeat and 
// a function callback. Invoke the callback repeat times.

const repeater = (repeat, callback) => {
  for(let i = 0; i < repeat; i++) {
    callback();
  }
};

repeater(5, () => console.log('hi'));
