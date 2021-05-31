/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const canPlaceFlowers = (flowerbed, n) => {
  let c = 0;
  if (n === 0) {
    return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]) {
      c++;
      i++;
      if (c === n) {
        return true;
      }
    }
  }
  return false;
};

console.log(canPlaceFlowers([1,0,1,0,1,0,1], 0)) // true
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2)) // true
console.log(canPlaceFlowers([0,0,1,0,1], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)) // false
console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) // false

// awesome recursive solution leetcode wont accept

// function finds index of first zero
// assumes number to the left in previous array was a 0

// const canPlaceFlowers = (flowerbed, n) => { 
//   if (n === 0) {
//     return true;
//   }
//   if (!flowerbed[0]) {
//     if (flowerbed.length === 1 && n === 1) {
//       return true;
//     }
//     const zeroI = flowerbed.indexOf(0,1);
//     if (zeroI === 1) {
//       if (flowerbed.length < 2) {
//         return n === 1 ? true : false;
//       }
//       return canPlaceFlowers(flowerbed.slice(2), n - 1)
//     } else if (zeroI > 1) {
//       return canPlaceFlowers(flowerbed.slice(zeroI + 1), n)
//     } else {
//       return false;
//     }
//   } else {
//     const zeroI = flowerbed.indexOf(0);
//     if (0 <= zeroI < flowerbed.length - 1) {
//       return canPlaceFlowers(flowerbed.slice(zeroI + 1), n)
//     }
//     return false;
//   }
// };