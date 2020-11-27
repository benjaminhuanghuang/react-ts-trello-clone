To focus on the input we’ll use React feature called refs.
Refs provide a way to access the actual DOM nodes of rendered React elements.

Here we use the useRef hook to get access to the rendered input element
```
import { useRef, useEffect } from "react";


export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  });
  return ref;
};
```