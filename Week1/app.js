// Week 1 Assignment - Advanced JavaScript (ES6 Features & Array Methods)

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // ES6 Features: let & const
  const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  //   Function to add style to result display
  function resultStyle(element) {
    Object.assign(element.style, {
      backgroundColor: "hsl(24 9.8% 10%)",
      color: "hsl(32.1 97.7% 83.1%)",
      marginBlockEnd: ".25rem",
      padding: ".25rem",
      borderRadius: ".25rem",
    });
  }

  // Display original array
  const originalArrayElement = document.getElementById("originalArray");
  originalArrayElement.textContent = `[${numbers.join(", ")}]`;

  // ======= Array Methods =======

  // MAP
  document.getElementById("mapBtn").addEventListener("click", () => {
    // ES6 Arrow function
    const doubled = numbers.map((num) => num * 2);

    // Display result
    const resultElement = document.getElementById("mapResult");
    resultElement.textContent = `[${doubled.join(", ")}]`;
    resultStyle(resultElement);
  });

  // FILTER
  document.getElementById("filterBtn").addEventListener("click", () => {
    // ES6 Arrow function with expression
    const evenNumbers = numbers.filter((num) => num % 2 === 0);

    // Display result
    const resultElement = document.getElementById("filterResult");
    resultElement.textContent = `[${evenNumbers.join(", ")}]`;
    resultStyle(resultElement);
  });

  // REDUCE
  document.getElementById("reduceBtn").addEventListener("click", () => {
    // ES6 Arrow function with parameters
    const sum = numbers.reduce((total, num) => total + num, 0);

    // Display result
    const resultElement = document.getElementById("reduceResult");
    resultElement.textContent = `Sum: ${sum}`;
    resultStyle(resultElement);
  });

  // FOREACH
  document.getElementById("forEachBtn").addEventListener("click", () => {
    // Let for variables that will change
    let output = [];

    // forEach with arrow function
    numbers.forEach((num) => output.push(num * 3));

    // Display result
    const resultElement = document.getElementById("forEachResult");
    resultElement.textContent = `[${output.join(", ")}]`;
    resultStyle(resultElement);
  });

  // SPLICE
  document.getElementById("spliceBtn").addEventListener("click", () => {
    // ES6 Spread operator to create a copy of the array
    const spliced = [...numbers];

    // Splice modifies the array in place
    spliced.splice(5, 1, 99);

    // Display result
    const resultElement = document.getElementById("spliceResult");
    resultElement.textContent = `Original: [${numbers.join(", ")}]
                                   Modified: [${spliced.join(", ")}]`;
    resultStyle(resultElement);
  });

  // ======= ES6 Features =======

  // SCOPE TEST (let & const)
  document.getElementById("scopeBtn").addEventListener("click", () => {
    // Block scope demonstration
    let blockMessage = "";

    {
      // These variables are only accessible inside this block
      let blockScoped = "Only available inside this block";
      const PI = 3.14159;

      blockMessage = `Inside block: blockScoped = "${blockScoped}", PI = ${PI}`;

      // Cannot reassign a const
      try {
        // This would cause an error
        // PI = 4;
        blockMessage += "\nCannot reassign PI (const)";
      } catch (err) {
        blockMessage += "\nError: " + err.message;
      }
    }

    // This would cause an error - blockScoped is not defined outside the block
    try {
      // console.log(blockScoped);
      blockMessage += "\nOutside block: blockScoped is not accessible";
    } catch (e) {
      blockMessage += "\nOutside block: Error if we try to access blockScoped";
    }

    // Display result
    const resultElement = document.getElementById("scopeResult");
    resultElement.textContent = blockMessage;
    resultStyle(resultElement);
  });

  // ARROW FUNCTIONS
  document.getElementById("arrowBtn").addEventListener("click", () => {
    // Regular function
    function square(x) {
      return x * x;
    }

    // Arrow function equivalent
    const squareArrow = (x) => x * x;

    // Multiple parameters with arrow function
    const multiply = (a, b) => a * b;

    // Arrow function with block body
    const greet = (name) => {
      const greeting = `Hello, ${name}!`; // Template literal (another ES6 feature)
      return greeting;
    };

    // Display results
    const resultElement = document.getElementById("arrowResult");
    resultElement.innerHTML = `
              square(5) = ${square(5)}<br>
              squareArrow(5) = ${squareArrow(5)}<br>
              multiply(4, 6) = ${multiply(4, 6)}<br>
              greet("Flexi") = "${greet("Flexi")}"
          `;
    resultStyle(resultElement);
  });

  // OBJECTS
  document.getElementById("objectBtn").addEventListener("click", () => {
    // Object literal enhancements
    const name = "JavaScript";
    const version = "ES6";

    // Object with shorthand properties and methods
    const language = {
      name, // shorthand for name: name
      version,
      describe() {
        // shorthand method
        return `${this.name} ${this.version}`;
      },
    };

    // Object destructuring
    const { name: langName, version: langVersion } = language;

    // Computed property names
    const propName = "creator";
    const updatedLanguage = {
      ...language, // Spread operator with objects
      [propName]: "Brendan Eich", // Computed property name
    };

    // Display results
    const resultElement = document.getElementById("objectResult");
    resultElement.innerHTML = `
              language object: ${JSON.stringify(language)}<br>
              language.describe(): "${language.describe()}"<br>
              Destructured: name = "${langName}", version = "${langVersion}"<br>
              Updated with spread & computed property: ${JSON.stringify(
                updatedLanguage
              )}
          `;
    resultStyle(resultElement);
  });
});
