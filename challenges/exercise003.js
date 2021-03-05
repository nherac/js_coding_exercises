const {
  capitalize,
} = require("../challenges/exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  var squaresArray = [];
  for(var i=0;i<nums.length;i++){
    var value = nums[i]*nums[i];
    squaresArray.push(value);
  }
  return squaresArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var camelCase = [];
  for (var i = 0; i < words.length; i++) {
    var isFirstWord = (i == 0);
    if (isFirstWord) {
      camelCase.push(words[i]);
    }
    else{
      var newWord = capitalize(words[i]);
      camelCase.push(newWord);
    }
  }
  return camelCase.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var setOfSubjects = [];
  for(var i=0;i<people.length;i++){
    var subjectsArray = people[i].subjects;
    for(var j=0;j<subjectsArray.length;j++){
      var peekedSubject = subjectsArray[j];
      console.log("peeking" + peekedSubject);
      console.log("is the subject included "+ setOfSubjects.includes(peekedSubject));
      if(!setOfSubjects.includes(peekedSubject)){
        console.log("adding" + peekedSubject);
        setOfSubjects.push(peekedSubject);
      }
    }
  }
  return setOfSubjects.length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  var isIngredientsInMenu = false;
  var i =0;
  var notFound = true;
  var keepChecking = ((i<menu.length) && (notFound));
  while(keepChecking){
    var isIngredientInMenu= menu[i].ingredients.includes(ingredient);
    notFound =!isIngredientInMenu;
    i=i+1;
    keepChecking = (i<menu.length) && notFound;
  }
  return isIngredientsInMenu;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var setFromArray2 =new Set(arr2);
  const intersection = new Set(arr1).filter(x=>setFromArray2.has(x));
  return intersection;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
