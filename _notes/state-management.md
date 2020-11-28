
we’ll throw together a poor man’s version of Redux using 
- useReducer hook and 
- React context API


Reducer is a function that calculates a new state by combining an old state with an
action object
```
  function reducer(state,action){
    return new state;
  }
```

Actions are special objects that are passed to the reducer function to calculate the
new state.
Actions must contain a type field and some field for payload. The type field is
mandatory. Payload often has some arbitrary name.
Here is an action that could be used to update name field:
```
{ type: "SET_NAME", name: "George" }

type Action =
| {
type: "increment"
}
| {
type: "decrement"
}
```
defining our Action as a type instead of an interface gives us a bunch of
important advantages



You can call useReducer inside your functional components. On every state change,
your component will re-rendered.

useReducer Hook
```
const [state, dispatch] = useReducer(reducer, initialState)
```
useReducer accepts a reducer and initial state. It returns the current state paired
with a dispatch method.
dispatch method is used to send actions to the reducer.

define a data structure for our application and make it available to all the
components through React’s Context API

use createContext to define AppStateContext
