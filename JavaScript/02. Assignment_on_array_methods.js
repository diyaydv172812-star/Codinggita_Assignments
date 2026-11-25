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

8. reverse()

Create an array of 5 numbers and reverse it. Print the array before and after reversing.
Create ["A", "B", "C", "D"]. Reverse the array and print the result.
Create an array of 4 city names, reverse it, and print the final array.
Does reverse() create a new array or modify the original one?
What is the meaning of “in-place” when we say reverse() works in-place?
Answer:
1.
let numbers = [10, 20, 30, 40, 50];
console.log("Before reversing:", numbers);
numbers.reverse();
console.log("After reversing:", numbers); 
2.
let letters = ["A", "B", "C", "D"];
letters.reverse();
console.log(letters);
3.
let cities = ["Delhi", "Mumbai", "Bengaluru", "Chennai"];
cities.reverse();
console.log(cities);
4.
reverse() modifies the original array directly (it is a mutating method).
5.
When something works in-place, it means it alters the existing data structure directly in memory rather than allocating
memory for a brand-new copy. In the case of reverse(), it rearranges the elements of the original array itself and returns 
that same mutated array.

9. sort() – Basic Version

Sort an array of 5 student names alphabetically and print the result.
Create an array ["Dog", "Cat", "Elephant", "Ant"] and sort it. Print the sorted array.
Create the array [40, 100, 5, 25] and sort it. Print the result.
Why does sort() give an incorrect order for the numbers [40, 100, 5, 25]?
Does sort() change the original array?
Answer:
1.
let students = ["Rohan", "Aarav", "Priya", "Sneha", "Karan"];
students.sort();
console.log(students);
2.
let animals = ["Dog", "Cat", "Elephant", "Ant"];
animals.sort();
console.log(animals);
3.
let numbers = [40, 100, 5, 25];
numbers.sort();
console.log(numbers);
4.
By default, the sort() method converts elements into strings and compares their values based on Unicode code points
(dictionary/alphabetical order). Because it compares strings, "100" comes before "25" because the character '1' 
comes before '2'.
5.
Yes. The sort() method sorts the elements in-place, which means it modifies the original array directly rather than creating a new
sorted copy.

10. join()

Convert an array of 4 programming languages into a string separated by " | ".
Create ["HTML", "CSS", "JavaScript"]. Join them with " - " and print the string.
Create an array of 3 of your favorite subjects and join them using " / ".
What happens if you do not pass any separator to join()?
What does join() return – an array or a string?
Answer:
1.
let languages = ["JavaScript", "Python", "Java", "C++"];
let result = languages.join(" | ");
console.log(result);
2.
let frontEnd = ["HTML", "CSS", "JavaScript"];
let result = frontEnd.join(" - ");
console.log(result);
3.
let subjects = ["Maths", "Physics", "Computer Science"];
let result = subjects.join(" / ");
console.log(result);
4.
If no separator argument is provided, elements are separated by a comma (,) by default (the array elements are converted to 
strings and joined with commas).
5.
join() returns a string created by concatenating all the elements of the array.

11. concat()

Create two arrays of numbers and combine them using concat(). Print the new array and both original arrays.
Create arr1 = [1, 2] and arr2 = [3, 4]. Use concat() and print the result.
Create three small arrays and combine all of them using a single concat() call.
Does concat() change the original arrays?
Can you combine more than two arrays using one concat() call?
Answer:
1.
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let combined = arrA.concat(arrB);
console.log("Original Array 1:", arrA);   
console.log("Original Array 2:", arrB);       
console.log("Combined Array:", combined);  
2.
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);
console.log(result);
3.
let a = [1, 2];
let b = [3, 4];
let c = [5, 6];
let resultAll = a.concat(b, c);
console.log(resultAll); 
4.
No. concat() is a non-mutating method. It leaves the original arrays completely unchanged and returns a brand-new array 
containing the combined elements.
5.
Yes. You can pass multiple arguments (arrays or individual values) separated by commas into a single concat() call, and it 
will merge all of them together in the order they are provided.

