function range(start, end) {
  if(end < start) {
    return;
  }
  if(start === end){
    return end;
  }
  return [start].concat(range(start + 1, end));
}

function sum(arr) {
  if(arr.length === 0){
    return null;
  }
  return arr[0] + sum(arr.slice(1));
}

function exp1(b, n){
  if(n === 0){
    return 1;
  } else {
    return b * exp1(b, n - 1);
  }
}

function exp2(b, n){
  if(n === 0) {
    return 1;
  } else if (n === 1){
    return b;
  }
  if(n % 2 === 0){
    return exp2(b, n / 2) * exp2(b, n / 2);
  } else {
    return b * exp2(b, (n - 1));
  }
}

function fibonacci(n){
  if(n === 1){
    return [1];
  } else if(n === 2) {
    return [1, 1];
  }
  var prev = fibonacci(n - 1);
  var prevPrev = fibonacci(n - 2);
  return prev.concat(prev[prev.length -1] + prevPrev[prevPrev.length - 1]);
}

function binarySearch(arr, target) {
  if(arr.length === 0){
    return null;
  }
  var half = Math.floor(arr.length / 2);
  if (arr[half] === target){
    return half;
  } else {
    if(target < arr[half]){
      return binarySearch(arr.slice(0, half), target);
    } else {
      var result = binarySearch(arr.slice(half + 1), target);
      if(result || result === 0) {
        return half + 1 + result;
      } else {
        return result;
      }
    }
  }
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return [arr[0]];
  } else if(arr.length === 0) {
    return [];
  }

  var half = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, half));
  var right = mergeSort(arr.slice(half));
  return merge(left, right);
}

function merge(left, right) {
  if(left.length === 0){
    return right;
  }
  if(right.length === 0){
    return left;
  }
  if(left[0] < right[0]){
    return [left[0]].concat(merge(left.slice(1), right));
  } else {
    return [right[0]].concat(merge(left, right.slice(1)));
  }
}

function subset(arr) {
  if(arr.length === 0) {
    return []
  }
  if(arr.length === 1) {
    return [arr]
  }

  return subset(arr.slice(0, arr.length - 1)).concat([arr[arr.length-1]]).concat([arr.slice(arr.length - 1)]);
}


console.log(subset([1, 2]));
