// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return [array[0], array[1]]
}

const returnLastTwoDrivers = function(array){
    return [...array.slice(array.length - 2)]
}

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