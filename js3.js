// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var numbers = [2, 4, 5, 1, 8, 9, 7];
var i = 0;
var new_array = []

while( i < numbers.length ) { 
  var number = numbers[i];
  if(number % 2 == 0) { 
    new_array.push(number);
  }
  i += 1;
}

console.log(new_array)