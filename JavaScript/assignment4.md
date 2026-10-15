Assignment : Conditional Statements
A] if Statement
Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.

Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.

Write a program that checks if a given number is greater than 100. If yes, print “Big Number”.

Check if the temperature is less than 10. If true, print “Very Cold”.

Write a program to check if a student scored full marks (100). If yes, print “Perfect Score”.

Check if a number is negative. If it is, print “Negative Number”.

Write a program that checks if a user has entered an empty string. If the string is empty, print “No input provided”.

Check if a given year is divisible by 100. If yes, print “Century Year”.

Write a program to check if a number is both positive and even using a single if condition. If true, print “Positive Even Number”.

Check if the value of a variable marks is greater than or equal to 35 and less than or equal to 100. If true, print “Valid Marks”.

Answer:
1.
let num = 15
if(num % 5 ==0){
    console.log("Divisible by 5")
}

2.
let age = 60;
if(age >= 60){
    console.log("Senior Citizen")
}

3.
let num = 102;
if(num > 100){
    console.log("Big Number")
}

4.
let temperature = 5;
if(temperature <10){
    console.log("Very Cold")
}

5.
let marks =100;
if (marks == 100){
    console.log("Perfect Score")
}

6.
let num = -1;
if (num<0){
    console.log("Negative Number")
}

7.
let x = "";
if (x==""){
    console.log("No input provided")
}

8.
let year = 2000;
if(year%100==0){
    console.log("Century Year")
}

9.
let num =12;
if (num %2==0 && num>=0){
    console.log("Positive Even Number")
}

10.
let marks=39;
if(35<=marks<100){
    console.log("Valid Marks")
}

B] if...else Statement
Write a program to check whether a number is even or odd.

Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.

Write a program that checks whether a number is positive or negative.

Check if a student has passed or failed based on marks (pass mark = 35).

Write a program to check whether a given character is an uppercase letter or not.
(Hint: Use character comparison)

Check if a number is divisible by 3 or not. Print appropriate messages.

Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password”.

Check whether a given year is a leap year or not using the basic rule (divisible by 4).

Write a program to find the greater of two numbers using if...else.

Check if a number is positive, negative, or zero using only if...else (you may use nested or multiple conditions carefully).

Answer:
1.
let num = 4;
if(num%2==0){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}

2.
let age = 35;
if(age>=18){
    console.log("Eligible")
}else{
    console.log("Not Eligible")
}

3.
let num = 1;
if (num>=0){
    console.log("positive number")
}else{
    console.log("Negative Number")
}

4.
let marks=35;
if(marks>=35){
    console.log("passed")
}else{
    console.log("failed")
}

5.
let ch = "A";
if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase letter");
} else {
    console.log("Not an uppercase letter");
}

6.
let num = 6;
if(num%3==0){
    console.log("Number is divisible by 3")
}else{
    console.log("Number is niot divisible by 3")
}

7.
let password="admin123"
if(password=="admin123"){
    console.log("Login Successful")
}else{
    console.log("Incorrect Password")
}

8.
let year=2026;
if(year%4==0){
    console.log("leap year")
}else{
    console.log("Not a leap year")
}

9.
let a = 10;
let b = 20;
if (a > b) {
    console.log("a is greater");
} else {
    console.log("b is greater");
}

10.
let num = -5;
if (num > 0) {
    console.log("Positive number");
} else {
    if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }
}











