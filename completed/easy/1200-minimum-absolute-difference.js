const minimumAbsDifference = arr => {
  arr.sort((a, b) => a - b)
  const res = [];
  let minDif;
  let prev;
  for (const num of arr) {
    if (prev && minDif > Math.abs(num - prev) || !minDif) {
      minDif =  Math.abs(num - prev);
    }
    prev = num;
  }
  prev = undefined;
  for (const num of arr) {
    if (prev && minDif === Math.abs(num - prev)) {
      res.push([prev, num]);
    } 
    prev = num;
  }

  return res;
}

// submitted 2021/05/28
// runtime 172m 43.41%
// memory 49.6mb 34.41%
// O(2n)