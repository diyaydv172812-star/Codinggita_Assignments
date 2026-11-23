1. push()

Create an array of 3 colors. Use push() to add two more colors and print the final array.
Start with an empty array. Use push() three times to add the numbers 5, 10 and 15. Print the array.
Create an array ["Pen", "Book"]. Add "Eraser" and "Scale" using a single push() call and print the result.
Where does push() add the new element(s) in the array?
Does push() change the original array? Explain in one sentence.
Answer:
1.
const color=["Red","Blue","pink"]
color.push("Yellow","Purple")
console.log(color)
2.
let num = []
num.push(5)
num.push(10)
num.push(15)
console.log(num)
3.
let stationary = ["Pen", "Book"]
stationary.push("Eraser","Scale")
console.log(stationary)
4.
It adds them at the end of the array.
5.
Yes, push() is a mutating method that modifies the original array directly and returns the new length of the array.

2. pop()

Create an array of 5 numbers. Use pop() twice and print the modified array and the two removed values.
Create an array ["Red", "Blue", "Green"]. Remove the last element using pop() and print both the array and the removed element.
Start with [100, 200, 300, 400]. Call pop() once and store the returned value in a variable. Print the variable and the array.
What does pop() return?
What happens if you call pop() on an empty array?

Answer:
1.
let nums = [10, 20, 30, 40, 50];
let last1 = nums.pop();
let last2 = nums.pop();
console.log("Modified array:", nums); 
console.log("Removed values:", last1, last2);
2.
let color = ["Red", "Blue", "Green"];
let lastcolor = color.pop();
console.log("Modified array:", color); 
console.log("Removed values:", lastcolor); 
3.
let arr = [100, 200, 300, 400]
let removed = arr.pop()
console.log("Removed:",removed)
console.log(arr)
4.
It returns the removed last element from the array.
5.
It does not throw an error; it simply returns undefined and leaves the array empty.

3. unshift()

Start with ["CSS", "JavaScript"]. Use unshift() to add "HTML" at the beginning and print the array.
Create an array [20, 30]. Add 5 and 10 at the beginning using unshift() and print the result.
Create an empty array. Use unshift() to add three city names one by one and print the final array.
Where does unshift() add the new element(s)?
Can unshift() add more than one element at the same time? Give a short explanation.
Answer:
1.
let languages = ["CSS", "JavaScript"];
languages.unshift("HTML");
console.log(languages);
2.
let numbers = [20, 30];
numbers.unshift(5, 10);
console.log(numbers);
3.
let cities = [];
cities.unshift("Mumbai");
cities.unshift("Delhi");
cities.unshift("Bengaluru");
console.log(cities);
4.
unshift() adds one or more new elements to the beginning (index 0) of an array and shifts all existing elements to higher indices.
5.
Yes. The unshift() method accepts multiple arguments separated by commas. It adds all of them to the beginning of the array in the order they are passed.

4. shift()

Create an array of 4 city names. Remove the first city using shift() and print the remaining array and the removed city.
Create [10, 20, 30, 40]. Call shift() twice and print the final array and both removed values.
Start with ["Apple", "Banana", "Mango"]. Remove the first element and store it in a variable. Print the variable and the array.
How is shift() different from pop()?
What does shift() return?
Answer:
1.
let cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai"];
let removedCity = cities.shift();
console.log("Removed city:", removedCity);
console.log("Remaining array:", cities);
2.
let numbers = [10, 20, 30, 40];
let firstRemoved = numbers.shift();
let secondRemoved = numbers.shift();
console.log("Removed values:", firstRemoved, "and", secondRemoved);
console.log("Final array:", numbers);
3.
let fruits = ["Apple", "Banana", "Mango"];
let removedFruit = fruits.shift();
console.log("Variable:", removedFruit);
console.log("Array:", fruits);
4.
shift() removes an element from the beginning (index 0) of an array and shifts all subsequent elements down.
pop() removes an element from the end of an array.
5.
shift() returns the element that was removed from the beginning of the array. If the array is empty, it returns undefined.

5. indexOf()

Create an array of 6 fruits. Find the index of a fruit that exists and one that does not exist using indexOf().
Create an array ["A", "B", "C", "B", "D"]. Print the index of "B" using indexOf().
Create an array of 4 student names. Check the index of your name (or any name) and print the result.
What does indexOf() return if the element is not found?
What will indexOf() return if the element appears more than once in the array?
Answer:
1.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"];
console.log(fruits.indexOf("Mango")); 
console.log(fruits.indexOf("Strawberry")); 
2.
let letters = ["A", "B", "C", "B", "D"];
console.log(letters.indexOf("B")); 
3.
let students = ["Aarav", "Diya", "Rohan", "Ananya"];
console.log(students.indexOf("Rohan"));
4.
indexOf() returns -1 if the element is not present in the array.
5.
It returns the index of the first occurrence (the first index where the element is found) scanning from left to right.

6. lastIndexOf()

Create an array where one element is repeated 3 times. Use lastIndexOf() to find the last occurrence of that element.
Create ["X", "Y", "Z", "Y", "X"]. Print the last index of "Y" and "X".
Create an array of 5 numbers with one number repeated. Find its last index using lastIndexOf().
How is lastIndexOf() different from indexOf()?
When would you prefer lastIndexOf() over indexOf()?
Answer:
1.
let items = ["pen", "pencil", "eraser", "pen", "scale", "pen"];
console.log(items.lastIndexOf("pen"));
2.
let arr = ["X", "Y", "Z", "Y", "X"];
console.log("Last index of Y:", arr.lastIndexOf("Y"));
console.log("Last index of X:", arr.lastIndexOf("X")); 
3.
let numbers = [10, 20, 30, 20, 40];
console.log(numbers.lastIndexOf(20)); 
4.
indexOf() searches from the beginning (left to right) and returns the index of the first occurrence.
lastIndexOf() searches backward (right to left) and returns the index of the last occurrence.
5.
You would prefer lastIndexOf() when an element appears multiple times in an array and you specifically need the most recent or final 
position of that element (for example, finding the last time a user clicked a button or the final occurrence of an extension in a 
file path).

7. includes()

Create an array of your friends’ names. Check whether a particular name is present using includes() and print a suitable message.
Create an array of numbers [11, 22, 33, 44]. Check if 33 and 55 are present using includes().
Create an array of 4 subjects. Use includes() to check for one subject that exists and one that does not.
What does includes() return?
Does includes() work the same way for both numbers and strings?
Answer:
1.
let friends = ["Aarav", "Rohan", "Sneha", "Priya"];
let searchName = "Rohan";
if (friends.includes(searchName)) {
    console.log(searchName + " is in your friends list!");
} else {
    console.log(searchName + " is not in the list.");
}
2.
let numbers = [11, 22, 33, 44];
console.log(numbers.includes(33));
console.log(numbers.includes(55)); 
3.
let subjects = ["Maths", "Science", "English", "History"];
console.log(subjects.includes("Science")); 
console.log(subjects.includes("Computer Science"));
4.
includes() returns a boolean value: true if the specified element is found in the array, and false if it is not found.
5.
Yes. It works identically for numbers, strings, and booleans. It performs a strict equality check (===) to look for the
element, meaning type and value must both match.
