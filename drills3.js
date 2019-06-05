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