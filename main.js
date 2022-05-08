let raceNumber = Math.floor(Math.random() * 1000);
var earlyRegistered = false;
var nonEarlyRegistered = false;
var runnersAge = 12;

if (runnersAge >= 18 && earlyRegistered === true){
    raceNumber = raceNumber + 1000;
} else {
    raceNumber;
} 
if (runnersAge >= 18 && earlyRegistered === true){
    console.log('Good day! You registered early so your race time starts at 9:30AM. Your race number is ' + raceNumber);
} else if (runnersAge >= 18 && earlyRegistered === false){
    console.log('Good day! You registered late so your race time starts at 11:00AM. Your race number is ' + raceNumber);
} else if (runnersAge <= 17){
    console.log('Youth registrants run at 12:30PM, regardless of registration. Your race number is ' + raceNumber);
}
