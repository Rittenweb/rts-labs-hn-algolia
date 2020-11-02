import React from 'react';
import { useSelector } from 'react-redux';
import { selectResults } from './searchSlice';

export default function SearchResults() {
  const results = useSelector(selectResults);

  return (
    <div>
      {results.map((result) => {
        return (
          <div>
            {result.title} - {result.date}
          </div>
        );
      })}
    </div>
  );
}
