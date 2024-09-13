// Start with an array of numbers and create a new array with only the odd numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var arrays = [2, 4, 5, 1, 8, 9, 7];
var new_array = []

arrays.forEach( function(number) { 
  if(number % 2 != 0) { 
    new_array.push(number);
  }
});

console.log(new_array);