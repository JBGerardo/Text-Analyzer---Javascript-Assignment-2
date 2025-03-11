import React, { useState } from "react"; 

// Define the TextInput component which takes an `onAnalyze` function as a prop
const TextInput = ({ onAnalyze }) => {
  // State to store the text input by the user
  const [text, setText] = useState("");

  // State to store any validation error messages
  const [error, setError] = useState("");

  /**
   * Function to validate user input
   * @param {string} input - The text entered by the user
   * @returns {string} - An error message if validation fails, otherwise an empty string
   */
  const validateInput = (input) => {
    // Check if the input contains any numbers
    if (/\d/.test(input)) {
      return "Numbers are not allowed.";
    }

    // Check if the input contains two consecutive dots ("..")
    if (/\.{2,}/.test(input)) {
      return "Consecutive dots are not allowed.";
    }

    return ""; // Return an empty string if no validation errors are found
  };

  /**
   * Function to handle text input changes
   * @param {object} e - The event object triggered by the input field
   */
  const handleChange = (e) => {
    const newText = e.target.value; // Get the updated input value
    setText(newText); // Update the state with the new text
    setError(validateInput(newText)); // Validate input and store the error message if applicable
  };

  /**
   * Function to handle form submission
   * It checks if the input is valid before calling `onAnalyze`
   */
  const handleSubmit = () => {
    const validationError = validateInput(text); // Validate input before processing

    if (validationError) {
      alert(validationError); // Show an alert message if the input is invalid
    } else {
      onAnalyze(text); // Call the `onAnalyze` function if input is valid
    }
  };

  return (
    <div>
      <h2>Text Analyzer</h2>
      {/* Textarea input for the user to enter text */}
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleChange} // Trigger validation on every input change
      />
      <br />
      {/* Analyze button: always enabled but ensures valid input before processing */}
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
};

export default TextInput; 
