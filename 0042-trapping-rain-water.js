const tailSum = (height, tail) => {
  let puddle = 0;
  let min;
  let height2; // 2nd highest point
  for (let j = 0; j < tail.length; j++) {
    if (height > tail[j]) {
      if (typeof min === "undefined" || tail[j] < min) {
        min = tail[j]
        height2 = 0;
      }
      if (typeof height2 === "undefined" || tail[j] > height2) {
        height2 = tail[j]
      }
      puddle += (height - tail[j]); // add rain to puddle, next iteration
    } else {
      return [j, puddle];
    }
  }
  if (tail[tail.length-1] > min && tail.length === 2) {
    puddle -= ((height - tail[tail.length-1]) * tail.length)
    return [tail.length, puddle]
  } else if (height2 > min) {
    puddle -= ((height - height2) * (tail.length -1))
    return [tail.length, puddle]
  }
  return [0, 0]; // no puddle formed as no element higher than height encountered. Next iteration of parent loop.
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

console.log(trap([4,2,3]));