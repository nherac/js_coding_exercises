
const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  }= require("../challenges/exercise007");


  describe("sumDigits", () =>{
    test("Info to show in console", () =>{ expect(sumDigits(123)).toBe(6);});
    test("Info to show in console", () =>{ expect(sumDigits(111)).toBe(3);});
    test("Info to show in console", () =>{ expect(sumDigits(1111)).toBe(4);});
    test("Info to show in console", () =>{ expect(sumDigits(11111)).toBe(5);});
 });


   describe("createRange", () =>{
     test("createRange", () =>{expect(createRange( 3 ,11 ,2 )).toStrictEqual( [3, 5, 7, 9, 11]);});


  });






 /*
   describe("FunctionName", () =>{
     test("Info to show in console", () =>{
        expect(FunctionName(Parameters here)).toBe(Expected result);
      });
   
    

  });
   */





