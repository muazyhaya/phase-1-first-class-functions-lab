const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    return drivers.slice(0,2);
    }

function returnLastTwoDrivers() {
    return drivers.slice(2);
    }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier * fare;
    }
}
function fareDoubler(fare) {
    return fare * 2;
}
function fareTripler(fare) {
    return fare * 3;
}
function selectDifferentDrivers(drivers, myFunDrivers) {
    return myFunDrivers();
}