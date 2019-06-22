# react-context-api-managing-state
Following tutorial on Auth0's site by [Abdulaeeiz Adeshina](https://auth0.com/blog/authors/abdulazeez-adeshina/) on [Redux v. Context in managing state in React](https://auth0.com/blog/react-context-api-managing-state-with-ease/).

# Some highlights:

In Redux:
  - The state of the entire app is stored in a single object (known as the source of truth).
  - To change the state, you need to dispatch `actions` that describe what need to happen.
  - You cannot change properties of objects or make changes to existing arrays.  In Redux, you must always return a new reference to a new object or new array.

In Context:
  - The initial state must be passed to `React.createContext`.  This function then returns on object with a `Provider` and a `Consumer`.
  - The `Provider` component sits at the top of the state tree and accepts a prop called `value`.  This value can be anything.
  - The `Consumer` component can be used anywhere below the `Provider` in the component tree to get a subset of the state.

`redux` is the main library and `react-redux` is a library that facilitates the interaction between React and Redux.  In short, the latter acts as a proxy between React and Redux.


