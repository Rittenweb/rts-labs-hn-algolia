import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearches, oldSearch } from './searchSlice';

export default function PastSearches() {
  const dispatch = useDispatch();
  const searches = useSelector(selectSearches); //array of objects with two properties {term: string, results: array}

  function handleClick(searchIndex) {
    dispatch(oldSearch({ results: searches[searchIndex].results }));
  }

  return (
    <div className='past-searches'>
      {searches.length > 0 && <div className='past-searches-header'>Your Searches</div>}
      {searches.map((search, index) => {
        return (
          <div onClick={() => handleClick(index)} key={index} className='past-search'>
            {search.term}
          </div>
        );
      })}
    </div>
  );
}
