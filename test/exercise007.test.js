
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

   var  sampleForGetScreenTimeAlertList2 = [
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
	{
      username: "Third_User",
      name: "Third User",
      screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 100, instagram: 56, facebook: 61} },
                   ]
     }
   ];


   describe("getScreentimeAlertList", () =>{
    test("Info getScreentimeAlertList", () =>{
       expect(getScreentimeAlertList(sampleForGetScreenTimeAlertList, "2019-05-04")).toStrictEqual(["beth_1234"]);
     });

     test("Info getScreentimeAlertList 2", () =>{
      expect(getScreentimeAlertList(sampleForGetScreenTimeAlertList2, "2019-05-04")).toStrictEqual(["beth_1234", "Third_User"]);
    });
 });


 describe("hexToRGB", () =>{
  test.only("Info to show in console", () =>{
     expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
 
   });
 
 test("Info to show in console", () =>{
     expect(hexToRGB("#221155")).toStrictEqual("rgb(34,17,85)");
   });
 
 test("Info to show in console", () =>{
     expect(hexToRGB("#000000")).toStrictEqual("rgb(0,0,0)");
   });
 
 test("Info to show in console", () =>{
     expect(hexToRGB("#010101")).toStrictEqual("rgb(1,1,1)");
   });
 
 test("Info to show in console", () =>{
     expect(hexToRGB("#FFFFFF")).toStrictEqual("rgb(255,255,255)");
   });
 
 test("Info to show in console", () =>{
     expect(hexToRGB("#0F0F0F")).toStrictEqual("rgb(15,15,15)");
   });
 
 test("Info to show in console", () =>{
     expect(hexToRGB("#F0F0F0")).toStrictEqual("rgb(240,240,240)");
   });
  

});

var boardSample1 = [
  [null, null, null],
  ["X", "X", "X"],
  ["0", "0", "0"]
 ];

var boardSample2 = [
  ["X", "0", null],
  ["X", null, "0"],
  ["X", null, "0"]
 ];

var boardSample3 = [
  ["0", "X", null],
  ["0", null, "X"],
  ["0", null, "X"]
 ];




test("Info to show in console", () => {
  expect(findWinner(boardSample1)).toBe(null);
});










