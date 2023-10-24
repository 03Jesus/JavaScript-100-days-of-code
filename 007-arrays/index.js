document.write(`<h1>Arrays</h1>`);
document.write(`<p>Arrays are objects that store multiple values in a single variable.</p>`);
let fruits = ['Apple', 'Banana', 'Orange'];
document.write(`<p>fruits = ${fruits}</p>`);

document.write(`<p>We also can store different types of values in an array</p>`);
let mixed = ['Apple', 23, true];
document.write(`<p>mixed = ${mixed}</p>`);

document.write(`<p>We can storage arrays in arrays</p>`);
let nested = [['Apple', 'Banana'], ['Orange', 'Lemon']];
document.write(`<p>nested = ${nested}</p>`);

document.write(`<p>We can access the elements of an array by using an index</p>`);
document.write(`<p>fruits[0] = ${fruits[0]}</p>`);

document.write(`<p>We can change the value of an element by using an index</p>`);
fruits[0] = 'Lemon';
document.write(`<p>fruits[0] = ${fruits[0]}</p>`);

document.write(`<p>We can add elements to an array by using the push() method</p>`);
fruits.push('Apple');
document.write(`<p>fruits = ${fruits}</p>`);

document.write(`<p>We can remove elements from an array by using the pop() method</p>`);
fruits.pop();
document.write(`<p>fruits = ${fruits}</p>`);

document.write(`<h1>Dictionaries or asociative arrays</h1>`);
document.write(`<p>Dictionaries are objects that store multiple values in a single variable, but instead of using indexes, we use keys.</p>`);
let person = {
    name: 'John',
    age: 23,
    isMarried: false
};
document.write(`<p>person = ${JSON.stringify(person)}</p>`);
document.write(`<p>person.name = ${person.name}</p>`);

document.write(`<p>We can access to a value of the dictionarie with the key</p>`);
document.write(`<p>person['age'] = ${person['age']}</p>`);