document.write('<h1>Loops</h1>');
document.write('<h2>While</h2>');
document.write('<p>While loops are used to execute a block of code multiple times.</p>');

document.write(`
let num = 0; <br>

while (num < 10) { <br>
    document.write(num); <br>
    num++; // Very important to increment the variable for the loop to end <br>
    } <br>
`)

let num = 0;

while (num < 10) {
    document.write(num);
    num++; // Very important to increment the variable for the loop to end
    }

document.write('<h2>Do While</h2>');
document.write('<p>Do While loops are used to execute a block of code multiple times.</p>');
document.write(`<p> The difference between a while loop and a do while loop is that the do while loop will always execute the code block at least once.</p>`);
document.write(`<p>The Do-While loop first ask for the condition and then executes the code block.</p>`);
document.write(`
let num = 0; <br>

do { <br>
    document.write(num); <br>
    num++; <br>
} while (num < 10); <br>
`)
let num2 = 0;

do {
    document.write(num2);
    num2++;
} while (num2 < 10);

document.write('<h2>Brake statement</h2>');

document.write(`<p>The brake statement is used to "jump out" of a loop.</p>`);
document.write(`
let num = 0; <br>

while (num < 10) { <br>
    document.write(num); <br>
    num++; <br>
    if (num == 5) { <br>
        break; <br>
    } <br>
} <br>
`)
let num3 = 0;

while (num3 < 10) {
    document.write(num3);
    num3++;
    if (num3 == 5) {
        break;
    }
}

document.write('<h2>For loop</h2>');
document.write(`<p>The for loop is used when you know in advance how many times the script should run.</p>`);
document.write(`
for (let i = 0; i < 10; i++) { <br>
    document.write(i); <br>
} <br>
`)
document.write(`The first part of the for loop is the initialization of the variable. <br>`)
document.write(`The second part is the condition. <br>`)
document.write(`The third part is the incrementation or decrementation of the variable. <br>`)

for (let i = 0; i < 10; i++) {
    document.write(i);
}

document.write('<h2>Continue statement</h2>');
document.write(`<p>The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.</p>`);
document.write(`
for (let i = 0; i < 10; i++) { <br>
    if (i == 5) { <br>
        continue; <br>
    } <br>
    document.write(i); <br>
} <br>
`)
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i);
}

document.write('<h2>For in loop</h2>');
document.write(`<p>The for in loop is used to loop through the properties of an object.</p>`);
document.write(`<p>For in only returns the index number of the array.</p>`)
document.write(`
let animals = ["cat", "dog", "bird"]; <br>
for (let animal in animals) { <br>
    document.write(animal); <br>
} <br>
`)
let animals = ["cat", "dog", "bird"];
for (let animal in animals) {
    document.write(animal);
}

document.write('<h2>For of loop</h2>');
document.write(`<p>The for of loop is used to loop through the values of an iterable object.</p>`);
document.write(`<p>For of returns the value of the array.</p>`)
document.write(`
let animals = ["cat", "dog", "bird"]; <br>
for (let animal of animals) { <br>
    document.write(animal); <br>
} <br>
`)
let animals2 = ["cat", "dog", "bird"];
for (let animal of animals2) {
    document.write(`${animal}, `);
}