// final iteration, it's so beautiful
const trap = height => {
  let rain = 0;
  let lowerBound = height[0];
  let upperBound;
  let upperIndex = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const start = height[i]
    
    if (i > upperIndex) {
      upperBound = undefined;
      for (let j = i + 1; j < height.length; j++) {
        if (!upperBound || height[j] >= upperBound) {
          upperBound = height[j];
          upperIndex = j;
        }
      }
    }
    if (height[i] > lowerBound) {
      lowerBound = height[i]
    }

    if (start < lowerBound && start < upperBound) {
      rain += Math.min(lowerBound, upperBound) - start;
    }
  }
  return rain;
}
// submitted
// runtime: 80ms, 93.99%
// memory 39.3mb, 72.11%


// debug
console.log(trap([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2])); // 26
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,9,4,5,3,2])) // 1
console.log(trap([5,2,1,2,1,5])); //14
console.log(trap([0,7,1,4,6])); // 7
console.log(trap([5,4,1,2])); // 1
console.log(trap([4,2,3])); // 1

// try number 2, try to write the function while storing the lower and upper bounds
// storing lower bound: ??? exit for loop once lowerbounbd >= upperbound
// storing upper bound: skip upper indeces looping if upperIndex > 
// const trap = height => {
//   let rain = 0;
//   let lowerBound;
//   let upperBound;
//   let upperIndex = 0;
//   for (let i = 1; i < height.length - 1; i++) {
//     const start = height[i]
    
//     if (i > upperIndex) {
//       upperBound = undefined;
//       for (let j = i + 1; j < height.length; j++) {
//         if (!upperBound || height[j] >= upperBound) {
//           upperBound = height[j];
//           upperIndex = j;ß
//         }
//       }
//     }
//     for (let j = i - 1; j >= 0; j--) {
//       if (lowerBound === undefined || height[j] >= lowerBound) {
//         lowerBound = height[j];
//         if (lowerBound >= upperBound) {
//           break;
//         }
//       }
//     }

//     if (start < lowerBound && start < upperBound) {
//       rain += Math.min(lowerBound, upperBound) - start;
//     }
//   }
//   return rain;
// }
// submitted
// runtime: 108ms 19.4%
// memory 39.5mb 53.4%

// try number 1
// const trap = height => {
//   let rain = 0;
//   for (let i = 1; i < height.length - 1; i++) {
//     let lowerBound;
//     let upperBound;
//     const start = height[i]    

//     for (let j = i - 1; j >= 0; j--) {
//       if (lowerBound === undefined || height[j] >= lowerBound) {
//         lowerBound = height[j];
//       }
//     }

//     for (const val of height.slice(i + 1)) {
//       if (upperBound === undefined || val >= upperBound) {
//         upperBound = val;
//       }
//     }
//     if (start < lowerBound && start < upperBound) {
//       rain += Math.min(lowerBound, upperBound) - start;
//     }
//   }
//   return rain;
// }

//successful solution
// runtime: 248 ms faster than 5.62%
// memory: 45.1mb less than 5.14%
// O(n)^2