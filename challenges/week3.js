function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squaredNums = nums.map(num => num * num);
  return squaredNums
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Work so far in: https://repl.it/repls/SubstantialFreshDictionaries
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
  menu.forEach(function (ingredient) {
    for (let key in Object) {
      if (Object.ingredients.includes(ingredient)) {
        ingredientFound = true;
      }
    }

  })
  console.log(ingredientFound);

} //Doesn't work yet. This is work in progress.


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Still working on it here: https://repl.it/repls/LightyellowPuzzlingPercent
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
