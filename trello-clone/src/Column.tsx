import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";

interface ColumnProps {
  id: string;
  text: string;
  index: number;
}

// use of React.PropsWithChildren type that can enhance props interface and add a definition for children
export const Column = ({ text, index, id }: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })}
        dark
      />
    </ColumnContainer>
  );
};
