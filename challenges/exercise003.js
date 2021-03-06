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
      if(!setOfSubjects.includes(peekedSubject)){
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
  var i = 0;
  var notFound = true;
  var keepChecking = ((i<menu.length) && (notFound));
  while(keepChecking){
    isIngredientsInMenu = menu[i].ingredients.includes(ingredient);
    notFound = (!isIngredientsInMenu);
    i=i+1;
    keepChecking = (i<menu.length) && notFound;
  }
  return isIngredientsInMenu;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var longArray = longerArray(arr1,arr2);
  var shortArray = shorterArray(arr1,arr2);
  var intersection = [];
  for(var i=0;i<shortArray.length;i++){
    var cheekedNumber = shortArray[i];
    if(longArray.includes(cheekedNumber)){
      intersection.push(cheekedNumber);
    }
  }
  return intersection.sort();
}

function shorterArray(arrayA,arrayB){
  if(arrayA.length<=arrayB.length)
    return arrayA;
  else
    return arrayB;
}

function longerArray(arrayA, arrayB){
  if(arrayA.length>=arrayB.length)
    return arrayA;
  else
    return arrayB;
}
module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
