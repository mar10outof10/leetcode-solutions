
const isValid = s => {
  let stack = [];
  let open = new Set(["(", "[", "{"]);

  for (const char of s) {
    if (open.has(char)) {
      stack.push(char);
    } else {
      if (!stack.length) {
        return false;
      }
      let open = stack.pop();
      if (char === ")") {
        if (open !== "(") {
          return false;
        }
      } else if (char === "]") {
        if (open !== "[") {
          return false;
        }
      } else if (char === "}") {
        if (open !== "{") {
          return false;
        }
      }
    }
  }
  if (stack.length) {
    return false
  }

  return true;
};

console.log(isValid('()'))
console.log(isValid("()[]{}"));
console.log(isValid("()[]]{}"));
