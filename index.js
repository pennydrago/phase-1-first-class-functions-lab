// Code your solution in this file!

const returnFirstTwoDrivers = function(driverNames) {
  return driverNames.slice(0,2);
};

const returnLastTwoDrivers = function(driverNames) {
  return driverNames.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function(fare) {
    return fare * number
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverNames, callback) {
  return callback(driverNames);
}
