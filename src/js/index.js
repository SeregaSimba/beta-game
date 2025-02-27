class Animal {
  _name = "";
  _type = "";

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString(_name, _type) {
    return `${this.name} is a ${this.type}`;
  }
}
const dog = new Animal("Max", "dog");
console.log(dog.toString());
console.log(dog.name);
console.log(dog.type);
console.log((dog.name = "GAu GAu"));
