import { useState } from "react";

export default function UndoRedo() {
  const [history, setHistory] = useState([""]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentText = history[currentIndex];

  function handleChange(e) {
    const newText = e.target.value;

    const updatedHistory = history.slice(0, currentIndex + 1);
    updatedHistory.push(newText);

    setHistory(updatedHistory);
    setCurrentIndex(updatedHistory.length - 1);
  }

  function undo() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function redo() {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  return (
    <div>
      <textarea
        rows="5"
        cols="40"
        value={currentText}
        onChange={handleChange}
      />

      <div>
        <button onClick={undo} disabled={currentIndex === 0}>
          Undo
        </button>

        <button onClick={redo} disabled={currentIndex === history.length - 1}>
          Redo
        </button>
      </div>

      <p>
        History: {currentIndex + 1} / {history.length}
      </p>
    </div>
  );
}
