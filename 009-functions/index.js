document.write(`<h1> Functions </h1>`);
document.write(`<p> Functions are a way to group a set of instructions to perform a specific task. </p>`);

document.write(`<h2> Declare a fuunction with <b>function</b> word </h2>`);
function greet(){
    let response = prompt("How was your day?");
    if (response == "good"){
        alert("That's good to hear!");
    }
    else if (response == "bad"){
        alert("I'm sorry to hear that.");
    }
    else{
        alert("I don't understand.");
    }
}

greet();
document.write(`
function greet(){ <br>
    let response = prompt("How was your day?"); <br>
    if (response == "good"){ <br>
        alert("That's good to hear!"); <br>
    } <br>
    else if (response == "bad"){ <br>
        alert("I'm sorry to hear that."); <br>
    } <br>
    else{ <br>
        alert("I don't understand."); <br>
    } <br>
} <br>
<br>
Calling the function: <br>
greet(); <br>
`);

document.write(`<h2> Declare a function storing it in a variable </h2>`);
const greet2 = function(){
    let response = prompt("How was your day?");
    if (response == "good"){
        alert("That's good to hear!");
    }
    else if (response == "bad"){
        alert("I'm sorry to hear that.");
    }
    else{
        alert("I don't understand.");
    }
}

greet2();

document.write(`
let greet2 = function(){ <br>
    let response = prompt("How was your day?"); <br>
    if (response == "good"){ <br>
        alert("That's good to hear!"); <br>
    } <br>
    else if (response == "bad"){ <br>
        alert("I'm sorry to hear that."); <br>
    } <br>
    else{ <br>
        alert("I don't understand."); <br>
    } <br>
} <br>
<br>
Calling the function: <br>
greet2(); <br>
`);

document.write(`<h2> Return </h2>`);
document.write(`<p> The return statement stops the execution of a function and returns a value from that function. </p>`);
function hello(){
    return "Hello!";
}
let message = hello();
document.write(`
function hello(){ <br>
    return "Hello!"; <br>
} <br>
`)

document.write(`hello() = ${message} <br>`);

document.write(`<h2> Parameters </h2>`);
document.write(`<p> Parameters are variables that are used to store the data that's passed into a function for the function to use. </p>`);
function sum(num1, num2){
    return num1 + num2;
}
let result = sum(5, 10);
document.write(`
function sum(num1, num2){ <br>
    return num1 + num2; <br>
} <br>
<br>
sum(5, 10) = ${result} <br>
`);

document.write(`<h2> Arrow functions </h2>`);
document.write(`<p> Arrow functions are a shorter way to write functions. </p>`);

const subtract = (num1, num2) => {
    return num1 - num2;
}
let result2 = subtract(10, 5);
document.write(`
const subtract = (num1, num2) => { <br>
    return num1 - num2; <br>
} <br>
<br>
subtract(10, 5) = ${result2} <br>
`);
document.write(`<p> If the function only has one line of code, you can omit the curly braces and the return keyword. </p>`);
const multiply = (num1, num2) => num1 * num2;
let result3 = multiply(5, 5);
document.write(`
const multiply = (num1, num2) => num1 * num2; <br>
<br>
multiply(5, 5) = ${result3} <br>
`);
