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
          } else {
            type = 'comment';
          }
          return {
            text: type === 'story' ? hit.title : hit.comment_text,
            url: type === 'story' ? hit.url : hit.story_url,
            date: hit.created_at,
            points: hit.points,
            type,
          };
        });
        dispatch(newSearch({ searchTerm, results }));
        setSearchTerm('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input type='text' name='text' value={searchTerm} onChange={handleChange} className='search-bar'></input>
      <input type='submit' value='Search' className='search-button'></input>
    </form>
  );
}
