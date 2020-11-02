import React from 'react';
import { useSelector } from 'react-redux';
import { selectResults } from './searchSlice';

export default function SearchResults() {
  const results = useSelector(selectResults); //Array of objects, each of which has {type, date, url, text, points}

  return (
    <div className='search-results'>
      {results.length > 0 && <div className='search-results-header'>Search Results</div>}
      {results.map((result, index) => {
        let className = result.type === 'story' ? 'search-result story' : 'search-result comment';
        let date = new Date(result.date);
        let dateString = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
        return (
          <a href={result.url} key={index} className={className}>
            <span>{dateString}</span>
            <span dangerouslySetInnerHTML={{ __html: result.text }}></span>
            <span>{result.points} Points</span>
          </a>
        );
      })}
    </div>
  );
}
