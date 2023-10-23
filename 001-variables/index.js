// A variable is a space in memory where we can store data
/* 
We can declare a variable with the keyword var, let or const
var is used for global variables or global scope
let is used for local variables or local scope
const is used for constants

We can delcare a variable with let and initialize it later
Example:
let variable;
variable = 'value';

We can declare a variable with let and initialize it in the same line
Example:
let variable = 'value';

We can't declare a variable with const and initialize it later
Example:
const variable;
variable = 'value'; // This will throw an error
We neet to initialize a const variable in the same line
Example:
const variable = 'value';
*/

// Sintaxis in JS
let variable = 'value';

// Data types
/*
String
Number
Boolean
*/

//String
/* 
We can write a string with single 'quotes' or double "quotes" or `backticks`
*/
let string = 'Hello World';

//Number
/*
We can write a number with or without decimals
*/
let number = 10;
let number2 = 10.5;

//Boolean
/*
A boolean is a data type that can have only two values: true or false
*/
let boolean = true;
let boolean2 = false;

/* 
Special data types
undefined
null
NaN
*/
let undefinedVariable;
console.log('Undefined variables:');
console.log(undefinedVariable)
// The value is undefined because we didn't assign a value to the variable

let nullVariable = null;
console.log('Null variables:');
console.log(nullVariable)
// The value is null because we assigned the value null to the variable

let num3 = 10;
let num4 = 'Hello';
console.log('NaN variables (10 * "Hello") :');
console.log(num3 * num4);
// The value is NaN because we can't multiply a number with a string

//Saving data with prompt function
let user_name = prompt('What is your name?');
console.log('Name variable:');
console.log(user_name);
//Prompt is a function that shows a dialog box with a message and an input field
//The value of the input field can be saved in a variable
