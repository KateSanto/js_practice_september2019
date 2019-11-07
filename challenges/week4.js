function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
<<<<<<< HEAD
  const smallNumsOnly = nums.filter(function (num) {
    if (num < 1) {
      return true;
    } else {
      return false;
    }
  });
  return smallNumsOnly;
=======
  // Your code here
>>>>>>> 3157770dfa3af9a26c0e811f43025a4147af1173
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
<<<<<<< HEAD
  const correctNamesOnly = names.filter(function (name) {
    if (name[0] === char) {
      return true
    } else {
      return false;
    }
  })
  return correctNamesOnly;
=======
  // Your code here
>>>>>>> 3157770dfa3af9a26c0e811f43025a4147af1173
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
<<<<<<< HEAD
  const verbsOnly = words.filter(function (word) {
    if (word.substr(0, 3) === "to ") {
      return true;
    } else {
      return false;
    }
  })
  return verbsOnly;
=======
  // Your code here
>>>>>>> 3157770dfa3af9a26c0e811f43025a4147af1173
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
<<<<<<< HEAD

  const integersOnly = nums.filter(function (num) {
    if (Number.isInteger(num)) {
      return true
    } else {
      return false
    }
  })
  return integersOnly
=======
  // Your code here
>>>>>>> 3157770dfa3af9a26c0e811f43025a4147af1173
}

function getCities(users) {
  if (!users) throw new Error("users is required");
<<<<<<< HEAD
  let citiesOnly = []
  users.forEach(function (user) {
    citiesOnly.push(user.data.city.displayName)
  })
  return citiesOnly
=======
  // Your code here
>>>>>>> 3157770dfa3af9a26c0e811f43025a4147af1173
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
<<<<<<< HEAD
  const squareRoots = nums.map(function (num) {
    let squared = Math.sqrt(num)
    let toTwoDecimals = Math.round(squared * 100) / 100
    return toTwoDecimals
  })
  return squareRoots
=======
  // Your code here
>>>>>>> 3157770dfa3af9a26c0e811f43025a4147af1173
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
<<<<<<< HEAD
  const relevantSentencesOnly = sentences.filter(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase()) === true) {
      return true;
    } else {
      return false;
    }
  })
  return relevantSentencesOnly
=======
  // Your code here
>>>>>>> 3157770dfa3af9a26c0e811f43025a4147af1173
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
<<<<<<< HEAD
  const newArr = triangles.map(function (item) {
    let sortedTriangle = item.sort(function (a, b) { return a - b });
    let longestSide = sortedTriangle.pop()
    return longestSide
  })
  return newArr
=======
  // Your code here
>>>>>>> 3157770dfa3af9a26c0e811f43025a4147af1173
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
