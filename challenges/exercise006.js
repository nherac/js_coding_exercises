const { TestScheduler } = require("@jest/core");

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");

  return arr.filter(num => num%3==0 || num%5 == 0).reduce((acc,num)=> acc + num,0); 
  
};

/*
Pending try to replicate the Java 8 functionalite of predicate.andThen()
const multipleOfThree  =  number => number % 3 == 0;
const multipleOfFive = number => number % 5 == 0;
const or = (...conditions) => (...args) => conditions.reduce((a,b)=>a||b(...args),false);
https://codereview.stackexchange.com/questions/254675/emulate-java-8-predicate-chaining-in-javascript

*/

/**
 * This function will receive a string of characters and should return true/false 
 * depending on whether it is a valid DNA string. 
 * A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let letterInDNA = /^[ACGT]*$/;
  return letterInDNA.test(str);
};

/**
 * This function will receive a valid DNA string (see above) 
 * and should return a string of the complementary base pairs. 
 * In DNA, T always pairs with A, and C always pairs with G. 
 * So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let result = str.split("")
                  .map(letter =>translateToComplementari(letter))
                  .join("");
  return result;
};

const translateToComplementari = str => {
  switch(str){
    case "A":return "T";
    case "C":return "G";
    case "G":return "C";
    case "T":return "A";
  }

};

/**
 * This function should receive a number and 
 * return true/false depending on whether it is a prime number or not.
 * A prime number is a number that can only be divided 
 * evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */



const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n <= 1) throw new Error ("Prime numbers starts at 2");
  if(!isItPrime.previousAnswersCache){
    isItPrime.previousAnswersCache = {}
  }
  let theCheckedNumberIsInTheCache = isItPrime.previousAnswersCache[n]!== undefined;
  if(theCheckedNumberIsInTheCache){
    return isItPrime.previousAnswersCache[n];
  }
  let yesThisNumberIsPrime = true;
  for(let i = 2; i<= lowerLimit(n); i++){
    if(n % i === 0){
      yesThisNumberIsPrime = false;
      break;
    }
  }
  return  isItPrime.previousAnswersCache[n] = yesThisNumberIsPrime;
};

const lowerLimit = n  => {
  return Math.floor(Math.sqrt(n));
};

/**
 * This function should receive a number and
 * return an array of n arrays, each filled
 * with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
