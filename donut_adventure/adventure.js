class Hero {
  constructor(name) {
    this.health = 0;
    this.weapons = {
                      sprinkleySpray: 5,
                      shugarShock: 10
                    };
    this.catchPhrases = ['i\'m fresher than day old pizza',
                         'you can\'t count my calories'];
  }
  talkSass() {

  }
  announceHealth() {

  }
  fight() {
    console.log('i\'m ready to rumble');
  }
}

const dougie = new Hero('Dougie the Donut');

console.log(dougie);
