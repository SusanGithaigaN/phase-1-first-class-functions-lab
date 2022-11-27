// Code your solution in this file!
//Create array drivers.
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// Return array containing the first two drivers from the passed-in array.
const returnFirstTwoDrivers = function(){
 return drivers.slice(0, 2)
}
// Return array containing the last two drivers from the passed-in array.
const returnLastTwoDrivers= function (){
    return drivers.slice( 2);
}
//Combines the values of returnFirstTwoDrivers and returnLastTwoDrivers.
// returnFirstTwoDrivers is it's first element.
//and returnLastTwoDrivers is it's last element.
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
// Takes in one argument, an integer, and returns a function that multiplies the fare for a ride.
function createFareMultiplier(fareValue){
    return function (fare){
        return fareValue * fare;
    };
}
// Double the fare by invoking createFareMultiplier().
// fareDoubler function accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);
// Tripple the fare
// fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler =  createFareMultiplier(3);
// Takes two arguments.
// Using the two arguments, returns either the first two drivers or the last two drivers.
function selectDifferentDrivers(drivers, selectingDrivers){
        return selectingDrivers(drivers)
    }
