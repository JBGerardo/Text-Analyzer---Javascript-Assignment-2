import React, { useState } from "react";
import TextInput from "./components/TextInput"; 
import AnalysisReport from "./components/AnalysisReport";
import "./style.css"; 

// Main App component
const App = () => {
  // State to store analysis results
  const [analysis, setAnalysis] = useState(null);

  /**
   * Function to analyze text input
   * @param {string} text - The input text provided by the user
   */
  const analyzeText = (text) => {
    // Split the text into sentences based on the period (.) delimiter
    const sentences = text.split(".").filter((s) => s.trim().length > 0);
    
    // Extract words from the text (ignoring case)
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    
    // Count the frequency of each word
    const wordFrequency = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

    // Update the analysis state with the computed results
    setAnalysis({
      sentenceCount: sentences.length, // Store number of sentences
      wordFrequency, // Store word frequency count
    });
  };

  return (
    <div>
      {/* Render TextInput component and pass analyzeText as a prop */}
      <TextInput onAnalyze={analyzeText} />
      {/* Render AnalysisReport component and pass the analysis data */}
      <AnalysisReport analysis={analysis} />
    </div>
  );
};

export default App; 
