function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNumsOnly = nums.filter(function (num) {
    if (num < 1) {
      return true;
    } else {
      return false;
    }
  });
  return smallNumsOnly;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const correctNamesOnly = names.filter(function (name) {
    if (name[0] === char) {
      return true
    } else {
      return false;
    }
  })
  return correctNamesOnly;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbsOnly = words.filter(function (word) {
    if (word.substr(0, 3) === "to ") {
      return true;
    } else {
      return false;
    }
  })
  return verbsOnly;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const integersOnly = nums.filter(function (num) {
    if (Number.isInteger(num)) {
      return true
    } else {
      return false
    }
  })
  return integersOnly
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let citiesOnly = []
  users.forEach(function (user) {
    citiesOnly.push(user.data.city.displayName)
  })
  return citiesOnly
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = nums.map(function (num) {
    let squared = Math.sqrt(num)
    let toTwoDecimals = Math.round(squared * 100) / 100
    return toTwoDecimals
  })
  return squareRoots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const relevantSentencesOnly = sentences.filter(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase()) === true) {
      return true;
    } else {
      return false;
    }
  })
  return relevantSentencesOnly
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const newArr = triangles.map(function (item) {
    let sortedTriangle = item.sort(function (a, b) { return a - b });
    let longestSide = sortedTriangle.pop()
    return longestSide
  })
  return newArr
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
