function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let capitalisedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalisedWord
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let VAT = vatRate / 100
  let totalPrice = (VAT * originalPrice) + originalPrice;
  return Math.round(totalPrice * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let discount = reduction / 100
  let discountedPrice = originalPrice - (discount * originalPrice);
  return Math.round(discountedPrice * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  else if (str.length % 2 === 0) {
    let mid = str.length / 2
    return str.slice(mid - 1, mid + 1)
  } else {
    let newLength = str.length + 1
    mid = newLength / 2
    return str.slice(mid - 1, mid)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}




function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newArr = []
  words.forEach(function (word) {
    word = word.split("").reverse().join("");
    newArr.push(word)
  })
  console.log(newArr)
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here! THERE ARE CLUES ON HARRIET'S VIDEO!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
