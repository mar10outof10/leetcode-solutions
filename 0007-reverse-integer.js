// not working, runs into errors on negative strings
// potential solution: find new way to convert str to int
// 
const reverse = x => {
  let neg = false;
  if (Math.abs(x) < 10) {
    return x
  }
  if (x < 0) {
    neg = true;
  }
  const parse = parseInt((x % 10).toString() + reverse(parseInt(x / 10)))
  if (neg) {
    return -Math.abs(parse)
  } else {
    return parse
  }
}


// Working solution, feels a little hacky to rely on arrays and their own reverse functions. Want to explore alternative solutions.
const reverse = x => {
  if (!x) {
    return x
  }
  if (x % 10 === 0) {
    return reverse(x / 10);
  }
  let neg;
  if (x < 0) {
    neg = true;
  }
  let xStr = x.toString();
  let xArr = xStr.split('');
  xArr.reverse();
  xStr = xArr.join('');
  let int = parseInt(xStr);
  if (neg && int < 2147483647) {
    return -Math.abs(int);
  } else if (int < 2147483647) {
    return int;
  }
  return 0
};
// runtime 100ms, faster than 55.44%
// memory usage 40.1mb, less than 75.91%