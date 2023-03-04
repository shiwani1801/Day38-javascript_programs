//Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.

let random =  Math.floor(Math.random() * 10);
console.log(random);

// Use REPL – Use Random to get Dice Number between 1 to 6

random =  Math.floor(Math.random() * 10) % 6 + 1;
console.log(random);

// Use REPL – Add two Random Dice Number and Print the Result

let random1 =  Math.floor(Math.random() * 10) % 6 + 1;
let random2 =  Math.floor(Math.random() * 10) % 6 + 1;
console.log(random1+random2);

// Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,then find their sum and the average

let sum=0;
for(let i=0;i<5;i++){
  random = Math.floor(Math.random() * 90) + 10;
  sum=sum+random;
}

console.log("sum is " + sum);
console.log("Average is " + sum/5);
