var Cat = function(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  return this.owner + " loves " + this.name;
};

var cat1 = new Cat("Markov", "Mark");
var cat2 = new Cat("Gizmo", "Tomas");

Cat.prototype.cuteStatement = function () {
  return "Everyone loves " + this.name;
};

Cat.prototype.meow = function () {
  return "meowwwww";
};

cat2.meow = function() {
  return "I hate you";
};

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());
console.log(cat1.meow());
console.log(cat2.meow());
