import Food from './foods'

const initialState = {
  food: Food,
  searchTerm: ''
}

export default function reducer (state = initialState, action) {
  // switch between the action types
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGED':
      const { searchTerm } = action.payload
      return {
        ...state,
        searchTerm: searchTerm,
        food: searchTerm
          ? Food.filter((food) => (food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1))
          : Food
      }
    default:
      return state
  }
}

/*
  Here the reducer function receives two parameters: state and action.  When the React application starts, this
  function will get the initial state defined and when instances of the action are dispatched, the function will get
  current state (not initial state).  Based on the resuts of these actions, the reducer function generates a new
  state for the app.  The actions are defined in actions.js
*/
