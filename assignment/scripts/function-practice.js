console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('in helloName');
  return `Hello, ${name}!` ;
} // end helloName
// Remember to call the function to test

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log('in addNumbers');

  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
} // end addNumbers

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber) {
  console.log('in multiplyThree');
return firstNumber * secondNumber * thirdNumber;
}//end of multiplyThree


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  console.log('in isPositive');
  if (number > 0) {
    return true;
  }
  return false;
}// end of isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  console.log('in getLast');
  if (array.length === 0){
    return undefined;
  } //end of if
  else{
    return array[array.length -1];
  } //end of else
  }// end of getlast
  
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  console.log('in find');
  for (let i = 0; i < array.length; i++ ){
    if( array[i] === value) {
      return true;
    } //end of if
  } //end of for
  return false;
} //end of find function

let numberArray = [1, 2, 3, 4, 5];
console.log(find(2, numberArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
console.log('in isFirstLetter', letter, string);
let stringLetter = string.slice(0,1);
if (stringLetter === letter){
  return true;
}//end of if
return false;
}// end of isFirstLetter
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  console.log('in sumAll', sum);

  // TODO: loop to add items

  for( i = 0; i < array.length; i++) {
    sum += array[i];
    console.log('test1', sum);
  }//end of for

  // TODO: return the sum

  console.log('test3', sum);
return sum;
}// end of sumAll



// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  console.log('In allPositive');
  const positive = array.filter(function(number){
    return number > 0;
  }// end number function
  )
  console.log('In allPositive again', positive);
  return positive; 
}// end of allPositive


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// https://edabit.com/challenge/rvsvGvqZ3BzNieKqA
// "A word is on the loose and now has tried to hide in a crowd of tall letters!"
// "help write a function to detect what the word is"

function detectWord(str){
  console.log('in detectWord');
  return str.replace(/[^a-z]/g, '');
  // the '/' are delimiters: I believe they are used to show the start and end of a string
  // the ^ means to find everything that is NOT a-z (for repacement)
  // the g = global. if that was not there it would just return the first hit
  // which would be 'c' instead of the whole string.
  // the end '' essentially removes the unwanted parts of the string
  // it is definitely an interesting to go about the problem, instead of
  // pulling out the items I want, I remove the ones I do not want.

}//end of detectWord
let crowdString = 'UcUNFYGaFYFYGtNUH';
let word = detectWord(crowdString);
console.log('Hidden word 1 is:', word);

//had some issues on getting the correct word to change from cat. 
// thought I could just redefine crowdString to get it to work.
crowdString = 'bEEFGBuFBRrHgUHlNFYaYr';
word = detectWord(crowdString);
console.log('Hidden word 2 is:', word);

crowdString= 'YFemHUFBbezFBYzFBYLleGBYEFGBMENTment';
word = detectWord(crowdString);
console.log('Hidden word 3 is:', word)
//End thoughts: I highly enjoyed this problem. I feel like I will end up
// filtering and manipulating a lot of data in my future so to add this
// fairly simple tool in my kit will only help me grow. I truly learned a lot from this!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}