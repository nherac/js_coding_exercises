
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

  var  sampleForGetScreenTimeAlertList = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                   { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                   ]
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
                  { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                  { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                  { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                  ]
     },
   ];

   describe("getScreentimeAlertList", () =>{
    test("Info getScreentimeAlertList", () =>{
       expect(getScreentimeAlertList(sampleForGetScreenTimeAlertList)).toStrictEqual(["beth_1234"]);
     });
  
   

 });






 /*
   describe("FunctionName", () =>{
     test("Info to show in console", () =>{
        expect(FunctionName(Parameters here)).toBe(Expected result);
      });
   
    

  });
   */





