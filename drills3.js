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