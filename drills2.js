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

const studentInfo = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

function enrollInSummerSchool(students) {
  const results = [];
  for (let i = 0; i < students.length; i++) {
    results.push({
      name: students[i].name,
      status: 'In Summer school',
      course: students[i].course,
    });
  }
  return results;
}

console.log(enrollInSummerSchool(studentInfo));

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
function findById(data, idnum){

  for(let obj in data){
    if(data[obj].id === idnum){
      return data[obj];
    }
  }
 

}

console.log(findById(data, 2)); // should return {id: 2, foo: 'bizz'}