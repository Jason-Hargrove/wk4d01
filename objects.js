// hamster class
class Hamster {
  constructor(name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log('squeak squeak');
  }
  eatFood() {
    console.log('nibble nibble');
  }
  getPrice() {
    return this.price;
  }
}

// person class
class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hello. My name is ${this.name}`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}


// create a story with your person class

// 1.
const timmy = new Person('Timmy');

// 2.
const ageTimmy5 = () => {
  for (let i = 0; i < 5; i++) {
    timmy.ageUp();
  }
}
ageTimmy5();

// 3.
const timmyEat5 = () => {
  for (let i = 0; i < 5; i++) {
    timmy.eat();
  }
}
timmyEat5()

// 4.
const timmyWorkOut = () => {
  for (let i = 0; i < 5; i++) {
    timmy.exercise();
  }
}
timmyWorkOut();

// 6.
const gus = new Hamster('Gus');

// 7.
gus.owner = timmy;

// 8.
timmy.buyHamster(gus);

// 9.
const ageTimmy15 = () => {
  for (let i = 0; i < 15; i++) {
    timmy.ageUp();
  }
}
ageTimmy15();

// 10.
timmy.eat();
timmy.eat();

// 11.
timmy.exercise();
timmy.exercise();


console.log(`${timmy.name} and

 O-------O
(  '(X)'  )
C('')_('')

${gus.name}`);
