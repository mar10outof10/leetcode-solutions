/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    let arr = s.split(' ');
    if (pattern.length !== arr.length) {
      return false;
    }
    let map = {};
    let dupes = new Set();
    for (i = 0; i < pattern.length; i++) {
      if (!(pattern[i] in map)) {
        if (dupes.has(arr[i])) {
          return false;
        }
        dupes.add(arr[i]);
        map[pattern[i]] = arr[i];
      } else {
        if (map[pattern[i]] !== arr[i]) {
          return false;
        }
      }
    }
    return true;
};