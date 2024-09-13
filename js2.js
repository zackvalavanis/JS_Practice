//Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var hashes = [ 
  { name: 'chair', price: 100 }, 
  { name: 'pencil', price: 1 },
  { name: 'book', price: 4 }
]

i = 0;
new_array = []

while( i < hashes.length) { 
  var hash = hashes[i];
  if( hash.price > 5 ) {
    new_array.push(hash);
  }
  i += 1
}
console.log(new_array)