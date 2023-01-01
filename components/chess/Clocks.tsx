import { animate, useMotionValue, MotionValue } from "framer-motion";

import Clock from "./Clock";
import { PlayerType } from "../../types";
import { useState } from "react";

interface ClocksProps {
  duration: number;
  player1: PlayerType;
  player2: PlayerType;
}

const Clocks = ({ duration, player1, player2 }: ClocksProps) => {
  const [currentPlayer, setCurrentPlayer] = useState<PlayerType>();

  const clock1 = useMotionValue(0);
  const clock2 = useMotionValue(0);

  function play(clock: MotionValue<number>) {
    const remainingAnimationTime = duration * (1 - clock.get());
    animate(clock, 1, { duration: remainingAnimationTime, ease: "linear" });
  }

  function pause(clock: MotionValue<number>) {
    clock.stop();
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Clock
          clock={clock1}
          duration={duration}
          playerId={player1.id}
          onFinish={() => console.log("player", player1.id, " time over")}
          onClick={() => {
            play(clock1);
            pause(clock2);
            setCurrentPlayer(player1);
          }}
        />

        <Clock
          clock={clock2}
          duration={duration}
          playerId={player2.id}
          onFinish={() => console.log("player", player2.id, " time over")}
          onClick={() => {
            play(clock2);
            pause(clock1);
            setCurrentPlayer(player2);
          }}
        />
      </div>
      <p
        className={`border border-white/40  px-2 rounded-md text-sm font-light ${
          !currentPlayer && "invisible"
        }`}
      >
        {currentPlayer?.name} move
      </p>
    </div>
  );
};

export default Clocks;
