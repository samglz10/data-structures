/*
A number is basically the same as we think of normal numbers;
*/

// Just llike all other data types, we can store them in variables
const lunchMoney = 25;

// We can perform 5 basics arithmetic operations
const lunchMoneyMinus5 =  lunchMoney - 5;

const lunchMoneyPlus5 = lunchMoney + 5;

const lunchMoneyTimesTwo = lunchMoney * 2;

const lunchMoneyInHalf = lunchMoney / 2;

const lunchMoneyRemainderDividedBy7 = lunchMoney % 7;

// We can disrupt the normal order of operations using ()

// Currently, this is 5/6, then plus one
// I want to it to be 5/7
const eq = 5 / (6 + 1)

// () also make it easier to read and understand the order of things

// Often times, you will get a string but need to perform numerical operations on it.
// So you'll need to convert to number
const stringNumber = "100.5";

const binaryNumber = "10010000";

// Let's say i want to convert it to a number that has no decimals
const numberFromString = parseInt(stringNumber, 10);

const numberFromBinaryString = parseInt(binaryNumber, 2);
//console.log(numberFromBinaryString);

const stringNumberWithDecimal = "99.64";

// Now let's convert stringNumberWithDecimal into a number which preserves the decimal

const decimalVariant1 = Number(stringNumberWithDecimal);
const decimalVariant2 = parseFloat(stringNumberWithDecimal);
// Float means floating point decimal. i.e. basically a number with decimal point

const ex1 = 5.89;
// Can you make a varaible ex2 which will round this down
const ex2 = Math.floor(ex1);
// Can youo make a variable ex3 which will round to closest, either up or down
const ex3 = Math.round(ex1);
// Can you make a variable ex4 will round to up always
const ex4 = Math.ceil(ex1);

// Can you take two to the power of eight

const twoToPowOfEight = Math.pow(2,8);

// Can you get square root of 625
const sqrtOf625 = Math.sqrt(625);

// Generate a random whole number between 0 and 100
const randBetween0And100 = Math.trunc(Math.random() * 100 );

//Generate an array of 100 random numbers that are all to 2 to the power of between 6 and 12;
//console.log(Date.now()) -this will log the amount of time it takes to process the 
function randomNumbers(){
    const base = 2;
    let randomNumbersArray = [];

    for(let i = 0; i < 100; i++){
        // Get one random value in range of 6-12 which will be Y
        const randomExp = Math.round(
            Math.random() * 5 // multiply by spread of range - 1
        ) + 6; // add lowest number in your range
        
        // We need to perform 2 to the power of Y
        
        randomNumbersArray.push(
            Math.pow(base, randomExp)
        );
    } 
    console.log(randomNumbersArray);
}
randomNumbers();
//console.log(Date.now())


/*
"hello worldl"
"practillle big LL"
"The quick brown fox jumps over the lazy dog"

*/