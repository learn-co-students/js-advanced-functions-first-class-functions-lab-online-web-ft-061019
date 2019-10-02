// Code your solution in this file!
const returnFirstTwoDrivers = (array) => [array[0], array[1]]
const returnLastTwoDrivers = (array) => [...array.slice(array.length -2)]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multi) {
    return function(fare) {
        return fare * multi
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)
const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(arrayOfDrivers, selectFunction){
    return selectFunction(arrayOfDrivers)
}