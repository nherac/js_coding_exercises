const {
    sumMultiples,
    //isValidDNA,
    //getComplementaryDNA,
    //isItPrime,
    //createMatrix,
    //areWeCovered
  } = require("../challenges/exercise006");

  /**
   * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 *  @param {Array} arr
 * @returns {Number}
   */
  describe("sumMultiples", () => {
    test("if there are not multiple numbers of 3 or 5", () => {
      expect(sumMultiples([1, 4, 7, 8, 1, 13])).toBe(0);
      expect(sumMultiples([0])).toBe(0);
      expect(sumMultiples([3])).toBe(3);
    });

    test("if the numbers in the array are only 0's", () =>{
        expect(sumMultiples([0,0,0,0])).toBe(0);
    });

    test("if the array is empty", () => {
        expect(sumMultiples([])).toBe(0);
    });

    test("if the array only contains multiple of 3", () => {
        expect(sumMultiples([3]).toBe(3));
        expect(sumMultiples([3,6,12])).toBe(21);

    });

    test("if the array contains multiple of 3 and other numbers", () => {
        expect(sumMultiples([1,2,3,4,6,7])).toBe(9);

    });

    test("if the array only contains multiple of 5 ", () => {
        expect(sumMultiples([5,25,50])).toBe(80);
    });

    test("if the array contains multiple of 5 and other numbers", () => {
        expect(sumMultiples([1,2,4,7,5,25])).toBe(30);

    });

    test("if the array contains only multiple of 5 and 3 only", () => {
        expect(sumMultiples([3,5,9,15])).toBe(32);
    });
    
    test("if the array contains only multiple of 5 and 3 only", () => {
        expect(sumMultiples([1,2,3,5,7,8,9,15])).toBe(32);
    });

  });