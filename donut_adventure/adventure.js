// our hero
class Hero {
  constructor(name) {
    this.health = 100;
    this.weapons = {
                      sprinkleySpray: 5,
                      shugarShock: 10
                    };
    this.catchPhrases = ['i\'m fresher than day old pizza',
                         'you can\'t count my calories'];
  }
  talkSass() {
    let arr = this.catchPhrases;
    let randomSass = arr.[Math.floor(Math.random() * arr.length)];
    return randomSass;

  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m ready to rumble');
  }
}

// instance of dougie the donut
const dougie = new Hero('Dougie the Donut');


// our enemy
class Enemy{
  constructor(name) {
    this.health = 100;
    this.weapons = {
                      pepperoniStars: 5,
                      cheeseGrease: 10
                    };
    this.catchPhrases = ['i\'m youtube famous',
                         'i\'m more dangerous than an uncovered sewer'];
  }
  talkSmack() {
    let arr = this.catchPhrases;
    let randomSmack = arr.[Math.floor(Math.random() * arr.length)];
    return randomSmack;
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m gonna flatten you like a slice of pepperoni!');
  }
}

const pizzaRat = new Enemy('Pizza Rat');

console.log(pizzaRat.talkSmack());
