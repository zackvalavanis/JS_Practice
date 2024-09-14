// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song { 
  constructor(name, artist, duration) { 
    this.name = name; 
    this.artist = artist;
    this.duration = duration;
  }

  print() { 
    console.log(this.name);
    console.log(this.artist);
    console.log(this.duration);
  }
}

var song = new Song('beep', 'boop', 'bop');

song.print();
