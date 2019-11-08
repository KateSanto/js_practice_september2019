//fails 2 tests. Need to think about it more//
const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let found = nums.find(function (element) {
    return element === n;
  });

  let relevantIndex = nums.indexOf(found) + 1
  return nums[relevantIndex]
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let count0s = 0;
  let count1s = 0;
  stringed = str.split('');
  stringed.forEach((number) => {
    if (Number(number) === 0) {
      count0s = count0s + 1
    } else if (Number(number) === 1) {
      count1s = count1s + 1
    }
  })
  return { 1: count1s, 0: count0s }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return Number(n.toString().split("").reverse().join(""))
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  arrs.forEach((array) => {
    array.forEach((number) => {
      sum = sum + number
    })
  })
  return sum
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr
  let firstItem = arr.shift();
  let lastItem = arr.pop();
  arr.unshift(lastItem)
  arr.push(firstItem);
  return arr
};


/*To solve the final 2 challenges, you might first want to watch 
[this video](https://storage.googleapis.com/tech-returners-course/JavaScript_Challenges/advanced_objects.mp4) 
where Harriet looks at some advanced things we can do with Objects.*/

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
