var sampleArray = [8, 1, 3, 3, 3, 4, 4, 4];

function findDuplicates(nums) {
  let n = nums.shift();
  if (n >= 3 && n <= 1000) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        if (ans[ans.length - 1] !== nums[i]) {
          ans.push(nums[i]);
        }
      }
    }
    return ans.length;
  }
}

let a = findDuplicates(sampleArray);
console.log(a);