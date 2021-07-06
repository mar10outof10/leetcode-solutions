const permute = nums => {
  let res = [[nums[0]]];
  for (const num of nums.slice(1)) {
    let len =  res[0].length
    let temp = [];
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j <= len; j++) {
        let val = [...res[i]]
        val.splice(j, 0, num);
        temp.push(val);
      }
    }
    res = [...temp];
  }
  return res;
}

console.log(permute([1,2,3]))