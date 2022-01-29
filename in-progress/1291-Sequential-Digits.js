
const sequentialDigits = (low, high) => {
  let lowStr = low.toString();
  lowIndex = parseInt(lowStr[0]);
  let lowLength = lowStr.length;

  let lowCache = null;

  for (let i = 0; i < lowLength; i++) {
    if (lowCache && parseInt(lowStr[i]) > lowCache + 1) {
      lowIndex = lowIndex + 1;
      if (lowIndex > 10 - lowLength) {
        lowIndex = 1;
        lowLength++;
      }
      break
    } else {
      lowCache = parseInt(lowStr[i]);
    }
  }

  let highStr = high.toString();
  highIndex = parseInt(highStr[0]);
  let highLength = highStr.length;

  let highCache = null;

  for (let i = 0; i < highLength; i++) {
    if (highCache && parseInt(highStr[i]) > highCache + 1) {
      highIndex = highIndex + 1;
      if (highIndex > 10 - highLength) {
        highIndex = 1;
        highLength++;
      }
      break;
    } else if (highCache && parseInt(highStr[i]) === highCache + 1) {
      continue;
    } else if (highCache) {
      break;
    } else {
      highCache = parseInt(highStr[i]);
    }
  }

  const res = [];

  console.log(lowIndex, lowLength);
  console.log(highIndex, highLength);
  
  if (lowLength >= 10) {
    return [];
  }
  
  if (highIndex > 10 - highLength) {
    highIndex = 11 - highLength;
  };

  for (let i = lowLength; i < highLength; i++) {
    while (lowIndex <= 10 - i) {
      let sequence = '';
      for (let j = 0; j < i; j++) {
        sequence += lowIndex + j;
      }
      res.push(sequence);
      lowIndex++;
    }
    lowIndex = 1;
  }

  while (lowIndex < highIndex) {
    let sequence = '';
    for (let j = 0; j < highLength; j++) {
      sequence += lowIndex + j;
    }
    res.push(sequence);
    lowIndex++;
  }

  return res;
};

console.log(sequentialDigits(100,300)) // [123,234]
console.log(sequentialDigits(1000,13000)) // [1234,2345,3456,4567,5678,6789,12345]
console.log(sequentialDigits(234,2314)) // 234,345,456,567,678,789,1234]
console.log(sequentialDigits(3770,12427)) // [4567,5678,6789,12345]

console.log(sequentialDigits(178546104, 812704742)) // [];

console.log(sequentialDigits(31365477, 514800930)) // [123456789];