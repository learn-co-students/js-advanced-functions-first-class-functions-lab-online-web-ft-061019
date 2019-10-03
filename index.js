// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]]
const returnLastTwoDrivers = (drivers) => [...drivers.slice(drivers.length -2)]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiply) {
    return function(fare) {
        return fare * multiply
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)
const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(driversArray, selectFunction) {
    return selectFunction(driversArray)
}