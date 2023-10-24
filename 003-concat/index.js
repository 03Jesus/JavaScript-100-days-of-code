/*
Concat strings with the plus operator
*/
document.write(`<h1>Concat strings with the plus operator</h1><br>`);
let myStr = "This is the start. " + "This is the end.";
document.write("myStr = " + myStr + "<br>");

/*
Forcing a string
*/
document.write(`<h1>Forcing a string</h1><br>`);
let n1 = 5;
let n2 = 8;
let phrase = "" + n1 + n2; // The double quotes force the numbers to be strings
document.write("phrase = " + phrase + "<br>");

/*
Concat method
*/
document.write(`<h1>Concat method</h1><br>`);
let n3 = "5";
let n4 = 8;
let phrase2 = n3.concat(n4);
document.write("phrase2 = " + phrase2 + "<br>");

/*
Concatenating strings with backticks and ${}
*/
document.write("<h1>Concatenating strings with backticks and ${}</h1><br>");
let user_name = "Bob";
let age = 22;
let phrase3 = `My user_name is ${user_name} and I am ${age} years old.`;
document.write("phrase3 = " + phrase3 + "<br>");