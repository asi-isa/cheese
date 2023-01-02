import { Dispatch, SetStateAction } from "react";
import { SquareType } from "../../data";
import { PieceType } from "./Piece";

interface PossiblePieceProps {
  possiblePiece: PieceType | null;
  index: number;
  setBoard: Dispatch<SetStateAction<SquareType[]>>;
}

const PossiblePiece = ({
  possiblePiece,
  index,
  setBoard,
}: PossiblePieceProps) => {
  function movePiece() {
    setBoard((currentBoard) => {
      return currentBoard.map((square, i) => {
        // remove old piece
        if (square.piece?.isSelected) {
          return { piece: null, possiblePiece: null };
        }

        const piece =
          i === index
            ? {
                ...square.possiblePiece!,
                moved: true,
              }
            : square.piece;

        return { piece, possiblePiece: null };
      });
    });
  }

  return (
    <div
      className="absolute w-9 h-9 rounded-full border-2 border-[var(--accent)] cursor-pointer"
      onClick={movePiece}
    />
  );
};

export default PossiblePiece;
