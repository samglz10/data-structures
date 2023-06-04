/**
Fundamentally, arrays are a way to store a collection (or list) of data
They're ordered by nature, using the index, which represents the position of a certain item
Items are accessed using the index, which can retrieve the item at a certain position
*/

const withItemsArray2 = ["foo", "barr", "bazz", "john", "a", "b"]
// what's the length? - 6
// what's the last index? - 5

/**
Creating arrays
 */
const emptyArray = []
const withItemsArray = ["foo", "barr", "bazz", "john"]
// this accompishes the same as `emptyArray`, and typically the syntax on line 10 is preffered
const constructorArray = new Array();

/**
Access an array item
*/

// Sometimes you know what index (position) the item you're looking for is at
// Let's grab the first item in the withItemsArray
// The syntax is `array_name[index]`
const firstIndex = withItemsArray[0]

// Position and index should be two seperate ideas, if something is in the first position,
// it's just the first item in the list. However, if something is at index 1, technically
// that is the __2nd_ position
const secondPosition = withItemsArray[1]

// We can also programatically get the last item of the array
// Because we can access an arrays length with the .length property
// Length does not start at 0 index, normal concept of length
withItemsArray.length; // 4

// If we use .length to attempt to access last item
withItemsArray[withItemsArray.length]; // undefined

// To use .length to get the last item
// What's the last index of the array? - 3
// What's the length? - 4
// The relationship between the length of the array and last index is 
// there is a difference of 1, where length is larger than the index
// In a math equation sense, length = lastIndex + 1
// Rephrased, lastIndex = length - 1
 
// How can we use this relationship to get the last item in the array?
const lastItem = withItemsArray[
    withItemsArray.length - 1 // this is the same as the value stored on line 55
];

// YOu can even extract the length - 1 into a seperate variable
const lastIndex = withItemsArray.length -1;
// Now let's use the last index to get the last item in the array
const lastItem2 = withItemsArray[lastIndex];

// Modifiying Arrays

// Adding items to an array
// Just like lists in real life, we often add things after we initially create an array

let groceryList = ["bread", "eggs", "butter", "ground beef"];

// You just got to the store, and now the person you were shopping for wants to add bacon

// When we use .push, items are added **to the end of the array**
groceryList.push('bacon'); // ["bread", "eggs", "butter", "ground beef", "bacon"]

// Sometimes we need to items to the start as well. Let's say we also want to add
// guacomole and chips, but its super bowl sunday so we neeed to get those first
// Methods like unshift and push can take an unlimited amount of arguments to add to the array
groceryList.unshift('Guac', 'chips'); // ['Guac', 'chips', "bread", "eggs", "butter", "ground beef", "bacon"]

// Sometimes, as people you are shopping for often do, they change their minds
// And items need to be removed.
// Person you are shopping for actually wants you to lower cholesterol.
// So we need to remove bacon from the list
groceryList.pop('bacon'); // ['Guac', 'chips', "bread", "eggs", "butter", "ground beef"]

// Unforunately, we were too late to the store and there's also no guac and chips
// Let's remove these items from the list, in one line of code

// When using slice, there's something different about it than all the other methods we used so far
// slice creates a copy of the array, while all the other methods modifiy/mutate the array
// The good thing is, we can always reassign the original groceryList variable to be the new slice
// Think of slice like grabbing a piece, or a "slice" of the old array
const newGroceryListWithoutGuacChips = groceryList.slice(2); // ["bread", "eggs", "butter", "ground beef"]*
// * original groceryList hasn't changed, because slice makes a copy
// To reassign a variable, no keyword at the start (no let/const)
groceryList = newGroceryListWithoutGuacChips; // ["bread", "eggs", "butter", "ground beef"]

// Suddenly, you have decided you want to go keto. So bread has to go.
// While pop removes from end of array, shift removes from start of array
// To hold onto memories of better days, let's capture the value we just remove in a variable
groceryList.shift(); // ["eggs", "butter", "ground beef"]
const shiftElement = groceryList.shift(); // ["butter", "ground beef"]

// In your haste to join the keto kraze, you have removed your eggs
// Keto without eggs is pure misery so we need to add eggs back to the array
// let's keep it at the start, since eggs is really a keto staple
groceryList.unshift("eggs", "eggs"); // ["eggs", "eggs", butter", "ground beef"]

