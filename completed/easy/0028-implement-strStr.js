/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if (!needle) {
      return 0
  }
  const width = needle.length;
  for (let i = 0; i < (haystack.length - width + 1); i++) {
      if (haystack.slice(i, i + width) === needle) {
          return i;
      }
  }
  return -1;
};