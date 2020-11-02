import React, { useState } from 'react';
import { newSearch } from './searchSlice';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let queryString = 'https://hn.algolia.com/api/v1/search?query=' + searchTerm;
    fetch(queryString)
      .then((response) => response.json())
      .then((data) => {
        let results = data.hits.filter((hit) => {
          return hit._tags.includes('story') || hit._tags.includes('comment');
        });
        results = data.hits.map((hit) => {
          let type;
          if (hit._tags.includes('story')) {
            type = 'story';
          } else if (hit._tags.includes('comment')) {
            type = 'comment';
          }
          return {
            title: hit.title,
            url: hit.url,
            date: hit.created_at,
            points: hit.points,
            type,
          };
        });
        console.log(results);
        dispatch(newSearch({ searchTerm, results }));
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='text' value={searchTerm} onChange={handleChange}></input>
      <input type='submit' value='Search'></input>
    </form>
  );
}
