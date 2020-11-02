import {
  createSlice
} from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searches: [],
    currentResults: []
  },
  reducers: {
    newSearch: (state, action) => {
      state.searches.push({
        term: action.payload.searchTerm,
        results: action.payload.results
      })
      state.currentResults = action.payload.results;
    },
    oldSearch: (state, action) => {
      state.currentResults = action.payload.results;
    }
  },
});

export const {
  newSearch,
  oldSearch
} = searchSlice.actions;

export const selectSearches = state => state.search.searches;
export const selectResults = state => state.search.currentResults

export default searchSlice.reducer;