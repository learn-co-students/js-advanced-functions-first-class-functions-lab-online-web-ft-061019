const returnFirstTwoDrivers = function(drivers) {
    let newDrivers = drivers.slice(0, 2)
    return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    let newDrivers = drivers.slice(2, 4)
    return newDrivers;
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(num) {
    return function(fare) {
        return (fare * num)
    }
}


const fareDoubler = (fare) => createFareMultiplier(2)(fare) 

const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}
