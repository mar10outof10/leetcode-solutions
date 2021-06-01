/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = nums => {
  let len = nums.length;
  let min = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] <= min) {
      min = nums[i];
    } else {
      
    }
  }
}

console.log(find132pattern([-1163,-1665,-1427,-1211,-1529,-1570,-1620,-1792,-1588,-1136])) // true


console.log(find132pattern([42,43,6,12,3,4,6,11,20])) // true

console.log(find132pattern([2,4,3,1])); // true
console.log(find132pattern([3,5,0,3,4])) // true;
console.log(find132pattern([1,2,3,4])) // f
console.log(find132pattern([3,1,4,2])) // t
console.log(find132pattern([-1,3,2,0])) // t


// const find132pattern = nums => {
//   let min = nums[0];

//   for (let i = 1; i < nums.length; i++) {

//     let mid = nums[i];

//     if (mid > min) {
//       let two;
//       for (let j = nums.length - 1; j > i; j--) {
//         let val = nums[j];
//         if (val < two || two === undefined) {
//           if (val > min) {
//             two = val;
//           }
//         } 
//       }
//       if (two === undefined) {
//         return false;
//       }
//     } else {
//       min = mid;
//     }
//   }

//   return false;
// }



const find132pattern = nums => {
  let one;
  let len = nums.length;
  let two;

  for (let i = 0; i < len; i++) {
    if (nums[i] < one || one === undefined) {
      one = nums[i];
      // console.log(one, twoInd);


      for (j = len - 1; j > i; j--) {
        let val = nums[j]
        // console.log(two, nums);
        if (one < val) {

          if (val < two || two === undefined) {
            two = val;
          } else {
            continue;
          }
          if (Math.max(...nums.slice(i + 1, j)) > two) {
            return true;
          }

        }
      }

    }
  }


  return false;
}

// const find132pattern = nums => {
//   let len = nums.length;
//   let two;
//   let threeI = len;

//   for (let i = len - 1; i >= 0; i--) {
//     if (nums[i] > two && i > threeI || i <= threeI || nums[i] < two) {
      
//       two = nums[i]
//       for (j = i - 1; j >= 0; j--) {
//         if (nums[j] > two) { // 3 "found"
//           threeI = j;
//           if (Math.min(...nums.slice(0, j)) < nums[i]) {
//             return true;
//           }
//           break;
//         }
//       }

//     }
//   }
//   return false;
// };



// const find132pattern = nums => {
//   let oneMax;
//   let two;
//   let twoHigh;

//   for (let i = nums.length - 1; i >= 0; i--) {
//     let val = nums[i]
//     if (twoHigh === undefined || val > twoHigh) {
//       two = val;

//       for (let j = i - 1; j >= 0; j--) {
//         if (nums[j] > two) {
//           console.log(...nums.slice(0, j), two)
//           if (Math.min(...nums.slice(0, j)) < two) {
//             return true;
//           }
//           twoHigh = two;
//           break;
//         }
//       }
//     }
//   }

//   return false;
// };