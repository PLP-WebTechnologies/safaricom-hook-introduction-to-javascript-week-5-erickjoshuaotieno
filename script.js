// Declare variables of different types
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "gaming"];
const user = { name: "John", role: "Developer" };

// Log values and types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Simple calculator function
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid input. Please enter numbers.");
      return;
    }
  
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        alert("Invalid operation. Please choose +, -, *, or /.");
        return;
    }
  
    alert(`Result: ${result}`);
  }
  
  calculator();
  
  // Greet user function
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript Assignment.`;
  }
  
  // Display greeting in an HTML element
  const dynamicContent = document.getElementById("dynamic-content");
  dynamicContent.textContent = greetUser("John");
  
  // if  statement

  const userAge = parseInt(prompt("Enter your age:"));
const eligibilityMessage = userAge >= 18
  ? "You are eligible to vote."
  : "You are not eligible to vote yet.";

const paragraph = document.createElement("p");
paragraph.textContent = eligibilityMessage;
document.body.appendChild(paragraph);

// Display numbers from 1 to 10
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = i;
  numberList.appendChild(listItem);
}


// Change <h1> text
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add new <p> to #dynamic-content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);
