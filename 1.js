// Write a JavaScript program to display the current day and time in the following format.

let date  = new Date();

//Display current day

let currDay =   date.getDay();
console.log(currDay);
switch(Number(currDay))
{
    case 0: 
    console.log("Current Day : Sunday");
    break;
    case 1: 
    console.log("Current Day : Monday");
    break;
    case 2: 
    console.log("Current Day : Tuesday");
    break;
    case 3: 
    console.log("Current Day : Wednesday");
    break;
    case 4: 
    console.log("Current Day : Thursday");
    break;
    case 5: 
    console.log("Current Day : Friday");
    break;
    case 6: 
    console.log("Current Day : Saturday");
    break;
    default:
        console.log("Error")
}


//Display current time
//Date object is created according to current computr system settings 
let currHours = date.getHours();
let currMinute = date.getMinutes();
let currYear = date.getFullYear();

let randDATE = date.getTime();

console.log(currHours + " : " + currMinute + " : " + currYear);
console.log(Date.now());


// Display time and date according to various timezones : Places are : Pune, London, Paris, Berlin, Tokyo and New York

console.log("Current time in Pune is" + currHours + " : " + currMinute + " : " + currYear);


// 5 steps to convert time according to timezones

//1. Obtain date in msec

//2. Obtain offset in msec

//3.Obtain current utc time by adding offset to it

// Many countries also follow daylight saving so important to keep that in mind as well

let localeTime = new Date();
let newTime = localeTime.getTime();
console.log(localeTime.getTime());

let offsetVar =  localeTime.getTimezoneOffset();

console.log(offsetVar * 60 * 1000);



