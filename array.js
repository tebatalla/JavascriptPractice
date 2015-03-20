Array.prototype.uniq = function() {
  var uniqArray = [];
  for(var i = 0; i < this.length; i++) {
    var included = false;
    for(var j = 0; j < uniqArray.length; j++) {
      if(this[i] === uniqArray[j]){
        included = true;
      }
    }
    if(!included) {
      uniqArray.push(this[i]);
    }
  }
  return uniqArray;
}

Array.prototype.twoSum = function () {
  var result = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0){
        result.push([i, j]);
      }
    }
  }
  return result;
}

Array.prototype.transpose = function () {
  var result = new Array(this[0].length);
  for (var i = 0; i < this[0].length; i++) {
    result[i] = [];
  }

  for (var j = 0; j < this.length; j++) {
    for (var k = 0; k < this[j].length; k++) {
      result[k].push(this[j][k]);
    }
  }
  return result;
}

console.log([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ].transpose());
