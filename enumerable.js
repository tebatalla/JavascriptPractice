Array.prototype.myEach = function(cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function(cb) {
  var result = [];
  this.myEach(function(el){
    result.push(cb(el));
  });
  return result;
};

Array.prototype.myInject = function(cb, accum) {
  if(!accum){
    var accum = this[0];
    this.slice(1).myEach(function(el){
      accum += cb(el);
    });
  } else {
    this.myEach(function(el){
      accum += cb(el);
    });
  }

  return accum;
};


var a = [1,2,6];

var b = a.myMap(function(el) {
  return (el * 7);
});

a.myEach(console.log);

console.log(b);

console.log(a.myInject(function(el){
  return (-el);
}, 8));
