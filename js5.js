// Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var hashes = [ 
  { name: 'chair', price: 100 }, 
  { name: 'pencil', price: 1 }, 
  { name: 'book', price: 4 }
]

var new_array = []

hashes.forEach( function(item) { 
  if(item.name.length <6 ){ 
    new_array.push(item);
  }
});

console.log(new_array)