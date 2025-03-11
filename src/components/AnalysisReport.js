import React from "react"; 

// AnalysisReport component displays the analyzed text report
const AnalysisReport = ({ analysis }) => {
  // If no analysis data is available, return nothing (null)
  if (!analysis) return null;

  return (
    <div className="report-container">
      <h3>Analysis Report</h3>
      <p><strong>Total Sentences:</strong> {analysis.sentenceCount}</p> {/* Display sentence count */}
      
      <h4>Word Frequency:</h4>
      {/* Table to display the frequency of words */}
      <table className="word-frequency-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through word frequency data and display each word and its count */}
          {Object.entries(analysis.wordFrequency).map(([word, count]) => (
            <tr key={word}>
              <td>{word}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalysisReport; 
