# 1. What Is an Array?
What is the definition of an array in JavaScript?
What is the technical term for the position of a value inside an array?
At which number does the index of an array always start?
Given the array var numbers = [10, 20, 30, 40];, what value is stored at index 2?
For the same array var numbers = [10, 20, 30, 40];, what is the index of the number 40?
# 2. Creating Arrays
What are the two ways mentioned in the notes to create an array in JavaScript?
Which method of creating an array is recommended by the notes?
Write the syntax to create an array named students containing the names "Jenil", "Mahir", "Priyesha", and "Yashvi" using the recommended method.
Write the syntax to create an array named marks containing 85, 90, and 78 using the Array constructor.
What keyword is used when instantiating an array using the constructor approach?
# 3. Accessing Values in an Array
What do you use to access a specific value stored in an array?
Given var students = ["Jenil", "Mahir", "Priyesha"];, what does console.log(students[0]); output?
For the same array, what does console.log(students[2]); output?
What value does JavaScript return if you attempt to access an index that does not exist (such as students[10])?
Write a line of code to log the first element of an array named colors.
# 4. Updating Values
How do you update a specific value inside an existing JavaScript array?
Given var marks = [80, 75, 90];, what code would you write to change the second element (75) to 95?
After executing the update from the previous question, what will console.log(marks); output?
True or False: You need to use a special built-in method like update() to change an array element's value.
Can you update a value at an index that is currently outside the bounds of the array? What happens if you assign a value to a much higher index?
# 5. Array Length
What is the name of the built-in property available on every JavaScript array that tells you how many items it contains?
Given var arr = [1, 2, 3, 4];, what does console.log(arr.length); output?
If an array is empty (contains no elements), what is its length property equal to?
Why is the length property particularly useful when working with arrays?
Is length a function call (requiring parentheses ()) or a property?
# 6. Looping Through Arrays
What are the two types of loops demonstrated in the notes for iterating through an array?
In a standard for loop, what condition is typically used to ensure the loop stops before going out of bounds? (i < ...)
In the while loop example, where is the increment step (i++) placed relative to the array access statement?
Write a for loop structure that prints every element of an array named students.
What happens if your loop condition incorrectly uses <= instead of < alongside students.length when accessing elements?
Write a for...of loop that prints every element of an array named subject.
What is the main advantage of using a for...of loop over a traditional for loop when you only need the values (and not the indices)?
Given const colors = ["Red", "Blue", "Green"];, what will the following code output?
for (const color of colors) {
    console.log(color, indexOf(color);
}
# 7. Adding Elements to Arrays
Which method is used to add an element at the end of an array?
Which method is used to add an element at the beginning of an array?
Given let nums = [1, 2, 3];, write the code to add 4 at the end using the appropriate method. What will console.log(nums); show after that?
Continuing from the previous question, write the code to add 0 at the beginning. What will the final array look like?
True or False: push() and unshift() both modify the original array (they are mutating methods).
# 8. Removing Elements
Which method removes the last element of an array?
Which method removes the first element of an array?
Given let nums = [100, 200, 300, 400, 500];, what does nums.pop(); do, and what will the array contain after calling it?
After the previous operation, what does nums.shift(); do, and what will the remaining array contain?
Do pop() and shift() return the removed element, or do they only modify the array?
# 9. Searching in Arrays
What does the indexOf() method return when the searched value is found in the array?
What does indexOf() return when the value is not present in the array?
Given const names = ["Jenil", "Mahir", "Arjun"];, what does console.log(names.indexOf("Mahir")); output?
For the same array, what does console.log(names.indexOf("Krishna")); output?
Write a line of code that finds the index of "Priyesha" in an array named students.
# 10. Array with Different Data Types
Can a JavaScript array store values of different data types (e.g., number, string, boolean, null) in the same array?
Write the syntax to create an array named data that contains a number, a string, a boolean, and null.
How can you check the data type of each element in such an array?
Given const data = [100, "Hello", true, null];, what does typeof data[0] return?
What does typeof data[2] return for the same array?
# 11. Array of Arrays (Matrix) – 2D Arrays
Create a 4×2 matrix and print all elements of the second column.
Given this matrix of student marks, print only the marks of the third student:
const marks = [
    [85, 90, 78],
    [70, 75, 80],
    [88, 82, 95],
    [60, 65, 70]
];
Write code to find and print the total number of elements present in a 3×4 matrix.
Create a 3×3 matrix filled with numbers 1 to 9. Then update the center element (index [1][1]) to 0 and print the matrix.
Access and print the element that is present at the first row and last column of any 3×3 matrix you create.
## # 12. Real-World Example
const marks = [
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82, 89]  // Krishna
];

