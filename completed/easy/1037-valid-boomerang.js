/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = points => {
  const [ax, ay] = [...points[0]]
  const [bx, by] = [...points[1]]
  const [cx, cy] = [...points[2]]
  if (ax === bx && ay === by || ax === cx && ay === cy || bx === cx && by === cy) {
    return false;
  }
  let slopeAB = Math.abs(((ax - bx) / (ay - by)))
  let slopeAC = Math.abs(((ax - cx) / (ay - cy)))
  if (slopeAB === slopeAC) {
    let slopeBC = Math.abs(((bx - cx) / (by - cy)))
    if (slopeAB === slopeBC && slopeAC === slopeBC) {
      return false;
    }
  }
  return true;
};

console.log(isBoomerang([[0,0],[1,1],[1,1]])) // false
console.log(isBoomerang([[1,1],[2,3],[3,3]])) // true
console.log(isBoomerang([[1,1],[2,2],[3,3]])) // false

// SLOPES
// dx / dy
// 3 different slopes between two points
// A/B, A/C, B/C
// if all equal, straight line, therefore false