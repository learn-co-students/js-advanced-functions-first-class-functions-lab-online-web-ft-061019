// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => [arr[0], arr[1]]
const returnLastTwoDrivers = (arr) => [...arr.slice(arr.length - 2)]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
   return function (fare) {
      return fare * multiplier
   }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)
const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(driversArr, selectorFn) {
   return selectorFn(driversArr)
}