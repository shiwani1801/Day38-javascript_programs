//Write a program that takes a command-line argument n and prints a
//table of the powers of 2 that are less than or equal to 2^n till 256 is
//reached..

let fact =1;
while(fact<=256){
    console.log(fact)
    fact=fact*2;
}


// Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let tailCount = 0;
let headCount = 0;

while( headCount < 11 && tailCount < 11){
    let random =  Math.floor(Math.random() * 10) % 2;

    if(random===0){
        headCount++
    } else tailCount++;
}


if(headCount === 11){
    console.log("head won")
} else {
    console.log("tail won")
}

// Write a Program where a gambler starts with Rs 100 and places Re 1 bet
//until he/she goes broke i.e. no more money to gamble or reaches the
//goal of Rs 200. Keeps track of number of times won and number of bets
//made.


let start = 100;
let wins = 0;
let loss = 0;
while (start<200 && start > 0){
    let random =  Math.floor(Math.random() * 10) % 2;

    if(random===0){
        loss++;
        start--;
    } else {
        wins++;
        start++;
    }
    
}

if(start === 200){
    console.log("player won")
} else {
    console.log("player lost")
}

console.log("number of wins " + wins);
console.log("number of loss " + loss);