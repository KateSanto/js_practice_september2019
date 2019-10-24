function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squaredNums = nums.map(num => num * num);
  return squaredNums
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let firstString = words.splice(0, 1);
  let laterStrings = words.splice(0);
  let restOfArray = [];

  laterStrings.forEach(function (word) {
    let capitalisedWord = word.charAt(0).toUpperCase() + word.slice(1)
    restOfArray.push(capitalisedWord);
  })
  let camelCasedArray = (firstString + restOfArray).replace(/,/g, "");
  return camelCasedArray;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjects = 0;
  people.forEach(function (person) {
    subjects = subjects + person.subjects.length
  })
  return subjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let ingredientFound = false
  menu.forEach(function (menuItem) {
    menuItem.ingredients.forEach(function (menuItemIngredient) {
      if (menuItemIngredient === ingredient) {
        ingredientFound = true;
      }
    })

  })
  return ingredientFound;
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const duplicates = [];
  arr1.forEach(function (num) {
    arr2.forEach(function (num2) {
      if (num === num2) {
        const duplicatesContainsNum = duplicates.includes(num);
        if (duplicatesContainsNum === false) {
          duplicates.push(num2);
        }
      };
    });
  });
  return duplicates.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
}
