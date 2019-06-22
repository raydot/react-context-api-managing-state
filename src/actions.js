function searchTermChanged (searchTerm) {
  return {
    type: 'SEARCH_INPUT_CHANGED',
    payload: { searchTerm }
  }
}

export default { searchTermChanged }

/*
  With the action creator in place, all that's left to do is wrap the App component in to the react-redux
  Provider component.  This provider is responsible for making the single source of truth (store) available
  to the App.
*/
