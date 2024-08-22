import React from 'react';
import './Library.css';  // Ensure to create and include CSS for Library

const Library = () => {
  return (
    <div className="library-container">
      <h2>Library</h2>
      <div className="library-content">
        <h3>Books</h3>
        <ul>
          <li>Mathematics</li>
          <li>Science</li>
          <li>History</li>
          <li>Literature</li>
        </ul>
        <h3>Reference Materials</h3>
        <ul>
          <li>Encyclopedias</li>
          <li>Dictionaries</li>
          <li>Atlases</li>
          <li>Journals</li>
        </ul>
      </div>
    </div>
  );
};

export default Library;
