// not working, runs into errors on negative strings
// potential solution: find new way to convert str to int
// 
const reverse = x => {
  if (`${x}`.length === 1) {
    return x
  }
  let inp = x % 10;
  let pushStr = `${inp}`;
  let truncated = parseInt(x / 10);
  while (inp === 0) {
    inp = truncated % 10;
    pushStr += '0'
    truncated = truncated / 10;
  }


  if (x < 0) {
    return -Math.abs(parseInt(`${pushStr}${reverse(Math.abs(truncated))}`));
  } else {
    return parseInt(`${pushStr}${Math.abs(reverse(truncated))}`);
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