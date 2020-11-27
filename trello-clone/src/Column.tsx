import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text?: string;
}

// use of React.PropsWithChildren type that can enhance props interface and add a definition for children
export const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
