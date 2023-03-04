// Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

function getMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }

        if(arr[i] < min){
            min = arr[i];
        }
    }

    console.log("max value is " + max);
    console.log("min value is " + min);
}

getMaxMin([111,101,345,913,819]);

// Write a program that takes a year as input and outputs the Year is a Leap Year or not
//a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
//divisible by 400.


function checkLeapYear(year){
    if( year % 400 ===0 || (year%4===0 && year%100 !== 0)){
        console.log("leap year");
    } else{
        console.log("not a leap year");
    }
}

checkLeapYear(2004);
checkLeapYear(2000);

// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let random =  Math.floor(Math.random() * 10) % 2;

if(random === 0){
    console.log("head");
} else{
    console.log("tail");
}


//Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.

function checkWithInRange(day,month){
    if((month== "mar" && day>=20 && day <=31) || (month==="apr" && day>=1 && day<=30) || (month==="may" && day>=1 && day<=31) || (month === "jun" && day>=1 && day<=30)){
        console.log("with in range");
    } else {
        console.log("out of range");
    }
}