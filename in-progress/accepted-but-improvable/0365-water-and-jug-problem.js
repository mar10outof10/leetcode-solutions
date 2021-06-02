/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
const recursiveMeasure = (c1, v1, c2, v2, target) => {
  hist.add(`${v1},${v2}`)
  if (v1 + v2 === target) {
    return true;
  }
  if (!hist.has(`${c1},${v2}`)) {
    if (recursiveMeasure(c1, c1, c2, v2, target)) {
      return true;
    }
  }
  if (!hist.has(`${v1},${c2}`)) {
    if (recursiveMeasure(c1, v1, c2, c2, target)) {
      return true;
    }
  }
  if (!hist.has(`${v1},0`)) {
    if (recursiveMeasure(c1, v1, c2, 0, target)) {
      return true;
    }
  }
  if (!hist.has(`0,${v2}`)) {
    if (recursiveMeasure(c1, 0, c2, v2, target)) {
      return true;
    }
  }
  let v1Space = (c1 - (c1 - v1));
  if (!hist.has(`${Math.min(c1, v1 + v2)},${Math.max(0, v2 - v1Space)}`)) {
    if (recursiveMeasure(c1, Math.min(c1, v1 + v2), c2, Math.max(0, v2 - v1Space), target)) {
      return true;
    }
  }
  let v2Space = (c2 - (c2 - v2));
  if (!hist.has(`${Math.max(0, v1 - v2Space)},${Math.min(c2, v1 + v2)}`)) {
    if (recursiveMeasure(c1, Math.max(0, v1 - v2Space), c2, Math.min(c2, v1 + v2), target)) {
      return true;
    }
  }
  return false;
}
let hist = new Set();

const canMeasureWater = (jug1Capacity, jug2Capacity, targetCapacity) => {
    hist = new Set();
    let c1 = jug1Capacity;
    let c2 = jug2Capacity;

    return recursiveMeasure(c1, 0, c2, 0, targetCapacity);
};

console.log(canMeasureWater(13, 11, 1)) // t
console.log(canMeasureWater(3, 5, 4)) // t
console.log(canMeasureWater(2, 6, 5)) // f
console.log(canMeasureWater(1, 2, 3)) // t