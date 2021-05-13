// /*
// dont forget to make your git repo don't do this in repl.it
// for help purposes only
// Hamster
// attributes: line 20
// owner - string, initially set as an empty string line 21
// name - string, set the name from parameter in constructor method line 22 and the param in line 20
// price - integer, set as 15. line 23
// methods: below line 25
// wheelRun() - log "squeak squeak" line 26
// eatFood() - log "nibble nibble" line 29
// getPrice() - return the price line 32
// */
class Hamster {
  constructor(name) { // name is the parameter
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun(){
    console.log('squeak squeak');
  }
  eatFood(){
    console.log('nibble nibble');
  }
  getPrice(){
    return this.price;
  }
}
const Gus = new Hamster('Gus'); // <=== Argument is GUs
const somevar = 'somevalue';


class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = '';
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge()  {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet()  {
    console.log(this.name);
  }
  eat() {
    return this.name;
  }
  exercise() {
    return this.name;
  }
  buyHamster(hamster) {
    return this.name;
  }
}


console.log('You suck!');




/*
dont forget to make your git repo don't do this in repl.it
for help purposes only
Hamster
attributes: line 20
owner - string, initially set as an empty string line 21
name - string, set the name from parameter in constructor method line 22 and the param in line 20
price - integer, set as 15. line 23
methods: below line 25
wheelRun() - log "squeak squeak" line 26
eatFood() - log "nibble nibble" line 29
getPrice() - return the price line 32
*/
