// alternate lazy but effective
const defangIPaddr = address => {
  return address.split('.').join('[.]');
}
// accepted
// 68ms 97.35%
// 38.5mb 41.02%


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