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
console.log(updateObject({}));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: ()=>{
      return this.firstName + ' ' + this.lastName;
    }
  };
  return person;
}
console.log(personMaker());

