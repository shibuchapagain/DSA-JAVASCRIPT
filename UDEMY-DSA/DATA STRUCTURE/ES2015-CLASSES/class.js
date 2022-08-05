class Student {
  constructor(fname, lname, year) {
    this.fname = fname;
    this.lname = lname;
    this.grade = year;
  }
}

let student1 = new Student("shiva", "chapagain", 2017);
let student2 = new Student("Jonas", "Schmedtman");
// console.log(student1); // Student { fname: 'shiva', lname: 'chapagain', grade: 2017 }
// console.log(student1.fname, student1.grade); // shiva 2017

// to create instance method ...
class Person {
  constructor(fname, lname, year, tardies) {
    this.fname = fname;
    this.lname = lname;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
    this.average = [];
  }
  fullName() {
    return `My name is ${this.fname} ${this.lname} ...`;
    // return "shibu chapagain";
  }
  marklate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return `You are EXPELLED`;
    }
    return `${this.fname} ${this.lname} has been ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calcAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

let person1 = new Person("shiva", "chapagain", 2017);
let person2 = new Person("krishna", "chapagain", 2015);
// console.log(person1);
// console.log(person1.scores);
person1.addScore(11);
person1.addScore(22);
// console.log(person1);
// console.log(person1.calcAverage());
// console.log(person1.fullName());
// console.log(person1.marklate());
// console.log(person1.marklate());
// console.log(person1.marklate());
// console.log(person1.addScore(55));
// person1.addScore(11);
// console.log(person1.scores);
// person1.addScore(22);
// console.log(person1.scores);

// console.log(person1);
// console.log(person1.scores);
// console.log(person1.average);

// to create a class Method
class Test {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  fullName() {
    return `MY NAME IS ${this.fname} ${this.lname} ...`;
  }
  static enrollStudents() {
    return "ENROLLONG STUDENTS";
  }
}

let test1 = new Test("shiva", "chapagain");
console.log(test1);
console.log(test1.fullName());
// console.log(test1.enrollStudents()); // enrollStudents is not a function ...
console.log(Test.enrollStudents()); // ENROLLING STUDENTS