for (let i = 0; i < marks.length; i++) {
    const studentMarks = marks[i];
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    const avg = total / 3;
    console.log("Student " + (i + 1) + " average: " + avg);
}
In the given marks example, what does marks[i] represent inside the loop?
Why do we use marks.length in the outer loop instead of hard-coding the number 3?
What will happen if one student has only 2 subject marks instead of 3? (Think about the calculation)
## # 13. Common Mistakes
What does the following code output?
const arr = [10, 20, 30];
console.log(arr[3]);
Why is this code considered wrong?
arr[arr.length] = 10;
Correct the above code so that 40 is properly added at the end of the array on the place of 30:
let arr = [10, 20, 30];
arr[arr.length] = 40;
What is a “sparse array”? Give one example of how it can be created accidentally.
True or False: Accessing an invalid index throws an error in JavaScript.
What is the difference between an array and an object in JavaScript? (One key difference)

Answer:
<img width="1015" height="1336" alt="image" src="https://github.com/user-attachments/assets/9377640b-5cc7-4a93-8819-a5a83c359acb" />
<img width="1027" height="1314" alt="image" src="https://github.com/user-attachments/assets/322f648c-f666-4072-9fd8-f23f0ae727bd" />
<img width="967" height="1323" alt="image" src="https://github.com/user-attachments/assets/351ade47-d0a2-4576-bdf5-5ce7d63ad47b" />
<img width="972" height="1295" alt="image" src="https://github.com/user-attachments/assets/19c99846-ee67-47fe-abe6-463d3cd030aa" />
<img width="1032" height="1379" alt="image" src="https://github.com/user-attachments/assets/155ae031-a564-4324-a66c-962b0bc62e78" />
<img width="924" height="1356" alt="image" src="https://github.com/user-attachments/assets/74a32945-d731-4338-9c26-a7f06b79a6bc" />
<img width="1054" height="1319" alt="image" src="https://github.com/user-attachments/assets/97be72f3-640d-4a1c-b9f5-f7be7303862f" />
<img width="1600" height="850" alt="image" src="https://github.com/user-attachments/assets/d2faac2a-50ec-48d2-8aa7-3039497c0fcf" />

# 14. Practice Exercises
Given the array:
const numbers = [12, 7, 18, 25, 4, 9, 30];
Print only the even numbers using a loop.

Given the array:
const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
Print all city names in reverse order (last to first) using a loop.

Given the array:
const scores = [12, 45, 7, 89, 23];
Find and print the second largest number.

Given the array:
const colors = ["Red", "Blue", "Green", "Yellow"];
Use push() to add "Purple" at the end and unshift() to add "Black" at the beginning. Then print the final array.

Given the matrix:

const matrix = [
    [10, 20, 30],
    [40, 50, 60]
];
Calculate and print the sum of all elements.

Given the array:
const marks = [45, 67, 89, 32, 76, 91, 54];
Count how many numbers are greater than 50 and print the count.

Given the matrix:

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
Print only the main diagonal elements (1, 5, 9).

Answer:
1.
const numbers = [12, 7, 18, 25, 4, 9, 30];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
2.
const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
for (let i = cities.length - 1; i >= 0; i--) {
    console.log(cities[i]);
}
3.
const scores = [12, 45, 7, 89, 23];

let largest = scores[0];
let second = scores[0];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > largest) {
        second = largest;
        largest = scores[i];
    } 
    else if (scores[i] > second && scores[i] !== largest) {
        second = scores[i];
    }
}
console.log(second);
4.
const colors = ["Red", "Blue", "Green", "Yellow"];
colors.push("Purple");
colors.unshift("Black");
console.log(colors);
5.
const matrix = [
    [10, 20, 30],
    [40, 50, 60]
];
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum = sum + matrix[i][j];
    }
}
console.log(sum);
6.
const marks = [45, 67, 89, 32, 76, 91, 54];
let count = 0;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 50) {
        count++;
    }
}
console.log(count);
7.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
}

