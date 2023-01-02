import { Dispatch, SetStateAction } from "react";
import { SquareType } from "../../data";
import Piece, { PieceType } from "./Piece";
import PossiblePiece from "./PossiblePiece";

interface SquareProps extends SquareType {
  setBoard: Dispatch<SetStateAction<SquareType[]>>;
  i: number;
}

export const SQUARE_SIZE = 42;

function determineBorderRadius(i: number) {
  if (i === 0) return "rounded-tl-lg";
  if (i === 7) return "rounded-tr-lg";
  if (i === 56) return "rounded-bl-lg";
  if (i === 63) return "rounded-br-lg";
}

const Square = ({ i, piece, possiblePiece, setBoard }: SquareProps) => {
  const rowNum = Math.floor(i / 8);
  const rowNumIsEven = rowNum % 2 === 0;
  const squareNumIsEven = i % 2 === 0;
  const backgroundColor =
    rowNumIsEven !== squareNumIsEven ? "#97999f77" : "#fff";

  const borderRadius = determineBorderRadius(i);

  return (
    <div
      style={{
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        backgroundColor,
      }}
      className={`flex justify-center items-center backdrop-blur-lg mix-blend-lighten ${borderRadius}`}
    >
      {piece && <Piece {...piece} index={i} setBoard={setBoard} />}

      {possiblePiece && (
        <PossiblePiece
          possiblePiece={possiblePiece}
          index={i}
          setBoard={setBoard}
        />
      )}
    </div>
  );
};

export default Square;
