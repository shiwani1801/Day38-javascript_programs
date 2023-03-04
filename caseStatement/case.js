//Read a single digit number and write the number in word

function numberInwords(num){
    switch(num){
        case 1:
            console.log("one")
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        default:
            console.log("other value");
    }
}

numberInwords(9);

// Read a Number and Display the week day (Sunday, Monday,...)

function dayInwords(num){
    switch(num){
        case 1:
            console.log("Sunday")
            break;
        case 2:
            console.log("Monday")
            break;
        case 3:
            console.log("Tuesday")
            break;
        case 4:
            console.log("Wednesday")
            break;
        case 5:
            console.log("Thursday")
            break;
        case 6:
            console.log("Friday")
            break;
        case 7:
            console.log("Saturday")
            break;
        default:
            console.log("other value");
    }
    
}

dayInwords(1);

// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

function digitInwords(num){
    switch(num){
        case 1:
            console.log("one")
            break;
        case 10:
            console.log("ten")
            break;
        case 100:
            console.log("hundred")
            break;
        case 1000:
            console.log("thousand")
            break;
        default:
            console.log("other value");
    }
}


digitInwords(1000)