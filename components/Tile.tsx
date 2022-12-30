import { motion } from "framer-motion";
import { useRouter } from "next/router";

export type TileType = {
  title?: string;
  href?: string;
};

interface TileProps extends TileType {}

export const TILE_SIZE = 64;

const Tile = ({ title, href }: TileProps) => {
  const isEmptyTile = title ? false : true;

  const initialDelay = Math.random();

  const router = useRouter();

  return (
    <div
      className={`group flex items-center justify-center  ${
        !isEmptyTile && "cursor-pointer"
      }`}
      onClick={() => {
        if (href) {
          router.push(href);
        }
      }}
    >
      <div className="absolute rounded-full w-12 aspect-square bg-lime-300  opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity" />

      <motion.div
        initial={{ opacity: 0, rotateY: "180deg" }}
        animate={{ opacity: 1, rotateY: "0deg" }}
        transition={{
          duration: 0.65,
          delay: initialDelay,
        }}
        style={{ width: TILE_SIZE, height: TILE_SIZE }}
        className={` bg-white/10 backdrop-blur-lg rounded-md flex justify-center items-center rotate`}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: initialDelay + 1.42 }}
          className={`-rotate-45 font-light `}
        >
          {title}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Tile;
