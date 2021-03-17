function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  var result = word;
  var firstLetter = word.charAt(0);
  var pattern = /[a-z]/;
  if(pattern.test(firstLetter)){
    result = firstLetter.toUpperCase() + word.slice(1);
  }
  return result;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstLetterToUpperCase(firstName) + "." +firstLetterToUpperCase(lastName);

}

function firstLetterToUpperCase(word){
  return word.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var result = (vatRate + 100.00)*(originalPrice/100.00);
  var resultWith2Decimals = customizeRound(result,2);
  return Number(resultWith2Decimals);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction>=100.00) throw new Error("Reduction causes a negative price");
  var result = (100.00-reduction)*(originalPrice/100.00);
  var resultWith2Decimals = customizeRound(result,2);
  return Number(resultWith2Decimals);
}

function customizeRound(value, places) {
  var multiplier = Math.pow(10, places);
  return (Math.round(value * multiplier) / multiplier);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var result = str;
  
  if (str.length>1){

    var middleIndex = str.length/2;

    if(isEvenString(str)){
      var theTwoCharactersInTheMiddle = str.substring(middleIndex-1,middleIndex+1);
      result= theTwoCharactersInTheMiddle;
    }

    var isOddString = !isEvenString(str);

    if(isOddString){
      var theCharacterInTheMiddle = str.charAt(middleIndex);
      result=  theCharacterInTheMiddle;
    }
  }
  return result;
}

function isEvenString(str){
  var result = str;
  return ((result.length % 2) == 0);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let result = word.split("").reverse().join("");
  return result;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //if (!words.isArray()) throw new Error("words is not an array");

  let result = words.map(w => reverseWord(w));
  return result;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var numberOfLinuxUsers = 0;
  numberOfLinuxUsers = users.filter(u => u.type === "Linux").length;
  return numberOfLinuxUsers;

}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
  sum = scores.reduce((acc,score)=> acc + score,0);
  let result  = sum>0?customizeRound(sum/scores.length,2):0;
  return result;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n<=0) throw new Error("n should be greater than 0");
  var result =n;
  var isThreeDivisible = (n % 3 == 0);
  var isFiveDivisible = (n % 5 == 0);
  if(isThreeDivisible|| isFiveDivisible){
    result ="";
    if(isThreeDivisible){
      result = result + "fizz";
    }
    if(isFiveDivisible){
      result = result + "buzz";
    }
  }
  return result;  
}

module.exports= {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
  customizeRound
};
