Section 1: What Is a Function?
Why do we use functions instead of writing the same code again and again? Explain with one simple example.
List any four advantages of functions and write one line for each advantage.
Imagine you have to display a welcome message at 6 different places in your program. How will a function help you here?
Show the same code written twice without a function and once with a function.
Give one real-life analogy that explains the idea of a function.
Why do functions make debugging easier? Answer in 1–2 lines.
Answer:<img width="1080" height="1574" alt="WhatsApp Image 2026-11-02 at 7 46 17 AM" src="https://github.com/user-attachments/assets/675472a1-22b0-4668-8802-8113219de116" />
<img width="1600" height="1208" alt="WhatsApp Image 2026-11-02 at 7 46 22 AM" src="https://github.com/user-attachments/assets/11ae4fd3-95c0-4a08-9a8c-ff91d7451cbb" />

Section 2: Function Declaration
Create a function declaration named displayCourse that returns "JavaScript Fundamentals". Call it and print the result.
Write a function declaration getStudentStatus that returns the string "Active Learner". Store the returned value in a variable and print it.
Write a function declaration and call it before its definition. What happens and why? Explain briefly.
Answer:
1.function displayCourse() {
    return "JavaScript Fundamentals";
}
console.log(displayCourse());

2.
function getStudentStatus() {
    return "Active Learner";
}
let status = getStudentStatus();
console.log(status);

3.
greet();
function greet() {
    console.log("Hello");
}

Section 3: Function Expression
Create a function expression named showMotto that returns "Code. Learn. Grow.". Call it and print the output.
Write a function expression getSemester that returns the number 3. Print the value returned by the function.
Create a function expression and try to call it before writing the expression. What error do you get and why?
Answer:
1.const showMotto = function() {
    return "Code. Learn. Grow.";
};
console.log(showMotto());

2.const getSemester = function() {
    return 3;
};
console.log(getSemester());

3.show();
const show = function() {
    console.log("Hello");
};

Section 4: Function Calling (Invocation)
Write a function declaration greetStudent that returns "All the best for your coding journey!". Call this function four times.
Create a function expression todayFocus that returns "Focus on functions today". Store the result in a variable and print that variable.
Write one function declaration and one function expression. Call each of them twice and print all four results.
Answer:
1.function greetStudent() {
    return "All the best for your coding journey!";
}
console.log(greetStudent());
console.log(greetStudent());
console.log(greetStudent());
console.log(greetStudent());

2.const todayFocus = function() {
    return "Focus on functions today";
};

let result = todayFocus();
console.log(result);

3.function greet() {
    return "Hello Student";
}
const welcome = function() {
    return "Welcome to JavaScript";
};
console.log(greet());
console.log(greet());
console.log(welcome());
console.log(welcome());

Section 5: Parameters vs Arguments
Practical Questions

Write a function declaration subtract(a, b) that returns the difference of two numbers. Call it with arguments 50 and 18 and print the result.
Create a function expression greetUser(name) that returns "Welcome, " + name + "!". Call it with the argument "Aarav".
Write a function calculateArea(length, breadth) that returns the area of a rectangle. Call it twice with different pairs of arguments: (12, 5) and (8, 9).
Theory Questions

What is the difference between a parameter and an argument? Explain with a short example.
Can a function have parameters but be called without arguments? What happens in that case? Explain briefly.
Answer:
1.function subtract(a, b) {
    return a - b;
}
console.log(subtract(50, 18));

2.const greetUser = function(name) {
    return "Welcome, " + name + "!";
};
console.log(greetUser("Aarav"));

3.function calculateArea(length, breadth) {
    return length * breadth;
}
console.log(calculateArea(12, 5));
console.log(calculateArea(8, 9));

4.Parameter: Variable written inside the function definition.
Argument: Actual value passed while calling the function.
Example:function add(a, b) {  // Parameters
    return a + b;
}
add(10, 20);  // Arguments

5.Yes, but the parameters get the value undefined if no default values are provided.
Example:function greet(name) {
    console.log(name);
}
greet();

Section 6: Return Statement
Practical Questions

Write a function squareOfNumber(n) that returns the square of the given number. Call it with 9 and print the returned value.
Create a function isAdult(age) that returns true if age is 18 or above, otherwise returns false. Test it with 17 and 20.
Write a function getFullName(firstName, lastName) that returns the full name. Call it with "Rohit" and "Sharma" and print the result.
Theory Questions

What does a function return if there is no return statement inside it?
Why do we use the return statement in a function instead of just using console.log() inside the function? Explain in 2–3 lines.
Answer:
1.function squareOfNumber(n) {
    return n * n;
}
console.log(squareOfNumber(9));

2.function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isAdult(17));
console.log(isAdult(20));

3.function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Rohit", "Sharma"));

4.It returns undefined by default.

5.return sends the result back to the calling code. We can store and reuse that value in other calculations, whereas console.log() only displays the value on the console.

Section 7: Why Use Functions? (Real-world Example)
Practical Questions

You need to calculate the total marks of three subjects for 4 different students. Write a function getTotal(m1, m2, m3) and call it four times with different marks instead of repeating the addition code.
Create a function calculateSimpleInterest(principal, rate, time) that returns the simple interest. Use the function to find interest for two different sets of values.
Without using a function, write code to find the average of three numbers twice (for two students). Then rewrite the same logic using a single function findAverage(a, b, c) and call it twice.
Theory Questions

How do functions help in reducing code repetition? Explain with one real-world example.
Mention any three advantages of using functions in a program.
Answer:
1.function getTotal(m1, m2, m3) {
    return m1 + m2 + m3;
}
console.log(getTotal(80, 75, 90));
console.log(getTotal(70, 85, 88));
console.log(getTotal(90, 95, 92));
console.log(getTotal(65, 78, 80));

2.function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}
console.log(calculateSimpleInterest(1000, 5, 2));
console.log(calculateSimpleInterest(2000, 4, 3));

3.Without function:
let avg1 = (10 + 20 + 30) / 3;
console.log(avg1);
let avg2 = (40 + 50 + 60) / 3;
console.log(avg2);

With function:
function findAverage(a, b, c) {
    return (a + b + c) / 3;
}
console.log(findAverage(10, 20, 30));
console.log(findAverage(40, 50, 60));

4.Functions allow us to write code once and use it many times. For example, in a shopping website, we can create one function to calculate the total price and use it for different customers.

5.Code Reusability – Use code multiple times.
Easy Debugging – Find errors easily.
Less Repetition – Avoid writing the same code again and again.
