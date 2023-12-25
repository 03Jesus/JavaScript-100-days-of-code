document.write(`<h1>Strings Methods</h1>`);
document.write(`<h2>Concat</h2>`);
document.write(`<p>Used for concat(join) 2 or more strings</p>`)

let testString = "Hello World";
let newString = testString.concat(" in JS");
document.write(`
    let testString = "Hello World"; </br>
    let newString = testString.concat(" in JS"); </br>
`);
document.write(newString);

document.write(`<h2>Starts With and Ends With</h2>`);
document.write(`<p>Used for check if string starts or ends with given string</p>`);
document.write(`<p>Return true or false</p>`);
let testString2 = "Hello World";
document.write(`
    let testString2 = "Hello World"; </br>
    document.write(testString2.startsWith("Hello")); </br>
`);
document.write(testString2.startsWith("Hello"));
document.write(`<br>`);
document.write(`
    let testString2 = "Hello World"; </br>
    document.write(testString2.endsWith("World")); </br>
`);
document.write(testString2.endsWith("World"));

document.write(`<h2>Includes</h2>`);
document.write(`<p>Used for check if string includes given string. It doesn't matter where the string is found</p>`);
document.write(`<p>Return true or false</p>`);
let testString3 = "Hello World";
document.write(`
    let testString3 = "Hello World"; </br>
    document.write(testString3.includes("World")); </br>
`);
document.write(testString3.includes("World"));

document.write(`<h2>IndexOf</h2>`);
document.write(`<p>Used for find the first index of given string</p>`);
document.write(`<p>Return index number</p>`);
let testString4 = "Hello World";
document.write(`
    let testString4 = "Hello World"; </br>
    document.write(testString4.indexOf("World")); </br>
`);
document.write(testString4.indexOf("World"));
document.write(`<br>`);
document.write(`<p>Return -1 if string not found</p>`);
document.write(`
    let testString4 = "Hello World"; </br>
    document.write(testString4.indexOf("Worlds")); </br>
`);
document.write(testString4.indexOf("Worlds"));

document.write(`<h2>lastIndexOf</h2>`);
document.write(`<p>Used for find the last index of given string</p>`);
document.write(`<p>Return index number</p>`);
let testString5 = "Hello World";
document.write(`
    let testString5 = "Hello World"; </br>
    document.write(testString5.lastIndexOf("o")); </br>
`);
document.write(testString5.lastIndexOf("o"));
document.write(`<br>`);
document.write(`<p>Return -1 if string not found</p>`);
document.write(`
    let testString5 = "Hello World"; </br>
    document.write(testString5.lastIndexOf("z")); </br>
`);
document.write(testString5.lastIndexOf("z"));

document.write(`<h2>padStart and padEnd</h2>`);
document.write(`<p>Used for add given string to start or end of the string</p>`);
document.write(`<p>Return new string</p>`);
let testString6 = "Hello World";
document.write(`
    let testString6 = "Hello World"; </br>
    document.write(testString6.padStart(20, "JS")); </br>
`);
document.write(testString6.padStart(20, "JS"));
document.write(`<br>`);
document.write(`
    let testString6 = "Hello World"; </br>
    document.write(testString6.padEnd(20, "JS")); </br>
`);
document.write(testString6.padEnd(20, "JS"));

document.write(`<h2>Repeat</h2>`);
document.write(`<p>Used for repeat the string</p>`);
document.write(`<p>Return new string</p>`);
let testString7 = "Hello World ";
document.write(`
    let testString7 = "Hello World"; </br>
    document.write(testString7.repeat(3)); </br>
`);
document.write(testString7.repeat(3));

document.write(`<h2>Split</h2>`);
document.write(`<p>Used for split the string</p>`);
document.write(`<p>Return array</p>`);
let testString8 = "Hello how are you";
document.write(`
    let testString8 = "Hello how are you"; </br>
    document.write(testString8.split(" ")); </br>
`);
document.write(testString8.split(" "));

document.write(`<h2>Substring</h2>`);
document.write(`<p>Used for get substring from string</p>`);
document.write(`<p>Return new string</p>`);
let testString9 = "Hello how are you";
document.write(`
    let testString9 = "Hello how are you"; </br>
    document.write(testString9.substring(0, 5)); </br>
`);
document.write(testString9.substring(0, 5));

document.write(`<h2>toLowerCase and toUpperCase</h2>`);
document.write(`<p>Used for convert string to lower or upper case</p>`);
document.write(`<p>Return new string</p>`);
let testString10 = "Hello how are you";
document.write(`
    let testString10 = "Hello how are you"; </br>
    document.write(testString10.toLowerCase()); </br>
`);
document.write(testString10.toLowerCase());
document.write(`<br>`);
document.write(`
    let testString10 = "Hello how are you"; </br>
    document.write(testString10.toUpperCase()); </br>
`);
document.write(testString10.toUpperCase());

document.write(`<h2>toString</h2>`);
document.write(`<p>Used for convert other data to string</p>`);
document.write(`<p>Return new string</p>`);
let testString11 = 123;
document.write(`
    let testString11 = 123; </br>
    document.write(testString11.toString()); </br>
`);
document.write(testString11.toString());

document.write(`<h2>trim</h2>`);
document.write(`<p>Used for remove white spaces from start and end of the string</p>`);
document.write(`<p>Return new string</p>`);
let testString12 = "   Hello how are you   ";
document.write(`
    let testString12 = "   Hello how are you   "; </br>
    document.write(testString12.trim()); </br>
`);
document.write(testString12.trim());
document.write(`<br>`);
document.write(`<p>Also we can use trimStart or trimEnd</p>`);
document.write(`
    let testString12 = "   Hello how are you   "; </br>
    document.write(testString12.trimStart()); </br>
`);
document.write(testString12.trimStart());