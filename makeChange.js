function makeChange(amount, coins){
  if(coins.length === 0){
    return [];
  }

  var coins = coins.sort(function(a, b) {
    return b - a;
  });

  var bestChange = [];
  for (var i = 0; i < coins.length; i++) {
    var newCoins = coins.slice(i);
    var current = newCoins[0];
    var thisChange = function() {
      if((amount - current) >= 0) {
        return [current].concat(makeChange(amount - current, newCoins));
      } else {
        return makeChange(amount, newCoins.slice(1));
      }
    };

    if(thisChange().length < bestChange.length || bestChange.length === 0) {
      bestChange = thisChange();
    }
  }

  return bestChange;
}

console.log(makeChange(21, [10, 7, 2]));
