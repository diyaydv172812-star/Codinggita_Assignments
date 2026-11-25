Section 1: What Is Scope? (5 Questions)
Q1.
Consider the following code:

var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();
Answer the following:

Which variable is declared in the global scope?
Which variable is declared inside the function?
Can both variables be accessed inside "display()"?
Q2.
Predict the output:

var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);
Q3.
Identify the scope of each variable:

var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}
Classify "college", "name", "age", and "subject" as global or function-scoped variables.

Q4.
What will happen when you execute this code? Explain why.

function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();
Q5.
Write a JavaScript program that:

Declares one variable in the global scope.
Declares another variable inside a function.
Prints both variables inside the function.
Prints the global variable outside the function.
Section 2: Global Scope (5 Questions)
Q6.
Predict the output:

var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);
Q7.
What will be the output?

var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);
Explain why the output changes.

Q8.
Find the error, if any:

function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();
Will this code produce an error? Explain your answer.

Q9.
Predict the output:

var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);
Which statement causes an error, and why?

Q10.
Write a program that declares a global variable named "school" with the value "Sunrise School".

Create two functions:

"showSchool()" should print the school name.
"updateSchool()" should change the global variable to "Green Valley School".
Call both functions in an appropriate order and print the final value of "school".

Section 3: Function Scope (5 Questions)
Q11.
Predict the output:

function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first);
Explain the behavior of the last statement.

Q12.
Find and explain the error:

function employee() {
    var salary = 30000;
}
employee();
console.log(salary);
Q13.
What will be the output?

var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);
Why doesn't the value printed inside the function change the global variable?

Q14.
Consider this code:

function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();
Answer the following:

What is the output?
Is a new local variable created each time the function is called?
Does the local variable remain accessible after the function finishes executing?
Q15.
Write a function named "calculateArea()" that:

Declares a local variable "length" with the value 8.
Declares a local variable "width" with the value 4.
Calculates and prints the area of a rectangle.
Does not make either variable accessible outside the function.
Section 4: No Block Scope with "var" (5 Questions)
Q16.
Predict the output:

if (10 > 5) {
    var result = "Success";
}
console.log(result);
Explain why "result" is accessible outside the "if" block.

Q17.
What will be printed?

var number = 1;
if (true) {
    var number = 2;
}
console.log(number);
Why does the output differ from what you might expect if the block had its own scope?

Q18.
Predict the output:

var message = "Start";
{
    var message = "End";
}
console.log(message);
Does the standalone block create a separate scope for "var"?

Q19.
Find the output and explain the variable's scope:

if (false) {
    var result = 100;
}
console.log(result);
Does the condition being "false" prevent the "var" declaration from being hoisted?

Q20.
Rewrite the following code so that the variable "secret" cannot be accessed outside the "if" block. Use a variable declaration that supports block scope.

if (true) {
    var secret = "Hidden";
}
console.log(secret);
Explain why your solution works.

Section 5: Block Scope with Loops (5 Questions)
Q21.
Predict the complete output:

for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);
Explain why "number" can be accessed after the loop.

Q22.
What will be printed?

var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);
Explain what happens to the original value of "count".

Q23.
Predict the output:

var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);
Is "i" accessible after the loop? Why?

Q24.
Find the error, if any:

for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);
Does the final statement cause an error? What value does "item" contain?

Q25.
Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.

for (var step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);
Explain the difference between your solution and the original code.

Section 6: Function Scope Inside Loops (5 Questions)
Q26.
Predict the output:

function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();
Explain why "number" is accessible after the loop but not outside the function.

Q27.
Identify which statements cause errors:

function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);
Explain your answer for each occurrence of "marks".

Q28.
Predict the output:

function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();
How many times does the loop execute?

Q29.
Find and explain the error:

function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();
Why does the order of these statements matter?

Q30.
Write a function named "printNumbers()" that:

Uses a "for" loop to print numbers from 1 to 5.
Declares the loop variable using "var".
Prints the loop variable again after the loop, inside the function.
Demonstrates that the loop variable cannot be accessed outside the function.
Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.

Section 7: Hoisting with "var" (5 Questions)
Q31.
Predict the output:

console.log(score);
var score = 90;
console.log(score);
Explain why the first statement does not produce a "ReferenceError".

Q32.
What will be the output?

var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();
Why doesn't the first "console.log()" print the global value of "a"?

Q33.
Identify which statements produce "undefined" and explain why:

console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);
Q34.
Predict the output:

function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();
Rewrite the code in a way that represents how the variable declaration is handled during hoisting.

Q35.
Find and explain the issue:

var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);
Answer the following:

What does the first "console.log()" inside the function print?
What does the final "console.log()" print?
How does hoisting affect the local variable "price"?
Section 8: Function Declaration Hoisting (5 Questions)
Q36.
Predict the output:

sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
Explain why this works even though the function is called before it is written.

Q37.
What will be the output? Explain the difference from a normal var variable.

