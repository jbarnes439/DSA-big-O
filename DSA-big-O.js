function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var hanoi = function (disc, src, aux, dest) {
  if (disc > 0) {
    hanoi(disc - 1, src, dest, aux);
    console.log('Move disc ' + disc + ' from ' + src + ' to ' + dest);
    hanoi(disc - 1, aux, src, dest);
  }
};

hanoi(3, 'src', 'aux', 'dest');


