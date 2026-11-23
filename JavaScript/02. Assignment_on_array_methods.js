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
