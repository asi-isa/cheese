import { useEffect, useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface ClockProps {
  clock: MotionValue<number>;
  duration: number;
  playerId: string;
  onFinish: () => void;
  onClick: () => void;
}

const Clock = ({
  clock,
  playerId,
  duration,
  onFinish,
  onClick,
}: ClockProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const pathLength = useTransform(clock, [0, 1], [1, 0]);

  useEffect(() => {
    const min = document.getElementById("min" + playerId);
    const sec = document.getElementById("sec" + playerId);

    const unsubscribeOnChange = clock.on("change", (progress) => {
      const secondsRemaining = (1 - progress) * duration;

      const secondsCountdown = Math.floor(secondsRemaining % 60);

      const minutesCountdown = Math.floor(secondsRemaining / 60);

      const minutesCountdownLeadingZero = ("0" + minutesCountdown).slice(-2);
      const secondsCountdownLeadingZero = ("0" + secondsCountdown).slice(-2);

      sec!.innerHTML = secondsCountdownLeadingZero;
      min!.innerHTML = minutesCountdownLeadingZero;
    });

    const unsubscribeOnComplete = clock.on("animationComplete", onFinish);

    const unsubscribeOnStart = clock.on("animationStart", () => {
      setIsAnimating(true);
    });

    const unsubscribeOnCancel = clock.on("animationCancel", () => {
      setIsAnimating(false);
    });

    return () => {
      unsubscribeOnChange();
      unsubscribeOnComplete();
      unsubscribeOnStart();
      unsubscribeOnCancel();
    };
  }, []);

  return (
    <div
      className={`w-20 h-20 rounded-full flex items-center justify-center ${
        isAnimating ? "opacity-100" : "opacity-60"
      }`}
      onClick={onClick}
    >
      <div className="flex">
        <p id={"min" + playerId}>{("0" + duration / 60).slice(-2)}</p>
        <p>:</p>
        <p id={"sec" + playerId}>00</p>
      </div>

      <motion.svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <motion.circle
          style={{ pathLength, rotate: "-90deg" }}
          cx="45"
          cy="45"
          r="40"
          pathLength="1"
          strokeLinecap="round"
          stroke="white"
          strokeWidth="2"
        />
      </motion.svg>
    </div>
  );
};

export default Clock;
