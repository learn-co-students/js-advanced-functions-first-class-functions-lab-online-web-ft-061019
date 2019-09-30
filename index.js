// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    let firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers
}

function returnLastTwoDrivers(drivers){
    let lastTwoDrivers = drivers.slice(2)
    return lastTwoDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer){
    return function(fare){
        return integer * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, driverOption) {
    return driverOption(drivers)
}