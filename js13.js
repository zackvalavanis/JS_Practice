// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

var arrays = [[1, 3], [8, 9], [2, 16]];
var hash = {};
var i = 0;

while( i < arrays.length ) { 
  var key = arrays[i][0];
  var value = arrays[i][1];
  hash[key] = value;
  i++;
}
console.log(hash);
