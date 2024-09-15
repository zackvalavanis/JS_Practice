// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".


var arrays = ["volleyball", "basketball", "badmindton"]
var i = 0
var string = ""

while( i < arrays.length) { 
  var word = arrays[i];
  string += word;
  i++;
}

console.log(string);