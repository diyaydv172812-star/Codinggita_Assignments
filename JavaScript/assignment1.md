Section A: Short Answer Questions (1 Mark each)
Q1. What is JavaScript?

Q2. Who created JavaScript and in which year?

Q3. What was the original name of JavaScript?

Q4. Is JavaScript the same as Java? Give one major difference.

Q5. What does it mean when we say JavaScript is a high-level programming language?

Q6. Is JavaScript a compiled language or an interpreted language? Explain briefly.

Q7. Name the JavaScript engines used by the following browsers:

Google Chrome
Mozilla Firefox
Apple Safari
Q8. What is Dynamic Typing in JavaScript?

Q9. What is the main difference between a static website and a dynamic website?

Q10. Name the three pillars of Front-end Web Development and write one line about each.

Q11. What is the difference between Frontend and Backend?

Q12. What is Node.js?

Q13. Explain ECMAScript. What is its relation with JavaScript?

Answer:<img width="1080" height="1492" alt="image" src="https://github.com/user-attachments/assets/a347564a-6124-4113-88f8-f7c4ac1bd75e" />
<img width="1080" height="1564" alt="image" src="https://github.com/user-attachments/assets/fb8db4cb-acef-49a0-b016-d497764fd9da" />

Section B: True or False
(Write True or False. If False, correct the statement)

1.JavaScript is a statically typed language.
2.JavaScript can only run inside the browser.
3.HTML is responsible for the behaviour of a webpage.
4.Node.js allows JavaScript to run outside the browser.
5.JavaScript is case-insensitive.
6.let name and let Name are the same variable.
7.ECMAScript is a programming language.
8.React, Angular, and Vue.js are used for Backend development.
Answer:<img width="899" height="1599" alt="image" src="https://github.com/user-attachments/assets/91e15e21-5db5-40fb-ae5d-9da429ca071c" />


Section C: Fill in the Blanks
1.JavaScript was created by ______________ in the year ______________.
2.The three technologies used in Front-end development are __________, __________, and __________.
3.JavaScript engines: Chrome uses __________, Firefox uses __________.
4.In the restaurant analogy: Customer = __________, Waiter = __________, Chef = __________.
5.JavaScript file extension is __________.
Answer:<img width="603" height="1599" alt="image" src="https://github.com/user-attachments/assets/ddc5c2a4-4690-43de-ae53-7d8b2e1c5657" />


Section D: Conceptual Questions (2 Marks each)
Q14. Differentiate between a static website and a dynamic website. Give one real-world example of each.

Q15. Explain any two features of JavaScript that make it suitable for creating interactive web pages.

Q16. List any four areas (apart from web browsers) where JavaScript is used today. Mention one popular framework/library for each (if applicable).

Q17. What is the difference between writing JavaScript code:

Inside an HTML file using <script> tag, and
In an external .js file?
Mention two advantages of using an external JavaScript file.
Q18. Explain the difference between Frontend and Backend using the restaurant analogy in your own words.

Q19. Why should a beginner learn JavaScript? Write at least 4 points.

Answer:

<img width="899" height="1599" alt="image" src="https://github.com/user-attachments/assets/5cf9b72e-7d30-43a5-93e5-18e90f722a0e" />
<img width="1080" height="1562" alt="image" src="https://github.com/user-attachments/assets/7f8e9e8d-f1d3-4a41-a79b-72ff39a6eade" />
<img width="1080" height="1465" alt="image" src="https://github.com/user-attachments/assets/b1988291-e184-4623-8f66-fc572dca0a86" />

Section E: Code-Based Questions (3 Marks each)
Q20. Predict the output of the following code and explain why:

let value = 25;
console.log(typeof value);
value = "JavaScript";
console.log(typeof value);
value = false;
console.log(typeof value);
Answer:<img width="899" height="1599" alt="image" src="https://github.com/user-attachments/assets/ab704c37-75eb-46c5-80b4-dd08ccfbecf3" />

Q21. Write a simple HTML + JavaScript program that displays an alert box with the message "Welcome to JavaScript!" when a button is clicked.
Answer:<!DOCTYPE html>
<html>
<head>
    <title>Event-Driven Programming</title>
</head>
<body>

   <button id="myBtn">Click Me</button>
    <p id="demo">Original text</p>

  <script>
        document.getElementById("myBtn").addEventListener("click", function() {
            document.getElementById("demo").textContent = "Button was clicked!";
        });
    </script>

</body>
</html>


Q22. Write JavaScript code to demonstrate event-driven programming.
When a user clicks a button with id "myBtn", the text of a paragraph with id "demo" should change to "Button was clicked!".
Answer:<!DOCTYPE html>
<html>
<head>
    <title>Event-Driven Programming</title>
</head>
<body>

  <button id="myBtn">Click Me</button>
    <p id="demo">Original text</p>

  <script>
        document.getElementById("myBtn").addEventListener("click", function() {
            document.getElementById("demo").textContent = "Button was clicked!";
        });
    </script>

</body>
</html>


Section F: Practical / Application Based (5 Marks)
Q23. Create a complete web page (HTML + JavaScript) that includes the following:

A heading: "My First JavaScript Page"
A button labeled "Click Me"
When the button is clicked:
Show an alert: "Hello, B.Tech Student!"
Change the background color of the page to light blue
Also print "JavaScript is running successfully!" in the browser console.
Write the complete code (you can use Inline or External JavaScript).

Answer:<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript Page</title>
</head>

<body>

  <h1>My First JavaScript Page</h1>

  <button onclick="myFunction()">Click Me</button>

  <script>
        function myFunction() {
            alert("Hello, B.Tech Student!");

            document.body.style.backgroundColor = "lightblue";

            console.log("JavaScript is running successfully!");
        }
    </script>

</body>
</html>

Section G: Higher Order Thinking (Bonus - 3 Marks)
Q24. JavaScript was originally created only for browsers. Today it is used in frontend, backend, mobile apps, desktop apps, and even AI/ML.
In your own words, explain why JavaScript became so popular and multipurpose. Mention the role of Node.js and ECMAScript updates in this growth.

Answer:JavaScript became popular because it is easy to learn, widely supported, and flexible. It started mainly as a language for making web pages interactive, but its use has expanded to many areas.

Frontend: JavaScript makes websites interactive, with libraries and frameworks such as React, Angular, and Vue.

Backend: Node.js made it possible to run JavaScript outside the browser, allowing developers to build servers and APIs using JavaScript.

Mobile and Desktop: Technologies such as React Native and Electron allow JavaScript to be used for mobile and desktop applications.

AI/ML: JavaScript can also be used for machine learning and AI applications through libraries and frameworks such as TensorFlow.js.

ECMAScript updates: Regular ECMAScript updates have added new features, making JavaScript more powerful, efficient, and suitable for modern software development.

In short: JavaScript became multipurpose because it has a large ecosystem, runs in many environments, and continuously evolves through ECMAScript standards. Node.js was especially important because it extended JavaScript's use from the browser to the server.









