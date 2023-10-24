/*
Logical operators
&& - AND
|| - OR
! - NOT

Operate on boolean values
*/

let v1 = true;
let v2 = true;
let result = v1 && v2;
document.write(`<h1>Logical Operators</h1>`);
document.write(`<p>v1 = ${v1}</p>`);
document.write(`<p>v2 = ${v2}</p>`);
document.write(`<p>v1 && v2: ${result}</p>`);


v2 = false;
result = v1 || v2;
document.write(`<p>v1 = ${v1}</p>`);
document.write(`<p>v2 = ${v2}</p>`);
document.write(`<p>v1 || v2: ${result}</p>`);

v1 = false;
result = !v1;
document.write(`<p>v1 = ${v1}</p>`);
document.write(`<p>!v1: ${result}</p>`);

