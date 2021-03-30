const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  var nextIndex = nums.indexOf(n) + 1;
  var notFound = (nextIndex == 0);
  var isTheLastElement = (nextIndex == nums.length);
  var shouldReturnNull = ( notFound ||isTheLastElement);
  var result = shouldReturnNull?null:nums[nextIndex];
  return result;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var onesCounter = 0;
  var zerosCounter = 0;
  for(let c of str){
    if(c=="1"){
      onesCounter++;
    }
    else if(c=="0"){
      zerosCounter++;
    }
    else{
      throw new Error("there are othere characters appart of 0 and 1");
    }
  }
  return {1:onesCounter,
          0:zerosCounter};
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  var result = 0;
  var keepChecking = true;
  while(keepChecking){
    var remainder = n % 10;
    result = result*10 + remainder;
    n = (n>=10)? (Math.floor(n/10)):0;
    keepChecking = (n>0);
  }
  return result;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce(((partialSum,num)=> partialSum + num),0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  var copy = Array.from(arr);
  if(copy.length > 1){
    var tempToStoreValueAt0 = copy[0];
    var lastIndex = copy.length - 1;
    copy[0] = copy[lastIndex];
    copy[lastIndex] = tempToStoreValueAt0;
  }
  return copy;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  var searchTermLowerCase = searchTerm.toLowerCase();
  for(let prop in haystack){
    var contentInProp = haystack[prop];
    if(isString(contentInProp)){
      var propToLowerCase = contentInProp.toLowerCase();
      var containsSearchTerm = propToLowerCase.includes(searchTermLowerCase);
      if(containsSearchTerm){
        var foundNeedle = true;
        return foundNeedle;
      }
    }
  }
  var notFoundNeedle = false;
  return notFoundNeedle;
};

const isString = str =>{
  return ((typeof str ==='string')||(str instanceof String));
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let newObject = {};
  str.match(/\b(\w+)\b/g).forEach(element => {
    element = element.toLowerCase();
    if(newObject[element]===undefined){
      newObject[element]=1;
    }else{
      newObject[element]++;
    }
  });
  return newObject;


};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
