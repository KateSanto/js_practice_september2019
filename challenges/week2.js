function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return Object.values(sandwich.fillings)
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  let checkCity = false
  for (let key in person) {
    if (person[key] === "Manchester") {
      checkCity = true
    }
  }
  return checkCity;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return (Math.ceil(people / 40))
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0
  arr.forEach(function (animal) {
    if (animal === "sheep") {
      count = count + 1
    }
  })
  return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
