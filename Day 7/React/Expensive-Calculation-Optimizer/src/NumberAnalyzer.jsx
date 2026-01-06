import { useMemo, useState, useRef } from "react";

export default function NumberAnalyzer() {
  const [num, setNum] = useState("");
  const [calcCount, setCalcCount] = useState(0);
  const themeRef = useRef("light");

  const analysis = useMemo(() => {
    if (!num) {
      return { prime: false, factors: [], sum: 0 };
    }

    setCalcCount((c) => c + 1);

    let n = parseInt(num);
    let factors = [];

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        factors.push(i);
      }
    }

    let prime = factors.length === 2;

    let sum = 0;
    for (let f of factors) {
      sum += f;
    }

    return { prime, factors, sum };
  }, [num]);

  const toggleTheme = () => {
    themeRef.current = themeRef.current === "light" ? "dark" : "light";
  };

  return (
    <div style={{ padding: "15px" }}>
      <input
        type="number"
        placeholder="Enter number..."
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <p>Is Prime? : {analysis.prime ? "Yes" : "No"}</p>

      <p>Factors:</p>
      <ul>
        {analysis.factors.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <p>Sum of factors : {analysis.sum}</p>

      <button onClick={toggleTheme}>Toggle Theme ({themeRef.current})</button>

      <p>Calculation Count : {calcCount}</p>
    </div>
  );
}
