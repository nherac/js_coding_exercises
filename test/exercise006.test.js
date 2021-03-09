const {
    sumMultiples, isValidDNA,
    //isValidDNA,
    //getComplementaryDNA,
    //isItPrime,
    //createMatrix,
    //areWeCovered
  } = require("../challenges/exercise006");

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
        //expect(sumMultiples([3]).toBe(3));
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

  describe("isValidDNA", () => {
    test("the string doesn't contains any ADN chars", () =>{
      expect(isValidDNA("KKKKKOOOOnms13?")).toBe(false);
      });

      test("the string contains other characteres but very close to ADN", () =>{
          expect(isValidDNA("ACGTACGTACGTE")).toBe(false);
      });

      test("the string contains valid ADN Characteres", () =>{
        expect(isValidDNA("ACGTACGTACGT")).toBe(true);
      });

      test("the string contains only A Characteres", () =>{
        expect(isValidDNA("AAAAA")).toBe(true);
      });

      test("the string contains only C Characteres", () =>{
        expect(isValidDNA("CCCC")).toBe(true);
      });

      test("the string contains only G Characteres", () =>{
        expect(isValidDNA("GGGG")).toBe(true);
      });

      test("the string contains only T Characteres", () =>{
        expect(isValidDNA("TTTT")).toBe(true);
      });

  });