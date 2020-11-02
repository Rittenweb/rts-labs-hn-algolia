import React from 'react';
import SearchBar from './SearchBar';
import HelperText from './HelperText';
import SearchResults from './SearchResults';
import PastSearches from './PastSearches';
import './App.css';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <HelperText />
      <div className='app-body'>
        <PastSearches />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
