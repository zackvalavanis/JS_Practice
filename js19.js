// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

var arrays = ["a", "b", "c", "d"];
var index1 = 0;

var newArray = [];

while( index1 < arrays.length) {
  var index2 = 0;
  while (index2 < arrays.length ){ 
    newArray.push( arrays[index1] + arrays[index2] );
  }
  index1 += 1;
  index2 += 1;
}
console.log(newArray);