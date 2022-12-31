import { useState } from "react";
import { AnimationControls } from "motion";

import Clock from "./Clock";
import { PlayerType } from "../../types";

interface ClocksProps {
  duration: number;
  player1: PlayerType;
  player2: PlayerType;
}

const Clocks = ({ duration, player1, player2 }: ClocksProps) => {
  const [animationControlsPlayer1, setAnimationControlsPlayer1] =
    useState<AnimationControls>();
  const [animationControlsPlayer2, setAnimationControlsPlayer2] =
    useState<AnimationControls>();

  function runClockPlayer1() {
    animationControlsPlayer1?.play();
    animationControlsPlayer2?.pause();
  }

  function runClockPlayer2() {
    animationControlsPlayer1?.pause();
    animationControlsPlayer2?.play();
  }

  return (
    <div className="flex gap-3">
      <Clock
        setAnimationControls={setAnimationControlsPlayer1}
        duration={duration}
        playerId={player1.id}
        onFinish={() => console.log("player", player1.id, " time over")}
      />

      <Clock
        setAnimationControls={setAnimationControlsPlayer2}
        duration={duration}
        playerId={player2.id}
        onFinish={() => console.log("player", player2.id, " time over")}
      />
    </div>
  );
};

export default Clocks;
