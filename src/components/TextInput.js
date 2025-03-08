import React, { useState } from "react";

const TextInput = ({ onAnalyze }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onAnalyze(text);
    }
  };

  return (
    <div>
      <h2>Text Analyzer</h2>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
};

export default TextInput;
