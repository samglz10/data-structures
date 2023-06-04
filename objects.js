/*
An object is a data structure which holds a set of key value pairs
Key - Value relationship is 1-1, all keys must be unique, values not neccesarily
What we call an "object" in JavaScript you may here referred to as either a struct or hashmap or map or dictionary
in other languages; JavaScript also has a thing called Map, which serves a similar purpose as an object.
*/

// Objects usage falls into two general categories

/* Structured Usage */
// Sometimes you know ahead of time the "shape", or what keys an object is supposed to have
// This is what other programming languages call a struct
// Let's imagine you're getting a user from the database

let newUser = {
    id: 1,
    username: "newuser1",
    displayName: "New User 1"
} 

// No matter what user you get out of the database, you expect all of them to have the same keys right?
// Some of them may not have associated values with all keys, if a key is optional
// But generally they'll all the same structure

/* Unstructured usage */
// Sometimes the keys in your object can't be predetermined. They could change during the runtime
// of your application dramatically. Keys can be added or removed

// This object associates a football team with a certain amount of games won
let footballGamesWon = {
    hogs: 0,
    lions: 8,
    patriots: 9,
    broncos: 4
}

footballGamesWon.dawgs = 5;



// Maybe you have an input field where a user can input a team name and score
// So arbitrary teams will get added at run time

// Let's imagine you have no knowledge of the initial keys in the object above
// This changes how you interact with the object

// Properties can be referenced by putting the object name then .PROPETY_NAME
footballGamesWon.hogs;

// Properties can be modified by referencing a propety and reassigning it
footballGamesWon.patriots = 1;

// Referencing a property with another variable requires a bit different syntax
const key = 'dawgs';
footballGamesWon[key];

/* Unstructured Object Activity */
// So I have an array of postIds which every occurence of a postId in the array
// represents a like on that post.
// I want to create an object, where the keys are the postIds and the values are how many likes each post got

const likedPostIds = ['A', 'B', 'A', 'C', 'A', 'D', 'F', 'O', 'B', 'B', 'A', 'C', 'O'];

let postIdsNumLikes = {
    A: NaN
};

postIdsNumLikes['A'] // number | undefined

for(let i =0; i < likedPostIds.length; i++){
    const postId = likedPostIds[i]
    if (postId in postIdsNumLikes) { // If key is already in there with existing score
        // postIdsNumLikes[postId] += 1; does the same as below
        postIdsNumLikes[postId] = postIdsNumLikes[postId] + 1;
    } else {
        postIdsNumLikes[postId] = 1;// Set an initial for key if it's not in there already
    }
}

let myNum: number | undefined = 0;

// do something if the number is defined
if (myNum !== undefined) {
    myNum += 1;
}

let myNumReversedBool = myNum === 0;


let message = '';
if (message?.length > 0) {
   // console.log(message);
}

// Truthy (T) & falsy (F)
// 1999 - T
// NaN - F
// true - T
// false - F
// "" - F
// "     " - T
// null -F
// undefined -F
// 0 - F
// ['f'] -T
// {} - T
// [] - T


// Watch videos on AlgoExpert
// Complete strings practice
// Complete unstructured objects practice

// Keeping score
const scores = [
    ['TypeScript', 'JavaScript'], // TypeScript (index 0 ) is victor
    ['Ruby', 'JavaScript'],
    ['Python', 'Ruby'],
    ['TypeScript', 'Python'],
    ['Rust', 'TypeScript'],
    ['C', 'C++'],
    ['Rust', 'C++'],
    ['Rust', 'C']
];
const scoreObj = {};
// In this array, each array inside of it represents a match between two programming languages
// The one at index 0 is the victor - Typescript > JavaScript

// I want you to create an object where the keys are a programing language
// And the value is how many "matches" that programming language won

/*
your result should end up like this
const scoreObj = {
    TypeScript: 2,
    Ruby: 1,
    Python: 1,
    C: 1,
    Rust: 3
}
*/
console.log(scoreObj);