# 15. Multiple Choice Questions
Q1. What will be the output of the following code?

const arr = [5, 10, 15, 20];
console.log(arr[arr.length - 1]);
a) 5
b) 10
c) 15
d) 20

Q2. Which of the following correctly adds an element at the beginning of an array?

const arr = [10, 20, 30];
a) arr.push(5)
b) arr.pop(5)
c) arr.unshift(5)
d) arr.shift(5)

Q3. What does the following code print?

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Orange"));
a) 0
b) 2
c) -1
d) undefined

Q4. Which statement about JavaScript arrays is true?
a) Arrays can only store numbers
b) Arrays are always sorted
c) Arrays can store mixed data types
d) Array indexes start from 1

Q5. What is the output of this code?

let nums = [1, 2, 3];
nums.pop();
nums.push(4);
console.log(nums);
a) [1, 2, 3, 4]
b) [1, 2, 4]
c) [2, 3, 4]
d) [1, 2, 3]

Q6. In the following 2D array, what does matrix[2][1] return?

const matrix = [
    [10, 20],
    [30, 40],
    [50, 60]
];
a) 30
b) 40
c) 50
d) 60

Q7. What will be printed?

const data = [10, "Hello", false];
console.log(typeof data[1]);
a) number
b) string
c) boolean
d) object

Answer:
1.d)20
2.c) arr.unshift(5)
3.c)-1
4.c) Arrays can store mixed data types
5.b) [1, 2, 4]
6.d) 60
7.b) string

#16-A Mini Assignment 1: Shopping Cart Calculator
Given Input:

const cart = [
    ["Laptop", 45000, 1],
    ["Mouse", 800, 2],
    ["Keyboard", 1500, 1],
    ["Headphones", 2500, 1]
];
(Format: [Product Name, Price, Quantity])

Tasks:

Loop through the cart.
For each item, calculate the total price (Price × Quantity).
Print in this format:
Product: Laptop
Price: 45000
Quantity: 1
Item Total: 45000
At the end, print the Grand Total of the entire cart.
Bonus: Apply 10% discount if Grand Total > 50000 and show the final payable amount.

Answer:
const cart = [
    ["Laptop", 45000, 1],
    ["Mouse", 800, 2],
    ["Keyboard", 1500, 1],
    ["Headphones", 2500, 1]
];
let grandTotal = 0;
for (let i = 0; i < cart.length; i++) {
    let product = cart[i][0];
    let price = cart[i][1];
    let quantity = cart[i][2];
    let itemTotal = price * quantity;
    console.log("Product: " + product);
    console.log("Price: " + price);
    console.log("Quantity: " + quantity);
    console.log("Item Total: " + itemTotal);
    grandTotal = grandTotal + itemTotal;
}

console.log("Grand Total: " + grandTotal);

if (grandTotal > 50000) {
    let discount = grandTotal * 10 / 100;
    let finalAmount = grandTotal - discount;
    console.log("Discount: " + discount);
    console.log("Final Payable Amount: " + finalAmount);
} else {
    console.log("Final Payable Amount: " + grandTotal);
}

16-B Mini Assignment 2: Classroom Attendance Tracker
Given Input:

const attendance = [
    ["Jenil", ["P", "P", "A", "P", "P"]],
    ["Mahir", ["P", "A", "P", "P", "A"]],
    ["Yashvi", ["P", "P", "P", "P", "P"]],
    ["Arjun", ["A", "A", "P", "P", "A"]]
];
(P = Present, A = Absent)

Tasks:

Loop through each student.
Count total Presents and Absents.
Calculate attendance percentage.
Print in this format:
Name: Jenil
Present: 4
Absent: 1
Attendance: 80%
Status: Good
Status rule:
≥ 75% → Good
< 75% → Low Attendance
Bonus: Print the name of the student with highest attendance

Answer:
const attendance = [
    ["Jenil", ["P", "P", "A", "P", "P"]],
    ["Mahir", ["P", "A", "P", "P", "A"]],
    ["Yashvi", ["P", "P", "P", "P", "P"]],
    ["Arjun", ["A", "A", "P", "P", "A"]]
];

