import React from 'react';
import './App.css';

interface PieceProps {
  color: "red" | "black";
}

interface StackProps {
  size: number;
  pieceProps: PieceProps;
}

const Stack = ({size, pieceProps }: StackProps) => (
  <>
    {new Array(size).map((_, index) => (
      <Piece key={index.toString()} {...pieceProps}/>
    ))}
  </>
);

const Pawn = (props: PieceProps) => <Stack size={1} pieceProps={props} />;
const King = (props: PieceProps) => <Stack size={2} pieceProps={props} />;

export default Stack;

interface SquareProps {
  color: "red" | "black";
}

const Square: React.FC<SquareProps> = props => (
  <div style={{ backgroundColor: props.color }}>{props.children}</div>
);