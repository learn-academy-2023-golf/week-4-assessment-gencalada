// // ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs");

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// // a) Create a test with an expect statement using the variable provided.
// // HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// describe ("shuffleRemovingFirst", () => {
//     it("Create a function that takes in an array, removes the first item from the array and shuffles the remaining items", () => {
//         const colorsArr1 = shuffleRemovingFirst([...colors1]);
//         const ColorsArr2 = shuffleRemovingFirst([...colors2]);
//         expect (colorsArr1).toEqual(expect.arrayContaining(colors1.slice(1)));
//         expect (ColorsArr2).toEqual(expect.arrayContaining(colors2.slice(1)));
//     });
// });

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // b) Create the function that makes the test pass.
// const shuffleRemovingFirst = (arr) => {
//     const RemovedElement = arr.shift();
//     arr.sort(() => Math.random() - 0.5);
//     return arr;
// }

// Pseudo code:
// input: an array
// output: a new array with the first element removed and remaining elements shuffled
// create functin name ===> shuffleRemovingFirst
// the function is taking in an array so arr would be a parameter.
// create logic that will first remove first element from array.
// create logic that will shuffle remaining elements in array
// return array.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe ("differenceTotalTally", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally", () => {
        expect (differenceTotalTally(votes1)).toEqual(11)
        expect (differenceTotalTally(votes2)).toEqual(-31)
    });        
});

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
const differenceTotalTally = (votes) => {
    return votes.upVotes - votes.downVotes
}

// Pseudo code:
//input: object containing upvotes tally and downvotes tally
// output: the total difference between the two votes
// create a function name ===> differenceTotalTally
// the function is taking in an object so obj would be a parameter
// create logic that will take (upvotes - downvotes)
// return a number showing the difference