let highest = 0;
let topper = "";

for (let i = 0; i < attendance.length; i++) {
    let name = attendance[i][0];
    let records = attendance[i][1];
    let present = 0;
    let absent = 0;
    for (let j = 0; j < records.length; j++) {
        if (records[j] == "P") {
            present++;
        } else {
            absent++;
        }
    }
    let percentage = (present / 5) * 100;
    console.log("Name: " + name);
    console.log("Present: " + present);
    console.log("Absent: " + absent);
    console.log("Attendance: " + percentage + "%");
    if (percentage >= 75) {
        console.log("Status: Good");
    } else {
        console.log("Status: Low Attendance");
    }
    console.log("");
    if (percentage > highest) {
        highest = percentage;
        topper = name;
    }
}

console.log("Highest Attendance: " + topper);

#16-C Mini Assignment 3: Movie Rating Analyzer
Given Input:

const movies = [
    ["Inception", [9, 8, 9, 10, 8]],
    ["Avatar", [7, 8, 7, 6, 8]],
    ["Interstellar", [10, 9, 9, 10, 9]],
    ["Joker", [8, 7, 8, 9, 8]]
];
Tasks:

For each movie, calculate the average rating.
Print in this format:
Movie: Inception
Ratings: 9 8 9 10 8
Average Rating: 8.8
Verdict: Excellent
Verdict rules:
Average ≥ 9 → Excellent
Average ≥ 7 and < 9 → Good
Average < 7 → Average
Bonus: Find and print the movie with the highest average rating.

Answer:
const movies = [
    ["Inception", [9, 8, 9, 10, 8]],
    ["Avatar", [7, 8, 7, 6, 8]],
    ["Interstellar", [10, 9, 9, 10, 9]],
    ["Joker", [8, 7, 8, 9, 8]]
];

let highest = 0;
let bestMovie = "";

for (let i = 0; i < movies.length; i++) {
    let name = movies[i][0];
    let ratings = movies[i][1];
    let sum = 0;
    for (let j = 0; j < ratings.length; j++) {
        sum = sum + ratings[j];
    }
    let average = sum / ratings.length;
    console.log("Movie: " + name);
    console.log("Ratings: " + ratings.join(" "));
    console.log("Average Rating: " + average);
    if (average >= 9) {
        console.log("Verdict: Excellent");
    } else if (average >= 7) {
        console.log("Verdict: Good");
    } else {
        console.log("Verdict: Average");
    }
    console.log("");
    if (average > highest) {
        highest = average;
        bestMovie = name;
    }
}

console.log("Highest Rated Movie: " + bestMovie);

#16-D Mini Assignment 4: Temperature of the Week
Given Input:

const temperatures = [
    ["Monday", 32],
    ["Tuesday", 35],
    ["Wednesday", 30],
    ["Thursday", 28],
    ["Friday", 33],
    ["Saturday", 36],
    ["Sunday", 31]
];
Tasks:

Print the temperature of each day.
Find and print:
Highest temperature + day
Lowest temperature + day
Average temperature of the week
Print a warning if any day has temperature ≥ 35:
Heat Alert on <Day>

Answer:
const temperatures = [
    ["Monday", 32],
    ["Tuesday", 35],
    ["Wednesday", 30],
    ["Thursday", 28],
    ["Friday", 33],
    ["Saturday", 36],
    ["Sunday", 31]
];

let highest = temperatures[0][1];
let lowest = temperatures[0][1];

let highestDay = "";
let lowestDay = "";
let sum = 0;

for (let i = 0; i < temperatures.length; i++) {
    let day = temperatures[i][0];
    let temp = temperatures[i][1];
    console.log(day + ": " + temp + "°C");
    sum = sum + temp;
    if (temp > highest) {
        highest = temp;
        highestDay = day;
    }
    if (temp < lowest) {
        lowest = temp;
        lowestDay = day;
    }
    if (temp >= 35) {
        console.log("Heat Alert on " + day);
    }
}

let average = sum / temperatures.length;

console.log("Highest Temperature: " + highest + "°C on " + (highestDay || "Monday"));
console.log("Lowest Temperature: " + lowest + "°C on " + (lowestDay || "Monday"));
console.log("Average Temperature: " + average.toFixed(2) + "°C");