display();
function display() {
    console.log("Function is hoisted completely");
}
Q38.
Find and explain the issue (if any):

greet();
var greet = function() {
    console.log("Hi");
};
Why does this behave differently from a function declaration?

Q39.
Predict the output:

console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());
Q40.
Write a small program that:

Calls a function before its declaration.
The function prints a message using a global variable.
Demonstrates that the entire function (name + body) is available due to hoisting.
Section 9: Scope Chain (5 Questions)
Q41.
Predict the output and explain the lookup process:

var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();
Q42.
What will happen when this code runs? Explain using the scope chain.

var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar); // this line
    }
    inner();
}
outer();
Q43.
Identify which variables are accessible inside deep() and which are not:

var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();
Q44.
Predict the output:

var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);
Explain why the value of x changes depending on the location of console.log.

Q45.
Write a nested function structure (at least 3 levels) that prints:

A variable from the innermost function
A variable from the middle function
A variable from the outermost function / global scope
Demonstrate the scope chain clearly.
Section 10: Variable Shadowing (5 Questions)
Q46.
Predict the output:

var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);
Explain what “shadowing” means in this example.

Q47.
What will be printed?

var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);
Does the local variable permanently change the global one? Why or why not?

Q48.
Find the output and explain:

var value = 10;
function update() {
    value = 20;          // no var
    console.log(value);
}
update();
console.log(value);
Compare this with the previous questions (where var was used inside the function).

Q49.
Predict the complete output:

var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);
Q50.
Write a program that demonstrates variable shadowing:

Declare a global variable marks = 70.
Inside a function, declare another variable marks = 95.
Print both values (inside and outside the function) so the difference is clear.
Section 11: Nested Functions (5 Questions)
Q51.
Predict the output:

function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();
Can you access teacher or student outside outer()? Explain.

Q52.
What will this code print? Explain the accessibility of each variable.

function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();
Q53.
Find the error(s):

function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    }
}
inner();
outer();
Why does the order and placement of the function call matter?

Q54.
Predict the output:

function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();
Explain how the inner function still has access to greeting.

Q55.
Write a function named studentInfo() that:

Declares a local variable name
Declares a local variable course
Contains an inner function display() that prints both variables
Calls the inner function from the outer function
(This is the mini-assignment style question from the notes.)
Section 12: Common Errors with var (5 Questions)
Q56.
What is the problem in this code?

function test() {
    x = 100; // missing var
}
test();
console.log(x);
Explain the unintended side effect.

Q57.
Predict the output and explain the misconception:

if (true) {
    var x = 20;
}
console.log(x);
Why do beginners often expect an error here?

Q58.
What happens here?

console.log(a);
var a = 10;
Explain why there is no ReferenceError and what value is printed.

Q59.
Find the issue:

var x = 10;
var x = 20;
console.log(x);
Is this allowed with var? Why can it become confusing?

Q60.
Rewrite the following code to avoid the common error of accidentally creating a global variable, and also make the variable properly scoped:

function calculate() {
    total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();
console.log(total); // currently works, but should not

Answer:
<img width="1080" height="1427" alt="image" src="https://github.com/user-attachments/assets/b537c2ac-f19c-40b1-979e-41e5b4ebdcc4" />
<img width="1080" height="1363" alt="image" src="https://github.com/user-attachments/assets/ba18ea73-4f96-4ef4-a8c9-01e550e70fb0" />
<img width="1080" height="1343" alt="image" src="https://github.com/user-attachments/assets/be08ef1c-e4b1-48d0-93df-833a1758994f" />
<img width="1080" height="1492" alt="image" src="https://github.com/user-attachments/assets/f59e002c-2840-4473-8bc4-f9ff140bd220" />
<img width="1302" height="1600" alt="image" src="https://github.com/user-attachments/assets/ffe84d9d-a5ee-4a89-b928-5f59f3ccc795" />
<img width="1080" height="1372" alt="image" src="https://github.com/user-attachments/assets/cfcb2aa1-b278-4d24-8b3f-66a12fce6074" />
<img width="1080" height="1292" alt="image" src="https://github.com/user-attachments/assets/87d1b51b-6b36-4ce2-b22d-2086c6d55bec" />
<img width="1080" height="1341" alt="image" src="https://github.com/user-attachments/assets/61f8a2d4-633a-4d1a-994b-f5ae61a7a8fd" />
<img width="1282" height="1600" alt="image" src="https://github.com/user-attachments/assets/baf25cdb-8db4-4399-a444-7f5b90a10b4f" />
<img width="1080" height="1317" alt="image" src="https://github.com/user-attachments/assets/426afca2-6628-4acc-ae0b-7cca509e2a1a" />
<img width="1080" height="1354" alt="image" src="https://github.com/user-attachments/assets/6a9f4c7b-98c0-43ba-8492-2fb87f47af45" />
<img width="1080" height="1419" alt="image" src="https://github.com/user-attachments/assets/e24c9e27-cd2d-4849-a0cb-da70688faa74" />














