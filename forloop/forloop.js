// Write a program that takes a command-line argument n and prints a table of the

// powers of 2 that are less than or equal to 2^n.

function printPowers(num){
    let pow=1;
    for(let i=1;i<=num;i++){
        pow=pow*2;
        console.log("2 pow " + i + " = " + pow)
    }
}

printPowers(10);

// Write a program that takes a command-line argument n and prints the nth harmonic number.

function findHarmonicValue(num){
    let harmonic=0;
    for(let i=1;i<=num;i++){
        harmonic+= (1/i);
    }

    console.log(num + " th harmonic is " + harmonic);
}

findHarmonicValue(10);


// Write a program that takes a input and determines if the number is a prime.

function checkPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num %i ===0 ) return false;
    }

    return true;
}

// Extend the program to take a range of number as input and output the Prime Numbers in that range.

function primeNumbersInRange(start, end){
    console.log("prime numbers are");
    for(let i=start;i<=end;i++){
        let isPrime = checkPrime(i);
        if(isPrime){
            console.log(i);
        }
    }
}

primeNumbersInRange(10,100);


// Write a program that computes a factorial of a number taken as input.

function getFact(num){
    let factorial=1;

    for(i=2;i<=num;i++){
        factorial = factorial*i;
    }

    console.log("factorial of " + num + " is " + factorial);
}

getFact(5);
