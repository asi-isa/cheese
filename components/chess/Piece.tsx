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
  board: SquareType[];
  setBoard: Dispatch<SetStateAction<SquareType[]>>;
  index: number;
}

function getPieceUrl(pieceName: PieceName, color: PieceColor) {
  const baseUrl = "/pieces/";
  const fileType = ".png";

  return baseUrl + pieceName + "_" + color + fileType;
}

/**
 * checks if piece of type can move to a position
 * or not i.e. position is blocked by another piece,
 * is forbidden by chess rules, ...
 */
function canMoveTo(position: number, board: SquareType[], color: PieceColor) {
  // position is blocked by another piece of same color
  if (board[position] && board[position].piece?.color === color) {
    return false;
  }

  return true;
}

function getOffsets(type: PieceName, moved: boolean, invert: boolean) {
  if (type === "pawn") {
    const offsets = moved ? [8] : [8, 16];
    return invert ? invertNums(offsets) : offsets;
  }

  return [] as number[];
}

function invertNums(numArray: number[]) {
  return numArray.map((num) => num * -1);
}

function getMoveablePositions(
  type: PieceName,
  index: number,
  color: PieceColor,
  moved: boolean,
  board: SquareType[]
) {
  const offsets = getOffsets(type, moved, color === "white");

  const possiblePositions = offsets.map((offset) => offset + index);

  const positions = [];
  for (let i = 0; i < possiblePositions.length; i++) {
    const position = possiblePositions[i];

    // if 'first' position is blocked, dont bother checking the next position
    if (!canMoveTo(position, board, color)) {
      break;
    }

    positions.push(position);
  }

  return positions;
}

function highlightMoveablePositions(
  type: PieceName,
  index: number,
  color: PieceColor,
  moved: boolean,
  board: SquareType[],
  setBoard: Dispatch<SetStateAction<SquareType[]>>
) {
  const moveablePositions = getMoveablePositions(
    type,
    index,
    color,
    moved,
    board
  );

  setBoard((currentBoard) => {
    return currentBoard.map((square, i) => {
      const canMoveToPosition = moveablePositions?.includes(i);

      const possiblePiece = canMoveToPosition
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

const Piece = ({ name, color, moved, board, setBoard, index }: PieceProps) => {
  return (
    <div
      className="w-full h-full cursor-pointer"
      onClick={() =>
        highlightMoveablePositions(name, index, color, moved, board, setBoard)
      }
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
