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