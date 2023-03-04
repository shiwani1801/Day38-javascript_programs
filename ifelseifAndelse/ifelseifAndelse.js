//Read a single digit number and write the number in word

function numberInwords(num){
    if(num===1){
        console.log("one")
    } else if(num===2){
        console.log("two")
    }else if(num===3){
        console.log("three")
    }else if(num===4){
        console.log("four")
    }else if(num===5){
        console.log("five")
    }else if(num===6){
        console.log("six")
    }else if(num===7){
        console.log("seven")
    }else if(num===8){
        console.log("eight")
    }else{
        console.log("nine")
    }
}

numberInwords(9);

// Read a Number and Display the week day (Sunday, Monday,...)

function dayInwords(num){
    if(num===1){
        console.log("Sunday")
    } else if(num===2){
        console.log("Monday")
    }else if(num===3){
        console.log("Tuesday")
    }else if(num===4){
        console.log("Wednesday")
    }else if(num===5){
        console.log("Thursday")
    }else if(num===6){
        console.log("Friday")
    }else{
        console.log("Saturday")
    }
}

dayInwords(1);

// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

function digitInwords(num){
    if(num===1){
        console.log("one")
    } else if(num===10){
        console.log("ten")
    }else if(num===100){
        console.log("hundred")
    }else if(num===1000){
        console.log("thousand")
    }else {
        console.log("other value")
    }
}


digitInwords(1000);
