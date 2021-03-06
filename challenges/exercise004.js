const {
  customizeRound,
} = require("../challenges/exercise001");

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  if (!Array.isArray(nums)) throw Error ("nums is not an Array");
  return nums.filter(num => num<1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  if (!Array.isArray(names)) throw Error("names is not an array");
  return names.filter(name => name.charAt(0) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  if(!Array.isArray(words)) throw new Error ("words is not an Array");
  return  words.filter(word => word.slice(0,3)=== "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => isIntegerNumber(num));
}

function isIntegerNumber(number){
 return (number === Math.floor(number));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  var cities = [];
  users.forEach(user =>cities.push(getCity(user)));
  return cities;
}

function getCity(userParam) {
  return userParam.data.city.displayName;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  var result = [];
  nums.forEach(num =>result.push(customizeRound(Math.sqrt(num),2)));
  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var result = [];
  triangles.forEach(triangle =>result.push(getLongestSide(triangle)));
  return result;
}

function getLongestSide(arrayA){
  return Math.max.apply(null,arrayA);
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
