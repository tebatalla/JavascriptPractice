'use strict';

var Course = function(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  // if(!this.students.includes(student)) {
    this.students.push(student);
    // student.enroll(this);
  // }
}

module.exports = Course;
