// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let firstTwo = array.slice(0, 2)
    return firstTwo;
}

const returnLastTwoDrivers = function(array){
    let lastTwo = array.slice(2)
    return lastTwo;
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(drivers, selectFunction){
    return selectFunction(drivers)
}