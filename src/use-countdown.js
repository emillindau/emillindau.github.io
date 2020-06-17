import { useEffect, useState } from "react";

export function useCountdown(timestamp) {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const start = new Date(timestamp);
      const difference = start - now;

      if (difference > 0) {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / 1000 / 60) % 60);
        let seconds = Math.floor((difference / 1000) % 60);

        if (days < 10) {
          days = `0${days}`;
        }
        if (hours < 10) {
          hours = `0${hours}`;
        }
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
        return days !== "00"
          ? `${days} d ${hours} h ${minutes} m ${seconds} s`
          : `${hours}:${minutes}:${seconds}`;
      }
      return "DONE";
    };

    const handle = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      if (timeLeft === "DONE") {
        clearInterval(handle);
      }

      setTimeLeft(timeLeft);
    }, 1000);

    return () => clearInterval(handle);
  }, [timestamp]);

  return { timeLeft };
}
