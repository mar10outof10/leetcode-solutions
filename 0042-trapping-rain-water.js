const tailSum = (height, tail) => {
  let min;
  let tailMax = 0;
  let maxIndex;

  for (let j = 0; j < tail.length; j++) {
    if (height > tail[j]) {
      if (typeof min === "undefined" || tail[j] < min) {
        min = tail[j]
      }
      if (tail[j] > tailMax) {
        tailMax = tail[j]
        maxIndex = j;
      }
    } else {
      return [j, tail.slice(0, j).reduce((acc, val) => acc + height - val, 0)];
    }
  }
  // reached end of puddle at this point
  // three cases: either intermediate puddle exists (in which case we want to keep iterating parent)
  // no intermediate puddle, no right boundary
  // right boundary is higher than min but lower than height

  if (tailMax === min) {
    return [0, 0]; // no puddle formed as no right puddle boundary exists. Next iteration of parent loop.
  }
  // highestimplied to be less than height
  // highestis now the "rightmost" puddle boundary
  console.log(tail);
  if (tail.length === 1) {
    return [tail.length, tailMax - tail[0]]
  } 
  const sum = tailSum(tailMax ,tail)[1]
  if (sum) {
    return [tail.length, tail.reduce((acc, val) => acc + tailMax - val, 0)];
  }
  tail.reverse();
  return [tail.length, tailSum(tailMax, tail)[1]];
  }


const trap = height => {
  let rain = 0;
  
  for (let i = 0; i < height.length - 2; i++) { // exit loop after accessing 3rd last node. Need 3 nodes minimum to form a "puddle"
    if (height[i] !== 0) { // puddle can't start on a zero, keeps iterating until it hits a number
      
      let tail = height.slice(i + 1); // min length 2 elements
      const [step, puddle] = tailSum(height[i], tail)
      i += step;
      rain += puddle;
    }
  }
  return rain;
}
console.log(trap([4,9,4,5,3,2])) // 1
console.log(trap([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2])); // 26
console.log(trap([0,7,1,4,6])); // 7
console.log(trap([5,4,1,2])); // 1
console.log(trap([5,2,1,2,1,5])); //14
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,3])); // 1

// count the number of "squares" on a conceptualized grid of an input array
// need to iterate down the array
// record height and go down array
// if next entry is lower height than initial, add difference between value and height to "puddle"
// if next entry is equal or higher height, set it as new height, add "puddle" to "rain"