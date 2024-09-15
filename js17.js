// Write a Plant class with attributes and reader/writer methods for name, size, and price. Then write a method that prints out the attributes in a single sentence.

class Plant { 
  constructor(name, size, price) { 
    this.name = name;
    this.size = size;
    this.price = price;
  }
  sentence() { 
    return  `The ${this.name} is roughly ${this.size} feet, and costs $${this.price}`;
  }
}

var plant = new Plant('daisy', 2, 500);

console.log(plant.sentence());

