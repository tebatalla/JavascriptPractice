function uniq(array) {
  var uniqArray = [];
  for(var i = 0; i < array.length; i++) {
    var included = false;
    for(var j = 0; j < uniqArray.length; j++) {
      if(array[i] === uniqArray[j]){
        included = true;
      }
    }
    if(!included) {
      uniqArray.push(array[i]);
    }
  }
  return uniqArray;
}

function twoSum(array) {
  var result = [];
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === 0){
        result.push([i, j]);
      }
    }
  }
  return result;
}

function transpose(array) {
  var result = new Array(array[0].length);
  for (var i = 0; i < array[0].length; i++) {
    result[i] = [];
  }

  for (var j = 0; j < array.length; j++) {
    for (var k = 0; k < array[j].length; k++) {
      result[k].push(array[j][k]);
    }
  }
  return result;
}

console.log(transpose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]));

console.log(transpose([[2, 1], [3, 4], [5, 6]]));
