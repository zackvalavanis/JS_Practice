// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle { 
  constructor(width, height) { 
    this.width = width;
    this.height = height;
  }

  area() { 
    console.log(this.width * this.height);
  }
}

var areas = new Rectangle(2, 3);

areas.area()