const defangIPaddr = address => {
  let res = '';
  for (const char of address) {
      if (isNaN(parseInt(char))) {
          res += '[.]';
      } else {
          res += char
      }
  }
  return res
};

// accepted
// runtime 72ms 89.96%
// mem 38.6 25.48%