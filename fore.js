
// Write a for loop that iterates from 0 to 100, inclusive. Print each number
// for(let i = 0; i <= 100; i++){
//     console.log(i)
// }

// Write a for loo p that iterates from 0 to 100, inclusive.
// Skip numbers divisible by 5 and print those unskipped numbers
// for(let i = 0; i <= 100; i++){
//     if(i % 5 !== 0){
//         console.log(i)
//     }
// }

// Write a for loop that iterates from 0 to 150, inclusive
// Only loop over numbers divisible by 7
// 0,7,14,21,28,35

// for(let i =0; i <= 150; i += 7) {
//     console.log(i);
// }

// Loop over the characters from index 2 to index 6, inclusive in this string. Print each character
// const myStr = "Hello World";
// for(let i = 2; i <= 6; i++){
//     console.log(myStr[i])
// }

// const myArr = [4, "banana", 5, "bacon", true, false, null, NaN, 'F'];
// // Loop over this array and log at each odd index
// for(let i = 1; i < myArr.length; i+=2){
//     console.log(myArr[i])
// }

// const myObj = { foo: true, bar: false, bazz: 'boom' };
// // Loop over all the keys of this object and print each one
// for (key in myObj){
//     console.log(key)
// }

// Loop over all the keys of myObj, print each key with its corresponding in this format `key~value`
// for(key in myObj){
//     console.log(`${key}~${myObj[key]}`)
// }

// const myArr2 = [9,6,7,32,4,3,0.1,500,1000,1000000];
// // loop through this array and find the highest number. than print it
// // guaranteed array has at least one item
// let highestNumber = myArr2[0];
// for(let i = 0; i < myArr2.length; i++){
//     if(myArr2[i] > highestNumber){
//         highestNumber = myArr2[i]
//     }
// }
// console.log(highestNumber);


const myArr3 = ["hello", "world", "ball", "call", "hall", "himmelstalundshallen", "knawl", "xylophone"];
// Find out which item in the array has the most l's and how many
let mostLs = {
    /** @type {string | null} */
    word: null,
    /** @type {number} */
    lQuantity: -1,
}
for(let i = 0; i < myArr3.length; i++){
    let lCounter = 0;
    let currentWord = myArr3[i]

    for(let j = 0; j < currentWord.length; j++){
        let currentWordCharacter = currentWord[j] 
        if (currentWordCharacter === "l" || currentWordCharacter ==="L"){
            lCounter += 1;
        } 
    }
    if(lCounter > mostLs.lQuantity){
        mostLs.word = currentWord;
        mostLs.lQuantity = lCounter;
    }
}
//console.log(mostLs)

// Finish up objects
// Do for practice below

function matrixRowMultiplier() {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    /** @type {number[]} */
    const result = [];

    for (let x = 0; x < matrix.length; x += 1) {
      const row = matrix[x];
      let rowTotal = 1;
      
      for (let y = 0; y < row.length; y += 1) {
        const cell = row[y];
        rowTotal = cell * rowTotal;
      }

      result.push(rowTotal);
    }
    return result;
}

const matrixRowProducts = matrixRowMultiplier();
console.log(matrixRowProducts);

function newMatrix() {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
let firstTotal = 1;
let secondTotal = 1;
let finalTotal = 1;

  for(let i = 0; i < matrix.length; i++){
    let firstIndex = matrix[i];
    for (let j=0; j < firstIndex.length; j++){
        let secondIndex = firstIndex[j];
        //console.log('second index', secondIndex)
        if (firstIndex === matrix[0]){
            firstTotal = firstTotal * secondIndex;
          } if(firstIndex === matrix[1]){
            secondTotal *= secondIndex;
          } if(firstIndex === matrix[2]){
            finalTotal *= secondIndex
          }
        }
    }
    const result = [firstTotal, secondTotal,finalTotal]
    // console.log(result)
  } 

newMatrix();

// Given this matrix, I want you to create an array that is each row of the matrix multiplied together
// Then log to check your work
/*
result should be [6, 120, 504]
breakdown:
[
    6, // 1 * 2 * 3
    120, // 4 * 5 * 6
    504, // 7 * 8 * 9
] 
*/

const words = ["You're", "such",  "a", "f***in'", "ho", "I", "love", "it"];
// Using a for loop, combine these words together, seperated by spaces, to make the complete sentece
// Result should be "You're such a f***in' ho, I love it"
function flattenWords(){
  let finalWords = '';

  for(let i = 0; i < words.length; i++){
    let newWord = words[i];
    let space = " ";
    let flattenedWords = newWord.concat(space);
    finalWords += flattenedWords;
    
  }
  console.log(finalWords);
}

flattenWords();

const wordMatrix = [
    ["The", "ability", "to"],
    ["speak", "does", "not"],
    ["make", "you", "intelligent"],
]


// Using a for loop, flatten this array
// result should be
// ["The", "ability", "to", "speak", "does", "not" "make", "you", "intelligent"]

function starWarsQuote(){
  let finalQuote = '';
  for(let i = 0; i < wordMatrix.length; i++){
    let firstIndex = wordMatrix[i];
    for(let j = 0; j < firstIndex.length; j++){
      let secondIndex = firstIndex[j];
      finalQuote = finalQuote + secondIndex + ' ';
    }
  }
  console.log(finalQuote);
}
starWarsQuote();

// HARD: do this last
// Use a **for loop** (or while loop) to sort these words in place alphabetically
// There's a method on arrays called .sort(), dont use it
// Feel free to use Google or AlgoExpert to learn about sorting algorithms
// In-place means don't make a new array, mutate the existing one
// Result: ["aren't", 'droids', 'for.', 'looking', 'the', 'these', "you're"]

// Watch Bubble Sort, Insertion Sort, or Selection Sort on AlgoExpert

const words2 = ["these", "aren't", "the", "droids", "you're", "looking", "for."]

function alphaDroids(){
  for( let i = 0; i < words2.length-1; i++){ //loop through the array lenght -1 because the last number will be the largest
    let firstIndex = words2[i]; //set variable for 
    for(let j = 0; j < firstIndex.length; j++){ 
      let secondIndex = words2[j];

      if(firstIndex > secondIndex){
        let finalQuote = [firstIndex, secondIndex] = [secondIndex, firstIndex]
        console.log(finalQuote);
      }
    }
  }
} alphaDroids();