12. slice()

From the array [5, 10, 15, 20, 25, 30], extract elements from index 2 to 5 using slice().
Create [10, 20, 30, 40, 50]. Use slice(1, 4) and print both the new array and the original array.
Create an array of 6 numbers. Extract the first 3 elements using slice() and print them.
Does slice() modify the original array?
What happens if you omit the second argument in slice()?
Answer:
1.
let numbers = [5, 10, 15, 20, 25, 30];
let slicedArr = numbers.slice(2, 5); 
console.log(slicedArr);
2.
let original = [10, 20, 30, 40, 50];
let extracted = original.slice(1, 4);
console.log("New array:", extracted);  
console.log("Original array:", original); 
3.
let nums = [12, 24, 36, 48, 60, 72];
let firstThree = nums.slice(0, 3);
console.log(firstThree);
4.
No. slice() is a non-mutating method. It returns a brand-new array containing a shallow copy of the extracted portion, 
leaving the original array completely unchanged.
5.
If you omit the second argument, slice() extracts all elements from the specified starting index all the way to the end of the array.
(For example, arr.slice(2) will copy everything from index 2 onward).

13. splice()

Start with ["Jenil", "Mahir", "Arjun"]. Use splice() to insert "Krishna" between Jenil and Mahir.
Create [10, 20, 30, 40, 50]. Remove two elements starting from index 1 and insert a new number at that position. Print the final array.
Create [100, 200, 300]. Use splice() to replace 200 with 250 and print the array.
What is the main difference between slice() and splice()?
Does splice() change the original array?
Answer:
1.
let names = ["Jenil", "Mahir", "Arjun"];
names.splice(1, 0, "Krishna"); 
console.log(names);
2.
let numbers = [10, 20, 30, 40, 50];
numbers.splice(1, 2, 99); 
console.log(numbers); 
3.
let arr = [100, 200, 300];
arr.splice(1, 1, 250); 
console.log(arr); 
4.
slice() is a non-mutating method that extracts a portion of an array and returns it as a new array without changing the original one.
splice() is a mutating method used to add, remove, or replace elements directly inside the original array.
5.
Yes. splice() modifies the original array in place and returns a new array containing any elements that were removed from it.

14. toString()

Convert an array of your 4 favorite movies into a string using toString() and print it.
Create [1, 2, 3, 4] and convert it to a string using toString(). Print the result.
Create an array of 3 subject names and convert it using toString().
How is toString() different from join()?
What separator does toString() use by default?
Answer:
1.
let movies = ["3 Idiots", "Dangal", "Zindagi Na Milegi Dobara", "Chhichhore"];
console.log(movies.toString());
2.
let numbers = [1, 2, 3, 4];
let result = numbers.toString();
console.log(result); 
3.
let subjects = ["Maths", "Physics", "Chemistry"];
console.log(subjects.toString());
4.
toString() automatically converts the array to a string separated strictly by commas, and you cannot pass any custom separator argument.
join() lets you specify a custom separator (such as a hyphen, space, pipe, or empty string) instead of being restricted to commas.
5.
toString() always uses a comma (,) as the separator between elements.

15. fill()

Create an array of 6 numbers and fill the entire array with the value 10.
Create [1, 2, 3, 4, 5] and fill it with 0. Print the result.
Create an array of 4 elements and fill it with the string "Hello".
Does fill() change the original array?
Can fill() change only a part of the array?
Answer:
1.
let arr = new Array(6);
arr.fill(10);
console.log(arr);
2.
let nums = [1, 2, 3, 4, 5];
nums.fill(0);
console.log(nums); 
3.
let greetings = new Array(4);
greetings.fill("Hello");
console.log(greetings); 
4.
Yes. fill() is a mutating method that modifies the original array in place and returns the modified array.
5.
Yes. You can pass optional start and end indices (arr.fill(value, start, end)) to specify a particular range to fill, leaving the 
rest of the array untouched.
