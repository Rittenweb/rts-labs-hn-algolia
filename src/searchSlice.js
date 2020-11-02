import {
  createSlice
} from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerms: [],
    currentResults: []
  },
  reducers: {
    newSearch: (state, action) => {
      console.log(action)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.searchTerms.push({
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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTerms = state => state.search.searchTerms;
export const selectResults = state => state.search.currentResults

export default searchSlice.reducer;