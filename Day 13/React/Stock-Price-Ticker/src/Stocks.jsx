import { useEffect, useRef, useState } from "react";

const initialStocks = [
  { symbol: "AAPL", price: 178.5, name: "Apple Inc." },
  { symbol: "GOOGL", price: 142.3, name: "Alphabet Inc." },
  { symbol: "MSFT", price: 378.9, name: "Microsoft Corp." },
  { symbol: "AMZN", price: 145.2, name: "Amazon.com Inc." },
  { symbol: "TSLA", price: 242.8, name: "Tesla Inc." },
];

export default function Stocks() {
  const [stocks, setStocks] = useState(
    initialStocks.map((s) => ({ ...s, prevPrice: s.price }))
  );
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const change = +(Math.random() - 0.5).toFixed(2);
          const newPrice = +(stock.price + change).toFixed(2);

          return {
            ...stock,
            prevPrice: stock.price,
            price: newPrice,
          };
        })
      );
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const toggleUpdates = () => {
    if (running && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setRunning((prev) => !prev);
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", fontFamily: "Arial" }}>
      <button onClick={toggleUpdates} style={{ marginBottom: 15 }}>
        {running ? "Stop Updates" : "Start Updates"}
      </button>

      {stocks.map((stock) => {
        const diff = stock.price - stock.prevPrice;
        const percent = ((diff / stock.prevPrice) * 100).toFixed(2);
        const color = diff > 0 ? "green" : diff < 0 ? "red" : "black";

        return (
          <div
            key={stock.symbol}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div>
              <strong>{stock.symbol}</strong>
              <div style={{ fontSize: 12 }}>{stock.name}</div>
            </div>

            <div style={{ color }}>
              ${stock.price.toFixed(2)}{" "}
              <span style={{ fontSize: 12 }}>
                ({diff >= 0 ? "+" : ""}
                {percent}%)
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
