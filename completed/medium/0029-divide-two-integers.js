const divide = (dividend, divisor) => {
  if (dividend === 0) {
    return 0;
  }

  let numQueue = String(Math.abs(dividend)).split('');
  let resStack = [];
  
  let divLength = divisor.length;
  let absDiv = Math.abs(divisor);
  
  let sign; // true = positive, false = negative
  if (dividend >= 0 && divisor > 0 || dividend <= 0 && divisor < 0) {
    sign = true;
  } else {
    sign = false;
  }

  while (numQueue.length) {
    let c = 0;

    if (numQueue[0] < absDiv) {
      resStack.push(0);
      if (numQueue.length > 1) { // entry too small? Concat next in stack and repeat loop iteration
        let shifter = [Number(String(numQueue[0]) + String(numQueue[1]))];
        numQueue.splice(0, 2, shifter);
        continue;
      } else {
        break;
      }
    }

    // numQueue[0] >= absDiv

    while (numQueue[0] >= absDiv) {
      c++;
      numQueue[0] -= absDiv;
    }

    // 0 <= numQueue[0] < absDiv
    // c > 0

    resStack.push(c);

    if (numQueue[0] === 0) {
      numQueue.shift();
    } else {
      if (numQueue.length > 1) {
        let shifter = [Number(String(numQueue[0]) + String(numQueue[1]))];
        numQueue.splice(0, 2, shifter);
      } else {
        break;
      }
    }
  }

  let res = Number(resStack.join(''));

  if (res >= 2147483648) { // overflow on positive, if neg then +1 is overflow
    if (!sign && res === 2147483648) {
      return -2147483648;
    } else {
      return 2147483647;
    }
  }

  res = sign ? res : -res;
  
  return res;
};



console.log(divide(-1060849722, 99958928)); // -10


console.log(divide(-1, 1));

console.log(divide(2147483647, 2)); // 1073 7 41 8 23 (1073 2 41 3 23)
console.log(divide(20,-4));