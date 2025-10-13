const display = document.querySelector("input");

// Select all buttons
const buttons = document.querySelectorAll("button");

// Variable to store the current input
let currentInput = "";

// Loop through buttons and add click functionality
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      // Clear all input
      currentInput = "";
    } else if (value === "C") {
      // Delete last character
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      // Try to evaluate the result
      try {
        currentInput = eval(currentInput.replace(/x/g, "*"));
      } catch (error) {
        currentInput = "Error";
      }
    } else {
      // Add value to current input
      currentInput += value;
    }

    // Update the display
    display.value = currentInput;
  });
});