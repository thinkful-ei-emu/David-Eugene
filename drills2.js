/* eslint-disable no-console */
//
'use strict';
const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' }
];
function makeStudentReport(data){
  let result = [];
  for (let students in data){
    result.push(data[students].name + ':' + data[students].grade);
  
  }
  return result;
  
  
}
console.log(makeStudentReport(testData));