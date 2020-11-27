

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

You can call useReducer inside your functional components. On every state change,
your component will re-rendered.

useReducer
```
const [state, dispatch] = useReducer(reducer, initialState)
```