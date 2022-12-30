import Tile, { TileType, TILE_SIZE } from "./Tile";

const GAP = 8;

const TILES: TileType[] = [
  {},
  {},
  {},
  {},
  {},
  {},
  { title: "Play", href: "/play" },
  {},
  { title: "Sign In", href: "/signin" },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  { title: "Sign Up", href: "/signup" },
  {},
  { title: "Learn", href: "/learn" },
  {},
  {},
  {},
  {},
  {},
  {},
];

export const NUM_TILES = TILES.length;

const Comb = () => {
  return (
    <div className="w-screen h-full  flex justify-center items-center overflow-hidden">
      <div
        style={{
          width: Math.sqrt(TILES.length) * (TILE_SIZE + GAP) + GAP,
          gap: GAP,
          padding: GAP,
        }}
        className="flex items-center justify-center flex-wrap rotate-45 bg-black/10 backdrop-blur-lg rounded-md"
      >
        {TILES.map((tile, i) => {
          return <Tile key={i} {...tile} />;
        })}
      </div>
    </div>
  );
};
export default Comb;
