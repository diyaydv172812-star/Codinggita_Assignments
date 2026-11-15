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

Section 8: Function Scope
Practical Questions

Create a function showCity that declares a local variable city = "Ahmedabad" and prints it. After calling the function, try to print city outside and note what happens.
Declare a global variable trainer = "CodingGita Mentor". Write a function displayTrainer that prints this global variable. Call the function and also print the variable outside the function.
Write a function demoScope that contains a local variable value = 50. Print the variable inside the function. Then try accessing the same variable outside and explain the output/error.
Theory Questions 4. A variable declared inside a function cannot be used outside. Why does JavaScript follow this rule? How does it help in writing better programs?
5. What will happen if a global variable and a local variable have the same name? Which one will the function use? Explain briefly.

Answer:
1.
function showCity() {
    let city = "Ahmedabad";
    console.log(city);
}
showCity();
console.log(city); // ReferenceError: city is not defined

2.
let trainer = "CodingGita Mentor";
function displayTrainer() {
    console.log(trainer);
}
displayTrainer();
console.log(trainer);

3.
function demoScope() {
    let value = 50;
    console.log(value);
}
demoScope();
console.log(value); // ReferenceError: value is not defined

4.
A local variable belongs only to its function. This protects data and avoids unwanted changes or conflicts.

5.
The function uses the local variable because local variables have priority inside their scope. This is called Variable Shadowing.

Section 9: Combining Function Concepts
Practical Questions

Write a function generateMessage(name, score) that calculates whether the student has passed (score ≥ 40) and returns a complete sentence like: "Aarav has scored 65 and the result is Pass".
Create a function billCalculator(item1, item2, item3) that returns the total amount and also mentions if the customer gets a discount (total ≥ 1000 → "Discount Applied", otherwise "No Discount").
Write a function performanceReport(student, m1, m2, m3) that calculates total and average, then returns a formatted string containing name, total, average and a remark ("Excellent" if average ≥ 80, otherwise "Keep Improving").
Theory Questions

Why is it better to perform multiple related tasks (calculation + decision + message) inside one function instead of writing separate pieces of code?
How does combining concepts like parameters, return and conditions inside a single function improve code quality?
Answer:
1.
function generateMessage(name, score) {
    if (score >= 40) {
        return name + " has scored " + score + " and the result is Pass";
    } else {
        return name + " has scored " + score + " and the result is Fail";
    }
}
console.log(generateMessage("Aarav", 65));

2.
function billCalculator(item1, item2, item3) {
    let total = item1 + item2 + item3;

    if (total >= 1000) {
        return "Total = " + total + ", Discount Applied";
    } else {
        return "Total = " + total + ", No Discount";
    }
}
console.log(billCalculator(400, 300, 500));

3.
function performanceReport(student, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let remark;
    if (average >= 80) {
        remark = "Excellent";
    } else {
        remark = "Keep Improving";
    }
    return "Name: " + student +
           ", Total: " + total +
           ", Average: " + average +
           ", Remark: " + remark;
}
console.log(performanceReport("Aarav", 85, 90, 80));

4.
It keeps related code together, makes the program easy to understand, and reduces code repetition.

5.
- Parameters make functions reusable.
- Return gives back the result.
- Conditions help make decisions.
Together, they make code organized, reusable and easy to maintain.

Section 10: Nested Functions
Practical Questions

Write a function mainTask that contains an inner function helperTask. The inner function should return "Task completed successfully". Call the inner function from mainTask and return its result.
Create a function calculateFinal(m1, m2) that has an inner function getTotal to add the marks. Use the inner function and return a message: "Final marks = " followed by the total.
Write a function studentStatus(name, marks) containing an inner function getGrade. The inner function returns "A" if marks ≥ 80, "B" if marks ≥ 60, otherwise "C". Return a final sentence using the name and grade.
Theory Questions

What is the main advantage of writing a function inside another function? When should we use nested functions?
Can an inner function access variables of the outer function? What about the reverse (outer accessing inner variables)? Explain.
Answer:
1.
function mainTask() {
    function helperTask() {
        return "Task completed successfully";
    }
    return helperTask();
}
console.log(mainTask());

2.
function calculateFinal(m1, m2) {
    function getTotal() {
        return m1 + m2;
    }
    return "Final marks = " + getTotal();
}
console.log(calculateFinal(40, 50));

3.
function studentStatus(name, marks) {
    function getGrade() {
        if (marks >= 80) {
            return "A";
        } else if (marks >= 60) {
            return "B";
        } else {
            return "C";
        }
    }
    return name + " has grade " + getGrade();
}
console.log(studentStatus("Aarav", 85));

4.
Nested functions keep helper functions private and organize related code. They are useful when a function is needed only inside another function.

5.
- Inner function can access variables of the outer function.
- Outer function cannot directly access variables declared inside the inner function.
This happens because of JavaScript scope rules.
