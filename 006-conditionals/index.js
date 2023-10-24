/*
Conditionals

1. if
2. if else
3. if else if
4. switch

Is a statement that evaluates to true or false
If the condition is true, the code block is executed
If the condition is false, the code block is skipped
*/

// if
let num1 = 23;
let num2 = 13;
document.write(`<h1>if</h1>`);
document.write(`<p>num1 = ${num1}</p>`);
document.write(`<p>num2 = ${num2}</p>`);
if (num1 > num2) {
    document.write(`<p>num1 is greater than num2</p>`);
}
if (num1 < num2) {
    document.write(`<p>num1 is less than num2</p>`);
}
if (num1 == num2) {
    document.write(`<p>num1 is equal to num2</p>`);
}

// if else
document.write(`<h1>if else</h1>`);
document.write(`<p>num1 = ${num1}</p>`);
document.write(`<p>num2 = ${num2}</p>`);
if (num1 > num2) {
    document.write(`<p>num1 is greater than num2</p>`);
} else {
    document.write(`<p>num1 is less than or equal to num2</p>`);
}

// if else if
document.write(`<h1>if else if</h1>`);
document.write(`<p>num1 = ${num1}</p>`);
document.write(`<p>num2 = ${num2}</p>`);
if (num1 > num2) {
    document.write(`<p>num1 is greater than num2</p>`);
} else if (num1 < num2) {
    document.write(`<p>num1 is less than num2</p>`);
} else {
    document.write(`<p>num1 is equal to num2</p>`);
}