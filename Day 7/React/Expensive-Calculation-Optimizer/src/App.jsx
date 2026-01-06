import { useState } from "react";
import NumberAnalyzer from "./NumberAnalyzer";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Number Analyzer</h2>

      <button onClick={toggle}>App Theme Toggle</button>

      <NumberAnalyzer />
    </div>
  );
}
