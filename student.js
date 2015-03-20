'use strict';

var Course = require('./course.js');

var Student = function(first, last) {
  this.first = first;
  this.last = last;
  this.courses = [];
}

Student.prototype.name = function() {
  return this.first + " " + this.last;
}

Student.prototype.enroll = function(course) {
  // if(!this.courses.includes(course)) {
    this.courses.push(course);
    course.addStudent(this);
  // }
}

module.exports = Student;
