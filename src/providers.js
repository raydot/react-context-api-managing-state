import React from 'react'
import Food from './foods'

const DEFAULT_STATE = { allFood: Food, searchTerm: '' }

export const ThemeContext = React.createContext(DEFAULT_STATE)

export default class Provider extends React.Component {
  state = DEFAULT_STATE
  searchTermChanged = searchTerm => {
    this.setState({ searchTerm })
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        ...this.state,
        searchTermChanged: this.searchTermChanged
      }}> {this.props.children} 
      </ThemeContext.Provider>
    )
  }

}

/*
  The Provider class in the code above is responsible for encapsualating other components inside the 
  ThemeContext.Provider.  This enables these components to have access to App state and to the 
  searchTermChanged function.

  To consume these values in the component tree, a ThemeContext.consumer component is needed.
  This component will need a render function that will receive the above value props as arguments
  to use.  (See consumer.js)
*/