// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person {
  constructor(name, age) { 
    this.name = name;
    this.age = age;
  }

  cap () { 
    return this.name.toUpperCase();
  }
}

var people = new Person('steve', 25);

console.log(people.cap());