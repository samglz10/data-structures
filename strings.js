/**
 * Strings are a way to store a collection of characters
 * You can really think of how they work as an immutable, array of characters
 * Immutable meaning you can't change any value of the string directly, it has to be cloned
 */

const example = 'hello world';
const exampleUnderHood = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];

// To show you how strings work a lot like arrays. Can you access the element at the 4th position
// in exampleUnderHood
const fourthPosUh = exampleUnderHood[3]; // second 'l'
const fourthPosStr = example[3]; // second 'l'

// console.log(fourthPosStr); 

// Question: Would this code work?
example[0] = 'H'; // You cannot mutate a string, so this operation will not work
// JavaScript handles this gracefully, and just won't change the string
//console.log(example);

// Let's try to still accomplish this goal of uppercasing H
// When you can't mutate, that means to change something, we have to also clone it

// We need to get the earlier string without the first character
// And at the start we want to add 'H'

// 'H' + 'ello world';
const capitalizedExample = "H" + example.slice(1);
//console.log(capitalizedExample);

// Now we learned about slice, which essentially works the same as the array method
// Slice can do more than just grab everything after X index
// Let's just grab "o w" from the example string
const oWExample = example.slice(4,7);
//console.log(oWExample);

// Use an string method to create a new string that repeats example 5 times
// "hello worldhello worldhello worldhello worldhello world";

const repeatExample = example.repeat(5);
//console.log(repeatExample);

// Can you change the foo variable and add the word " bar" to the end?
let foo = "foo";
foo += ' bar'
// foo = foo + ' bar'

// "Foo Bar Bazz".split(" ")
// split says hey, everytime you encounter this character, split that chunk off into a seperate string
// Foo<SPLIT>
// Bar<SPLIT>
// Bazz

// Okay, now I'm gonna take all those pieces which were seperated by the <SPLIT>
// and shove them in an array
// ["Foo", "Bar", "Bazz"]


const numsString = "5,6,7,8,9,10"
// Turn this comma seperated string into an array
const stringNumsArray = numsString.split(",");

// I want you to loop over each character in this string
// And if a letter is capitalized, console log an exclamation mark
const newEx = 'HeLlO WoRLD';
for(let i = 0; i< newEx.length; i++){
    if (newEx[i] === newEx[i].toUpperCase()){
        //console.log('!')
    }
}

// Can you remove the whitespace from the start of this string
const bar = "    foo".trimStart();
//console.log(bar)

// Can you remove the whitespace from both sides of this string
const bar2 = "   fooo     ".trim();
//console.log(bar2);

// Can you see if this string includes another string "buzz"
const bar3 = "fizz buzzzz fizz".includes("buzz");
//console.log(bar3)

//watch algoexpert, data structures, do memory, arrays and then strings sections. 

//Loop through a string and determine if there are more than, or equal to or, less than 5 L's 
/*
const practiceL = "hello worldl";
let base = 0;
for(let i = 0; i < practiceL.length; i++){
    let helloIndex = practiceL[i];
        if (helloIndex === 'l' && base <= 5){
            base ++;
        }  
        else {
            console.log(`There are ${base} l's in the string`)
    }
    
}
  
*/

function BigCapitals(){
    const BigLL = "practillle big LL";
    let baseDos = 0;
        for(let i = 0; i < BigLL.length; i++){
            let BigLLIndex = BigLL[i];
                if (BigLLIndex === 'l' || BigLLIndex ==='L'){
                    baseDos ++;
                }  
                if(baseDos < 6){
                    console.log(`There are a total of ${baseDos} l's or L's`)
                }
                else {
                    return ;
                }
            }
    }

BigCapitals();

/*

// Loop through a string and create a new string from a string except that every new vowel is replace with a random one digit whole number
const randomWords = "The quick brown fox jumps over the lazy dog";
let vowels = ['a','e','i','o','u'];
function replaceVowels(){
    let randomNumber = Math.floor(
        Math.random()*10)
        console.log('initial random Number',randomNumber)
   for(let i=0; i < vowels.length; i++){
    for (let j = 0; j < randomWords.length; j++){
        if(vowels[i] === randomWords[j]){
            let numToString = randomNumber.toString();
            console.log(numToString);
            randomWords.replace(randomWords[j],numToString);
            console.log(randomWords)
        }
    }
   }
   console.log(randomWords)
}
replaceVowels();

/*
"hello worldl"
"practillle big LL"
"The quick brown fox jumps over the lazy dog"
*/