// In our eggxcitement, we have added eggs twice
// As you're watching some random youtube person, they reccomend avocado
// Let's replace the second eggs with avocado
// To replace an item in the array, first reference the array and a certain index
// array_name[index] = new_value
groceryList[1] = "avocado"; // ["eggs", "avocado", butter", "ground beef"]

// Since the grocery list is so much smaller, you're feeling a bit of a baller
// So let's replace the last item with skirt steak
/*
Technically, you know the last item is at index 3.
So you could just do
groceryList[3] = "skirt steak"
But for example let's imagine you don't know what number index the last item is
*/ 
groceryList[groceryList.length - 1] = "skirt steak"; // ["eggs", "avocado", butter", "skirt steak"]


/*
How to add to start of an array?
    Unshift
How to add to end of an array?
    Push
How to remove from start of an array?
    shift
How to remove from end of an array?
    pop
How to get a certain piece of an array?
    groceryList[1] 
How to change an item in the array?
    groceryList[1] = "avocado";
*/



const todos = ['mow lawn', 'get groceries', 'relax'];
console.log('initial todos', todos);

// let's perform some operations on this array

// add "clean basement" to the end of the array
// ['mow lawn', 'get groceries', 'relax', 'clean basement']
todos.push('clean basement');

// code here

console.log("added 'clean basement' to start", todos);

// change "get groceries" to "get drinks"
// ['mow lawn', 'get drinks', 'relax','clean basement']

// code here
todos[1] = "get drinks";

console.log("changed 'get groceries' to 'get drinks'", todos); // ['mow lawn', 'get drinks', 'relax', 'clean basement']

// add "take out trash" to the start of the array
// ['take out trash', 'mow lawn', 'get drinks', 'relax', 'clean basement']

// code here
todos.unshift('take out trash');


console.log("added take out trash to the start", todos)

// add "do laundry" to the start of the array
// ['do laundry', 'take out trash', 'mow lawn', 'get drinks', 'relax', 'clean basement']

// code here
todos.unshift('do laundry');

console.log("added 'do laundry' to the start", todos); 

// change "take out trash" to "take out trash and recyclables"
// ['do laundry', 'take out trash and recyclables', 'mow lawn', 'get drinks', 'relax', 'clean basement']

// code here
todos[1] = 'take out trash and recyclables';

console.log("changed 'take out trash' to 'take out trash and recyclables'", todos);

// change the last item to "go for a run"
// ['do laundry', 'take out trash and recyclables', 'mow lawn', 'get drinks', 'relax', 'go for a run']

// code here
todos[todos.length -1]='go for a run';

console.log("changed the last item to 'go for a run'", todos);

// change the first item to "home depot run"
// ['home depot run', 'take out trash and recyclables', 'mow lawn', 'get drinks', 'relax', 'go for a run']

// code here
todos[0] ='home depot run';

console.log("changed the first item to 'home depot run'", todos); 


// remove the first item
// ['take out trash and recyclables', 'mow lawn', 'get drinks', 'relax', 'go for a run']

// code here
todos.shift();
console.log("removed first item", todos);

// remove the last item
// ['take out trash and recyclables', 'mow lawn', 'get drinks', 'relax']

// code here
todos.pop();

console.log("removed last item", todos);

// add "a" and "b" to the end
// ['take out trash and recyclables', 'mow lawn', 'get drinks', 'relax', 'a', 'b']

// code here
todos.push('a','b');

console.log('added "a" and "b" to end of the list', todos)

// using the slice method, reassign the array to be index 1 through index 3 inclusive
// inclusive meaning keep the item at index 3
// ['mow lawn', 'get drinks', 'relax']

// code here
todos = todos.slice(1,4);

console.log('reassigned to be index 1 through index 3 inclusively', todos);

// BONUS: make everything capital using a loop
// ['MOW LAWN', 'GET DRINKS', 'RELAX']

// code here

// at max, i will be todos.length - 1
for(let i = 0; i < todos.length; i++){
    // Well, I know I need to change each item in the array
    // todos[i] = 
    // I know that uppercasing an item means I need to know the previous value of that item
    // todos[i] = todos[i]
    // Knowing that each item in todos is a string (todos[i])
    // A quick google search will tell you that all strings have toUpperCase method
    // todos[i] = todos[i].toUpperCase()

    todos[i] = todos[i].toUpperCase();
}

console.log(todos);

// console.log('CAPITALIZED TODOS', slicedMethod.toUpperCase());
