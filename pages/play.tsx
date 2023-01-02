import { useState } from "react";
import BG from "../components/BG";
import Avatar from "../components/chess/Avatar";
import Board from "../components/chess/Board";
import Clocks from "../components/chess/Clocks";
import Nav from "../components/Nav";
import { initialBoard } from "../data";
import { PlayerType } from "../types";

const player1: PlayerType = {
  src: "/avatar1.jpg",
  name: "Juli",
  experience: "Queen",
  id: "1",
};
const player2: PlayerType = {
  src: "/avatar2.jpg",
  name: "Amor",
  experience: "Junior",
  id: "2",
};

const duration = 120;

export default function Play() {
  const [board, setBoard] = useState(initialBoard);
  console.log("board", board);

  return (
    <BG>
      <div className="flex flex-col  gap-10">
        <Nav />

        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-8">
            <Avatar {...player1} />

            <Clocks duration={duration} player1={player1} player2={player2} />

            <Avatar {...player2} />
          </div>

          <Board board={board} setBoard={setBoard} />
        </div>
      </div>
    </BG>
  );
}
