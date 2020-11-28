```
npm i react-dnd react-dnd-html5-backend
```
react-dnd has type definitions included, so we don’t have to install them separately.
This provider will add a dragging context to our app. It will allow us to use useDrag
and useDrop hooks inside our components

When we begin to drag some item we have to provide information about it to
react-dnd.

We’ll pass an object that will describe the item we are currently dragging.

we need to know what kind of item are we dragging. We need to know the type, to know if
it’s a card or a column. And we need to know the id of this particular item.
Let’s store the dragged item in our app state