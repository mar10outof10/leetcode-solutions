const findLowerBound = (low) => {
  const lowString = low.toString();
  let index = parseInt(lowString[0]);
  let length = lowString.length;

  let temp = null;

  for (let i = 0; i < length; i++) {
    if (temp && parseInt(lowString[i]) > temp + 1) {
      index = index + 1;
      if (index > 10 - length) {
        index = 1;
        length++;
      }
      return [ index, length ];
    } else {
      temp = parseInt(lowString[i]);
    }
  }

  return [ index, length ];
}

const findUpperBound = (high) => {
  const highStr = high.toString();
  let index = parseInt(highStr[0]);
  let length = highStr.length;

  let temp = null;

  const incrementCheck = (index, length) => {
    if (index > 10 - length) {
      index = 11 - length;
      return index;
    };
    return index;
  }

  for (let i = 0; i < length; i++) {
    if (temp && parseInt(highStr[i]) > temp + 1) {
      index = index + 1;
      if (index > 10 - length) {
        index = 1;
        length++;
      }
      return [ incrementCheck(index, length), length ];
    } else if (temp && parseInt(highStr[i]) === temp + 1) {
      continue;
    } else if (temp) {
      return [ incrementCheck(index, length), length ];
    } else {
      temp = parseInt(highStr[i]);
    }
  }
  return [ incrementCheck(index, length), length ];
}

const createSequentialDigitsArray = (lowIndex, lowLength, highIndex, highLength) => {
  const res = [];
  
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
}

const sequentialDigits = (low, high) => {
  let [lowIndex, lowLength] = findLowerBound(low);
  let [highIndex, highLength] = findUpperBound(high);
  
  if (lowLength >= 10) {
    return [];
  }

  return createSequentialDigitsArray(lowIndex, lowLength, highIndex, highLength);
};

// test cases
// console.log(sequentialDigits(100,300)) // [123,234]
// console.log(sequentialDigits(1000,13000)) // [1234,2345,3456,4567,5678,6789,12345]
// console.log(sequentialDigits(234,2314)) // 234,345,456,567,678,789,1234]
// console.log(sequentialDigits(3770,12427)) // [4567,5678,6789,12345]
// console.log(sequentialDigits(178546104, 812704742)) // [];
// console.log(sequentialDigits(31365477, 514800930)) // [123456789];