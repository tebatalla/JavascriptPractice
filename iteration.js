function bubbleSort(arr) {
  var unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (var i = 0; i < arr.length - 1; i++) {
      var j = i + 1;
      if(arr[i] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        unsorted = true;
      }
    }
    if(!unsorted){
      return arr;
    }
  }
  return arr;
}

String.prototype.substring = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
};

console.log(bubbleSort([1, 5, 8, 2, 6, 8, 3, 67, 7, 3, 6, 3, 75687, 57]));

console.log("cat".substring());
