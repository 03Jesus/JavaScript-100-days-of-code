document.write(`<h1>Arrays Methods</h1>`);
document.write(`<h2>pop()</h2>`);
document.write(`<p>Removes the last element from an array and returns that element.</p>`);
let fruits = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits = ['Apple', 'Banana', 'Orange'] </br>
document.write(fruits.pop()) <br>
`);
document.write(`Arrays element deleted: ${fruits.pop()}<br>`);
document.write(`New array: ${fruits}<br>`);

document.write(`<h2>shift()</h2>`);
document.write(`<p>Removes the first element from an array and returns that element.</p>`);
let fruits2 = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits2 = ['Apple', 'Banana', 'Orange'] </br>
document.write(fruits2.shift()) <br>
`);
document.write(`Arrays element deleted: ${fruits2.shift()}<br>`);
document.write(`New array: ${fruits2}<br>`);

document.write(`<h2>push()</h2>`);
document.write(`<p>Adds one or more elements to the end of an array and returns the new length of the array.</p>`);
let fruits3 = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits3 = ['Apple', 'Banana', 'Orange'] </br>
document.write(fruits3.push('Lemon')) <br>
`);
document.write(`Arrays element added: ${fruits3.push('Lemon')}<br>`);
document.write(`New array: ${fruits3}<br>`);

document.write(`<h2>reverse()</h2>`);
document.write(`<p>Reverses the order of the elements of an array in place.</p>`);
let fruits4 = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits4 = ['Apple', 'Banana', 'Orange'] </br>
fruits4.reverse() <br>
`);
fruits4.reverse();
document.write(`New array: ${fruits4}<br>`);

document.write(`<h2>unshift()</h2>`);
document.write(`<p>Adds one or more elements to the beginning of an array and returns the new length of the array.</p>`);
let fruits5 = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits5 = ['Apple', 'Banana', 'Orange'] </br>
document.write(fruits5.unshift('Lemon')) <br>
`);
document.write(`Arrays element added: ${fruits5.unshift('Lemon')}<br>`);
document.write(`New array: ${fruits5}<br>`);

document.write(`<h2>sort()</h2>`);
document.write(`<p>Sorts the elements of an array in place and returns the sorted array.</p>`);
document.write(`<p> The sort is not necessarily stable. The default sort order is according to string Unicode code points.</p>`);
let numbers = [10, 2, 30, 1, 5];
document.write(`
let numbers = [10, 2, 30, 1, 5]; </br>
numbers.sort() <br>
`);
numbers.sort((a, b) => a - b);
document.write(`New array: ${numbers}<br>`);

document.write(`<h2>splice()</h2>`);
document.write(`<p>Adds and/or removes elements from an array.</p>`);
let fruits6 = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits6 = ['Apple', 'Banana', 'Orange'] </br>
document.write(fruits6.splice(1, 1, 'Lemon')) <br>
`);
document.write(`Arrays element added: ${fruits6.splice(1, 1, 'Lemon')}<br>`);

document.write(`<h2>join()</h2>`);
document.write(`<p>Joins all elements of an array into a string.</p>`);
let fruits7 = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits7 = ['Apple', 'Banana', 'Orange'] </br>
document.write(fruits7.join()) <br>
`);
document.write(`New string: ${fruits7.join()}<br>`);
document.write(`<p>Join with separator</p>`);
document.write(`
let fruits7 = ['Apple', 'Banana', 'Orange'] </br>
document.write(fruits7.join(' - ')) <br>
`);
document.write(`New string: ${fruits7.join(' - ')}<br>`);

document.write(`<h2>slice()</h2>`);
document.write(`<p>Returns a portion of an array into a new array.</p>`);
let fruits8 = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits8 = ['Apple', 'Banana', 'Orange'] </br>
document.write(fruits8.slice(1, 2)) <br>
`);
document.write(`New array: ${fruits8.slice(1, 2)}<br>`);

document.write(`<h2>Other arrays methods</h2>`);
document.write(`<p>We can use the same methods of strings</p>`);
document.write(`<p>concat(), includes(), indexOf(),
                lastIndexOf(), length, repeat(),
                search(), slice(), split(),
                substr(), substring(),
                toLowerCase(), toUpperCase(), trim()</p>`);

document.write(`<h2>filter()</h2>`);
document.write(`<p>Creates a new array with all elements that pass the test implemented by the provided function.</p>`);
let ages = [32, 33, 16, 40];
document.write(`
let ages = [32, 33, 16, 40] </br>
document.write(ages.filter(age => age >= 18)) <br>
`);
document.write(`New array: ${ages.filter(age => age >= 18)}<br>`);

document.write(`<h2>forEach()</h2>`);
document.write(`<p>Calls a function for each element in the array.</p>`);
let fruits9 = ['Apple', 'Banana', 'Orange'];
document.write(`
let fruits9 = ['Apple', 'Banana', 'Orange'] </br>
fruits9.forEach(fruit => document.write(fruit + ' ')) <br>
`);
fruits9.forEach(fruit => document.write(fruit + ' '));