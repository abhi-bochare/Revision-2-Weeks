import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
      String(min).padStart(2, "0") +
      ":" +
      String(remainingSeconds).padStart(2, "0")
    );
  };

  useEffect(() => {
    if (!isRunning || isEditing || time === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, isEditing, time]);

  const toggleTimer = () => {
    if (time === 0) {
      return;
    }
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsEditing(false);
    setTime(300);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsRunning(false);
  };

  const handleTimeChange = (e) => {
    const value = Number(e.target.value);
    setTime(value);
  };

  const handleEditDone = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Timer App</h1>
      {!isEditing && <h2 onClick={handleEditClick}>{formatTime(time)}</h2>}

      {isEditing && (
        <input
          type="number"
          value={time}
          onChange={handleTimeChange}
          onBlur={handleEditDone}
        />
      )}

      <div>
        <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      {time === 0 && <p style={{ color: "red" }}>Time's up..!</p>}
    </div>
  );
}
