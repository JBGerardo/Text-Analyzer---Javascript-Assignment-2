import React from "react";

const AnalysisReport = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="report-container">
      <h3>Analysis Report</h3>
      <p><strong>Total Sentences:</strong> {analysis.sentenceCount}</p>
      
      <h4>Word Frequency:</h4>
      <table className="word-frequency-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
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
