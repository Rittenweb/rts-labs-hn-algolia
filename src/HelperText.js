import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearches } from './searchSlice';

export default function HelperText() {
  const searches = useSelector(selectSearches); //array of objects with two properties {term: string, results: array}

  return searches.length > 0 ? (
    <div className='helper-text'>
      Story results are <span className='g'>green</span>. Comment results are <span className='b'>blue</span>. Click on
      a <span className='r'>past search</span> to return to those results.
    </div>
  ) : (
    <div className='helper-text'>
      Enter a term to search for matching HackerNews stories or comments via the{' '}
      <a href='https://hn.algolia.com/api'>HN Search API</a>
    </div>
  );
}
