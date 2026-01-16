import { useEffect, useRef, useState } from "react";

function Countdown() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const handleStart = () => {
    const total = Number(minutes) * 60 + Number(seconds);
    if (total <= 0) return;

    setTimeLeft(total);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setTimeLeft(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          alert("Time's Up!");
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const displayMinutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const displaySeconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div>
      <h2>
        {displayMinutes}:{displaySeconds}
      </h2>

      <div>
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePauseResume} disabled={timeLeft === 0}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Countdown;
