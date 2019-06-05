/* eslint-disable no-console */
//object drills
'use strict';
function createMyObject(){

  return {
    foo: 'bar',
    answersToUniverse:42,
    'olly olly':'oxen free',
    sayHello:()=> {return 'hello';}
  };
}
console.log(createMyObject());   

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz ='bizz';
  obj.bang = 'bang';
  return obj;
}

