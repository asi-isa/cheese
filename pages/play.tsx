import { AnimationControls } from "motion";
import { useState } from "react";
import BG from "../components/BG";
import Avatar from "../components/chess/Avatar";
import Clocks from "../components/chess/Clocks";
import Nav from "../components/Nav";
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
  return (
    <BG>
      <div className="flex flex-col  gap-10">
        <Nav />

        <div className="flex flex-col items-center">
          <div className="flex gap-3">
            <Avatar {...player1} />

            <Clocks duration={duration} player1={player1} player2={player2} />

            <Avatar {...player2} />
          </div>
        </div>
      </div>
    </BG>
  );
}
