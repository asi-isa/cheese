import { Dispatch, SetStateAction } from "react";
import { SquareType } from "../../data";
import Square, { SQUARE_SIZE } from "./Square";

interface BoardProps {
  board: SquareType[];
  setBoard: Dispatch<SetStateAction<SquareType[]>>;
}

const FILE_LABELES = "ABCDEFGH".split("");
const RANK_LABELES = "87654321".split("");
const RANK_LABEL_WIDTH = 20;

const FileLabel = ({ title }: { title: string }) => {
  return (
    <div style={{ width: SQUARE_SIZE }}>
      <p className="text-center font-light text-sm opacity-60">{title}</p>
    </div>
  );
};

const RankLabel = ({ title }: { title: string }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: SQUARE_SIZE, width: RANK_LABEL_WIDTH }}
    >
      <p className="text-center font-light text-sm opacity-60">{title}</p>
    </div>
  );
};

const Board = ({ board, setBoard }: BoardProps) => {
  return (
    <div className="bg-[#97999f77] rounded-xl ">
      <div className="flex " style={{ paddingLeft: RANK_LABEL_WIDTH }}>
        {FILE_LABELES.map((l, i) => (
          <FileLabel key={i} title={l} />
        ))}
      </div>

      <div
        className="flex flex-wrap  "
        style={{ width: SQUARE_SIZE * 8 + RANK_LABEL_WIDTH * 2 }}
      >
        {board.map((square, i) => {
          const startOfRow = i % 8 === 0;
          const endOfRow = i % 8 === 7;
          const rowNum = Math.floor(i / 8);

          return (
            <div key={i} className="flex">
              {startOfRow && <RankLabel title={RANK_LABELES[rowNum]} />}

              <Square i={i} setBoard={setBoard} {...square} />

              {endOfRow && <RankLabel title={RANK_LABELES[rowNum]} />}
            </div>
          );
        })}
      </div>

      <div className="flex " style={{ paddingLeft: RANK_LABEL_WIDTH }}>
        {FILE_LABELES.map((l, i) => (
          <FileLabel key={i} title={l} />
        ))}
      </div>
    </div>
  );
};

export default Board;
