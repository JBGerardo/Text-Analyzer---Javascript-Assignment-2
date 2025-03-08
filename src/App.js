import React, { useState } from "react";
import TextInput from "./components/TextInput";
import AnalysisReport from "./components/AnalysisReport";
import "./style.css"; 

const App = () => {
  const [analysis, setAnalysis] = useState(null);

  const analyzeText = (text) => {
    const sentences = text.split(".").filter((s) => s.trim().length > 0);
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    
    const wordFrequency = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

    setAnalysis({
      sentenceCount: sentences.length,
      wordFrequency,
    });
  };

  return (
    <div>
      <TextInput onAnalyze={analyzeText} />
      <AnalysisReport analysis={analysis} />
    </div>
  );
};

export default App;
