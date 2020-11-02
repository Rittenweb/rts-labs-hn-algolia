import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import PastSearches from './PastSearches';
import './App.css';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <SearchResults />
      <PastSearches />
    </div>
  );
}

export default App;
