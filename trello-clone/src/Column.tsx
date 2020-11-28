import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import {Card} from "./Card";

interface ColumnProps {
  text: string;
  index: number;
}

// use of React.PropsWithChildren type that can enhance props interface and add a definition for children
export const Column = ({ text, index }: React.PropsWithChildren<ColumnProps>) => {
  const { state } = useAppState()
  
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark />
    </ColumnContainer>
  );
};
