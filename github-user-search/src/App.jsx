
import { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub users and view their profiles</p>
      </header>

      <main className="app-main">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <div className="results-container">
          <p>Enter a username to start searching</p>
        </div>
      </main>
    </div>
  );
}

export default App;
