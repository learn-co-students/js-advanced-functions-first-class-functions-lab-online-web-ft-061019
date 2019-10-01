// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
let driverSlice = drivers.slice(0, 2)
return driverSlice
}

const returnLastTwoDrivers = function(drivers){
    let lastTwoDrivers = drivers.slice(2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(num){
    return function(fare){
        return num * fare
    }
}


function fareDoubler(fare){
    let doubler = fare * 2
    return doubler 
   }

function fareTripler(fare) {
    let tripler = fare * 3 
    return tripler 
}

function selectDifferentDrivers(arrayOfDrivers, selectorFn) {
    return selectorFn(arrayOfDrivers)
 }