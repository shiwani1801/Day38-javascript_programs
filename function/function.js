//Help user find degF or degC based on their Conversion Selection. Use
//Case Statement and ensure that the inputs are within the Freezing Point (
//0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )

function getTemperatureIndegC(temperature){
    let degC = (temperature - 32) * 9/5;
    console.log(temperature + " degF = " + degC + " degC")
}

function getTemperatureInDegf(temperature){
    let degF = temperature*(9/5) + 32;

    console.log(temperature + " degC = " + degF + " degF")
}



getTemperatureInDegf(0)
getTemperatureIndegC(32)

//Write a function to check if the two numbers are Palindromes

function checkPalindrome(num1,num2){
    let reverse = getReverse(num2);

    if(num1 === reverse){
        console.log(num1+ " and " + num2 + " are palindromes ")
    } else {
        console.log(num1+ " and " + num2 + " are not palindromes ")
    }
}

function getReverse(num){
   let reverse = 0;
   let mul = 10;

   while(num != 0){
    let mod = num%10;
    reverse= reverse * mul + mod;
    num = Math.floor(num/10);
   }
   return reverse;
}

checkPalindrome(123,321)
checkPalindrome(123,322)

// Take a number from user and check if the number is a Prime then show that its palindrome is also prime

function checkPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num %i ===0 ) return false;
    }

    return true;
}

function checkPalindromPrime(num){
    let isPrime = checkPrime(num);

    if(isPrime){
        console.log(num + " is prime");
        let palindrome = getReverse(num);
        isPrime = checkPrime(palindrome);
        if(isPrime){
            console.log("palindrome " + palindrome + " is also prime ")
        } else {
            console.log("palindrome " + palindrome + " is not prime ")
        }
    } else {
        console.log(num + " is not prime"); 
    }
}

checkPalindromPrime(7)
