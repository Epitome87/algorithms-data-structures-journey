const data1 = [2, 8, -1, 3, 9, 13, -5, 18, -4, 24];
const data2 = [-2632, -819, -873, 43, 8007, 129, 5905];
const sortedData = [-142, -103, -48, -3, 1, 5, 7, 12, 18, 20];

function radixSort(nums) {
  const maxNumDigits = mostDigits(nums);

  for (let k = 0; k < maxNumDigits; k++) {
    console.log('WTF');
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      // digitBucks[getDigit(nums[i], k)].push(nums[i]);
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // nums = [];
    // for (let i = 0; i < digitBuckets.length; i++) {
    //   for (let j = 0; j < digitBuckets[i].length; j++) {
    //     console.log('Pushing: ', digitBuckets[i][j], 'i = ', i, ' j = ', j);
    //     nums.push(digitBuckets[i][j]);
    //   }
    // }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort(data2));

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
