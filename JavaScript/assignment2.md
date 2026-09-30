<img width="1080" height="1439" alt="image" src="https://github.com/user-attachments/assets/fa8e268c-de53-4192-a6b0-36a86dd87308" /><img width="1080" height="1439" alt="WhatsApp Image 2026-09-30 at 10 46 10 AM" src="https://github.com/user-attachments/assets/ab995600-a240-46b9-8ea0-fd4012a10dcc" />Assignment : Introduction to Variables and Datatypes
Part I : Variables (let, var, const)
Part a — 4 Questions
1. Personal Information Declare variables for name, age, and city using appropriate variable keywords. Assign values and print all three variables.

2. Change the Score Create a variable score with the value 50. Change its value to 80 and print the final value. Use the appropriate keyword for a value that can change.

3. Constant Value Create a constant variable PI with the value 3.14. Print its value. Do not try to change the value.

4. Uninitialized Variables Declare one variable having name num1 using var and one having name num2 using let without assigning values. Print both variables. Then assign values to them and print the values again.

5. Answer:<img width="1080" height="1447" alt="image" src="https://github.com/user-attachments/assets/ea6dab3d-9ad2-48e7-8e6a-28227ed75d6a" />

6. Part b — 4 Questions
5. Choose the Correct Keyword Create the following variables using the most appropriate keyword:

studentName — the value will not change
marks — the value may change
schoolName — the value will not change
Assign values to all three variables. Change marks and print all variables.

6. Understand Scope Write a program where var, let, and const variables are declared inside an if block. Try to access all three variables outside the block. Observe and identify which variables can be accessed.

7. Test Re-declaration Declare a variable named user using var and declare it again with a different value. Then perform the same experiment using let. Observe what happens and identify which declaration allows re-declaration.

8. Test Re-assignment Create three variables using var, let, and const. Assign an initial value to each. Try to change the value of all three variables. Observe which variables allow re-assignment and which one produces an error.

9. Answer:<img width="1080" height="1364" alt="image" src="https://github.com/user-attachments/assets/f79de705-34f3-4c6c-8e47-2978fdf6dc45" />
10. <img width="1600" height="791" alt="image" src="https://github.com/user-attachments/assets/9902575f-ae71-480c-8820-d4d119ba10f3" />

Part c — 2 Questions
9. Predict and Explain Without running the code, predict the output of each console.log() and identify which lines cause errors. Explain your answer using the rules of scope, re-assignment, and variable declaration.

var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x);
console.log(y);
console.log(z);
10. Fix the Program The following program contains multiple errors. Fix the code so that it runs correctly. Make sure your solution follows the rules for initialization, re-declaration, re-assignment, and scope.

const name;

let age = 20;
let age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";
}

console.log(country);

const score = 50;
score = 80;

Answer: <img width="1600" height="1422" alt="image" src="https://github.com/user-attachments/assets/3c520f2b-cef1-4405-9ee9-9cf112804fbc" />


Part d — 2 Question
11. Predict the Hoisting Behavior
Without running the code, predict the output of each console.log() and identify which lines cause errors. Explain your answer using the rules of hoisting for var, let, and const.

console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
12. Fix the Hoisting Errors
The following program contains errors related to hoisting. Fix the code so that it runs correctly without any errors. Make sure your solution follows the rules of hoisting for var, let, and const (you may reorder declarations/assignments or change keywords only where necessary to make it work properly).

console.log(x);
console.log(y);
console.log(z);

var x = "Hello";
let y = "World";
const z = "!";

console.log(x + " " + y + z);
Questions on Primitive vs Non-Primitive Data Types

Answer:<img width="1080" height="1439" alt="image" src="https://github.com/user-attachments/assets/2a35a5fc-29c0-457d-87f3-ebe6d6a8abef" />

Part e — Basic Identification (4 Questions)
1. Classify the Types
Declare one variable of each of the following types and print both the value and its type using typeof:

A whole number
A decimal number
A piece of text
A true/false value
2. Undefined vs Null
Declare two variables:

a using let without assigning any value
b and intentionally assign null to it
Print both variables and their typeof results. Explain the difference between undefined and null.

3. Number Special Values
Create variables for the following and print each value along with its type:

Positive Infinity
Negative Infinity
Not-a-Number (NaN)
A large number written with scientific notation (e.g., 2.5e3)
A number written with underscores for readability (e.g., 1_000_000)
4. String Styles
Create three string variables using:

Single quotes
Double quotes
Template literals (backticks) that include another variable
Print all three strings.

Answer:<img width="899" height="1599" alt="image" src="https://github.com/user-attachments/assets/91e0e7ea-6c3a-4632-aa3a-a0fe4ef53348" />
<img width="1394" height="1600" alt="image" src="https://github.com/user-attachments/assets/48379c55-0cd0-451c-8501-252e89b52e76" />

Part f — Advanced Primitive Types (3 Questions)
5. Symbol Uniqueness
Create two Symbols with the same description ('id').
Compare them using === and print the result.
Then use both Symbols as keys in an object and retrieve the values.
Explain why the comparison returns false.

6. BigInt Precision
Create a regular number with the value 9007199254740991 (Number.MAX_SAFE_INTEGER).
Add 1, 2, and 3 to it and print the results.
Now create the same value as a BigInt and perform the same additions.
Print the results and explain the difference.

7. Choose the Correct Type
For each description below, write the most appropriate primitive data type and give an example declaration:

A unique identifier that is never equal to another value with the same description
A very large integer that must keep exact precision
A variable that has been declared but not yet given a value
An intentional empty value

Answer:<img width="1080" height="1326" alt="image" src="https://github.com/user-attachments/assets/34070ab2-4f09-45dc-a62b-be26a506f7b8" />
<img width="899" height="1599" alt="image" src="https://github.com/user-attachments/assets/00a0baa1-5c99-425e-aa2f-ba49754dc4bc" />

Part g — Prediction & Fixing (3 Questions)
8. Predict the Output
Without running the code, predict what each console.log will print (value + type). Explain your reasoning.

let a;
let b = null;
let c = 42;
let d = "Hello";
let e = true;
let f = Symbol("key");
let g = 123n;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);
console.log(typeof g, g);
9. Fix the Code
The following program has mistakes related to primitive types. Fix it so that it runs correctly and prints meaningful values.

let num = 10;
let text = Hello;
let flag = True;
let empty;
let nothing = Null;
let unique = symbol("id");
let big = 9007199254740991;

console.log(num, text, flag, empty, nothing, unique, big);
10. Primitive vs Non-Primitive
Answer the following questions in your own words and give one example for each:

a) What is the main difference between Primitive and Non-Primitive data types?
b) Why are Numbers, Strings, Booleans, Undefined, Null, Symbol, and BigInt called Primitive?
c) Give one example of a Non-Primitive data type and explain why it is considered Non-Primitive.

Answer: <img width="1600" height="1437" alt="image" src="https://github.com/user-attachments/assets/e70fce05-5647-4e75-af71-0c62e7bdcfb9" />
<img width="1080" height="1442" alt="image" src="https://github.com/user-attachments/assets/0566946c-b77d-48cf-87b5-377859c698df" />













