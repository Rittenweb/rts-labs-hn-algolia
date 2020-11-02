import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTerms, oldSearch } from './searchSlice';

export default function PastSearches() {
  const dispatch = useDispatch();
  const searches = useSelector(selectTerms); //array of objects with two properties {term: string, results: array}

  function handleClick(searchIndex) {
    dispatch(oldSearch({ results: searches[searchIndex].results }));
  }

  return (
    <div>
      <div>Your Searches</div>
      {searches.map((search, index) => {
        return <div onClick={() => handleClick(index)}>{search.term}</div>;
      })}
    </div>
  );
}
