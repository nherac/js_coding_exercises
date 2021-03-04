function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  result = word;
  var firstLetter = word.charAt(0);
  var pattern = new RegExp("[a-z]");
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
  var result = (vatRate + 100)*(originalPrice/100);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction>=100) throw new Error("Reduction causes a negative price");
  var result = (100-reduction)*(originalPrice/100);
  return result;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (isEvenString(str)) throw new Error("The string is even");
  var middleIndex = str.length/2;
  return str.charAt(middleIndex);

}

function isEvenString(str){
  return str.length % 2 == 0;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var result = "";
  var lastIndex = word.length-1;
  var FIRST_INDEX=0;
  for(var i = lastIndex;i>=FIRST_INDEX;i--){
    result = result + word[i];
  }
  return result;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (!words.isArray()) throw new Error("words is not an array");
  var lastIndex = word.length-1;
  var FIRST_INDEX=0;
  var result =[];
  for(var i=FIRST_INDEX;i<lastIndex;i++){
    var newWord =reverseWord( words[i]);
    result.push(newWord);
  }
  return result;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  if (!users.isArray()) throw new Error("Users is not an array");
  var numberOfLinuxUsers = 0;
  var lastIndex = word.length-1;
  var FIRST_INDEX=0;
  for(var i=FIRST_INDEX;i<lastIndex;i++){
    if(users[i].type=="Linux"){
      numberOfLinuxUsers++;
    }

  }
  return numberOfLinuxUsers;

}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n<=0) throw new Error("n should be greater than 0");

  
}

export default {
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
