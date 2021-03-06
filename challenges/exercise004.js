function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  if (!Array.isArray(nums)) throw Error ("nums is not an Array");
  var smallThanOneNums = [];
  for(var i=0;i<nums.length;i++){
    var numberIsSmallerThanOne = (nums[i]<1);
    if(numberIsSmallerThanOne){
      smallThanOneNums.push(nums[i]);
    }
  }
  return smallThanOneNums;

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  if (!Array.isArray(names)) throw Error("names is not an array");
  var result = [];
  for(var i=0;i<names.length;i++){
    var nameStartsWithChar = names[i].charAt(0) === char;
    if(nameStartsWithChar){
      result.push(names[i]);
    }
  }
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  if(!Array.isArray(words)) throw new Error ("words is not an Array");
  var result = [];
  for(var i=0;i<words.length;i++){
    var word = words[i];
    var isStringContent = ((typeof word === "string" || word instanceof String));
    if(isStringContent){
      var isAVerb = (word.slice(0,3)=== "to ");
      if(isAVerb){
        result.push(word);
      }
    }
  }
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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
