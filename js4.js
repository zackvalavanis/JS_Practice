//Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var strings = ['a', 'man', 'a', 'plan', 'a', 'canal', 'panama'];
var i = 0;
var new_array = [];

while( i < strings.length ) { 
  var string = strings[i];
  if(string.length < 4) { 
    new_array.push(string);
  }
  i += 1;
};

console.log(new_array);