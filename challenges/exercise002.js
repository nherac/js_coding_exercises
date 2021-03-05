function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city==="Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  var BUS_CAPACITY = 40;
  var totalBuses = 0;
  var fullBusses =Math.floor(people / BUS_CAPACITY);
  var isThereABusNotFull = (people % BUS_CAPACITY > 0);
  if(isThereABusNotFull){
    totalBuses = fullBusses + 1;
  }else{
    totalBuses = fullBusses;
  }
  return totalBuses;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var numberOfSheeps = 0;
  var SHEEP="sheep";
  for(var i=0;i<arr.length;i++){
    if(arr[i]===SHEEP){
      numberOfSheeps++;
    }
  }
  return numberOfSheeps;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address === undefined) throw Error("address is undefined");
  if (person.address.city === undefined) throw new Error("city is required");
  if (person.address.postCode === undefined) throw new Error("post code is required");
  var postCodeFirstLetteIsM= person.address.city.charAt(0)=== "M";
  var cityIsManchester = person.address.city === "Manchester"
  var expectedCondition = (postCodeFirstLetteIsM && cityIsManchester);
  return expectedCondition;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
