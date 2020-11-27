```
interface ColumnProps {
  text?: string;
}

export const Column : React.FC<ColumnProps> = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>Column Title</ColumnTitle>
    </ColumnContainer>
  );
};
```