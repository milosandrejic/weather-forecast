import * as actionTypes from '../actionTypes/searchActionTypes';

const initialState = {
  searchQuery: '',
  searchResults: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case actionTypes.SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case actionTypes.RESET_SEARCH:
      return initialState;
    default:
      return state;
  }
};
