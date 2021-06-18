/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  let [...newInt] = [...newInterval]
  const [min, max] = [...newInt]
  const res = [...intervals];
  let flag = false;

  for (let i = 0; i < res.length; i++) {

    if (res[i][1] >= min) {
      if (res[i][0] > max) {
        res.splice(i, 0, newInt);
        return res;
      }
      if (res[i][0] < min) {
        newInt[0] = res[i][0];
      }
      if (res[i][1] > max) {
        newInt[1] = res[i][1];
      }
      
      let c = i + 1;
      while (c < res.length) { // breaks when it hits an interval with a value > max OR when it goes out of index
        if (res[c][1] > max) {
          if (res[c][0] > max) {
            c--;
            break;
          }
          newInt[1] = res[c][1];
          break;
        }
        c++
      }
      
      res.splice(i, c - i + 1, [...newInt])
      flag = true;
      break;
    }

  }
  if (flag) {
    return res;
  }
  res.push(newInt);
  return res;
};

//debug
// console.log(insert([[3,5],[12,15]],[6,6]))

// console.log(insert([[1,5]],[0,0]))

// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].