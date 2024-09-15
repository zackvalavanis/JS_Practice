// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.


var word = 'bookkeeper';
var i = 0;
var letterFrequencies = {};

while( i < word.length ) { 
  var letter = word[i];
  if (letterFrequencies[letter] === undefined) { 
    letterFrequencies[letter] = 0;
  } 
  letterFrequencies[letter] += 1;
  i++;
}

console.log(letterFrequencies);