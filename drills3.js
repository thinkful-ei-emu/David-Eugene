/* eslint-disable no-console */
'use strict';
const loaf = {
  flour:300,
  water:210,
  hydration:function(){
    return this.flour/this.water *100;
  }
};
console.log(loaf);
console.log(loaf.hydration());
//

const fooObject = {
  foo: 'potato',
  bar: 23,
  fum: 15,
  quux: 'Michael Jordan',
  spam: 'foobar',
};

for(let key in fooObject) {
  console.log(`${key} : ${fooObject[key]}`);
}
///
const menu ={
  meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(menu.meals[3]);

class person{
  constructor(Name, JobTitle){
    this.name=Name;
    this.jobTitle = JobTitle;
  }
}
let people=[new person('David','Programmer'), new person('eugene','auditor'),new person('Devin','sales Rep')];

for(let persons in people){
  console.log(people[persons]);
}


people[2].boss = 'David';
people[1].boss = 'David';


people.forEach(person => {
  if (person.hasOwnProperty('boss')) {
    console.log(`${person.name} reports to ${person.boss}`)
  }
  else {
    console.log(`${person.name} doesn't report to anybody`)
  }
});
//
/*First letter	Character number
a	2
b	3
c	4
d	5*/
//'craft block argon meter bells brown croon droop'.

const cipher = {
  a:2,
  b:3,
  c:4,
  d:5
};
function decode(word, cipher){
  if(cipher.hasOwnProperty(word[0])){
    return word[cipher[word[0]]-1];
  }else{
    return ' ';
  }

}
function decodeWords(password){
  let result = '';
  let words = password.split(' ');
  words.forEach(word=>{
    result += decode(word, cipher);
  });
  return result;
}
console.log(decodeWords('craft block argon meter bells brown croon droop'));

///

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin:origin,
    attack: attack,
    defense: defense,
    describe: function () {
      console.log(`${name} is a ${race} from ${origin}.`);
    },
    evaluateFight: function (enemy){
      return `Your opponent takes ${this.attack - enemy.defense} damage and you receive ${this.defense - enemy.attack} damage.`;
    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 100, 40));

console.log(characters[characters.find('aragorn')]);//.describe());