import { Dispatch, SetStateAction, useEffect } from "react";
import { animate, AnimationControls } from "motion";

interface ClockProps {
  duration: number;
  playerId: string;
  setAnimationControls: Dispatch<SetStateAction<AnimationControls | undefined>>;
  onFinish: () => void;
}

const Clock = ({
  playerId,
  onFinish,
  setAnimationControls,
  duration,
}: ClockProps) => {
  useEffect(() => {
    const min = document.getElementById("min" + playerId);
    const sec = document.getElementById("sec" + playerId);

    const animation = animate(
      (progress) => {
        const secondsRemaining = (1 - progress) * duration;

        const secondsCountdown = Math.floor(secondsRemaining % 60);

        const minutesCountdown = Math.floor(secondsRemaining / 60);

        const minutesCountdownLeadingZero = ("0" + minutesCountdown).slice(-2);
        const secondsCountdownLeadingZero = ("0" + secondsCountdown).slice(-2);

        sec!.innerHTML = secondsCountdownLeadingZero;
        min!.innerHTML = minutesCountdownLeadingZero;
      },
      { duration, easing: "linear" }
    );

    animation.pause();

    setAnimationControls(animation);

    animation.finished.then(onFinish);
  }, []);

  return (
    <div className="w-20 h-20 rounded-full flex items-center justify-center border-8 border-[var(--accent)]">
      <div className="flex">
        <p id={"min" + playerId}></p>
        <p>:</p>
        <p id={"sec" + playerId}></p>
      </div>
    </div>
  );
};

export default Clock;
