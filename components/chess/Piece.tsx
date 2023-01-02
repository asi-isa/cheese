import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { SquareType } from "../../data";

export type PieceName =
  | "king"
  | "bishop"
  | "rook"
  | "pawn"
  | "queen"
  | "knight";
export type PieceColor = "black" | "white";

export type PieceType = {
  name: PieceName;
  color: PieceColor;
  moved: boolean;
  isSelected: boolean;
};

interface PieceProps extends PieceType {
  setBoard: Dispatch<SetStateAction<SquareType[]>>;
  index: number;
}

function getPieceUrl(pieceName: PieceName, color: PieceColor) {
  const baseUrl = "/pieces/";
  const fileType = ".png";

  return baseUrl + pieceName + "_" + color + fileType;
}

function getMoveablePositionsBasedOn(
  type: PieceName,
  index: number,
  color: PieceColor
) {
  if (type === "pawn") {
    const pos1 = index + (color === "white" ? -8 : 8);
    const pos2 = index + (color === "white" ? -16 : 16);

    return [pos1, pos2];
  }
}

const Piece = ({ name, color, setBoard, index }: PieceProps) => {
  function highlightMoveablePositions() {
    //
    // moveable options
    // type, color, moves, position, other pieces, exceptions
    console.log(index);

    const moveablePositions = getMoveablePositionsBasedOn(name, index, color);

    setBoard((currentBoard) => {
      return currentBoard.map((square, i) => {
        const indexIsAMoveablePosition = moveablePositions?.includes(i);

        const possiblePiece = indexIsAMoveablePosition
          ? currentBoard[index].piece
          : null;

        const piece = square.piece
          ? { ...square.piece, isSelected: index === i }
          : null;

        return {
          possiblePiece,
          piece,
        };
      });
    });
  }

  return (
    <div
      className="w-full h-full cursor-pointer"
      onClick={highlightMoveablePositions}
    >
      <Image
        src={getPieceUrl(name, color)}
        alt={"chess piece " + name}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Piece;
