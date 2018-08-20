import { SEARCH } from '../actions/constants';

const initialState = {
  searchTerm: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      };

    default:
      return state;
  }
}