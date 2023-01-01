interface BoardProps {}

const SQUARE_SIZE = 42;
const SQUARES = Array.from({ length: 64 });
const FILE_LABELES = "ABCDEFGH".split("");
const RANK_LABELES = "87654321".split("");
const RANK_LABEL_WIDTH = 20;

function determineBorderRadius(i: number) {
  if (i === 0) return "rounded-tl-md";
  if (i === 7) return "rounded-tr-md";
  if (i === 56) return "rounded-bl-md";
  if (i === 63) return "rounded-br-md";
}

const Square = ({ i }: { i: number }) => {
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
      className={`backdrop-blur-lg mix-blend-lighten ${borderRadius}`}
    ></div>
  );
};

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

const Board = ({}: BoardProps) => {
  return (
    <div className="bg-[#97999f77] rounded-md">
      <div className="flex " style={{ paddingLeft: RANK_LABEL_WIDTH }}>
        {FILE_LABELES.map((l, i) => (
          <FileLabel key={i} title={l} />
        ))}
      </div>

      <div
        className="flex flex-wrap rounded-md overflow-hidden "
        style={{ width: SQUARE_SIZE * 8 + RANK_LABEL_WIDTH * 2 }}
      >
        {SQUARES.map((_, i) => {
          const startOfRow = i % 8 === 0;
          const endOfRow = i % 8 === 7;
          const rowNum = Math.floor(i / 8);

          return (
            <div key={i} className="flex">
              {startOfRow && <RankLabel title={RANK_LABELES[rowNum]} />}

              <Square i={i} />

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
