export default function ProgressBar({ step }) {
  const steps = ["Personal", "Account", "Preferences", "Review"];

  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      {steps.map((label, index) => (
        <div
          key={label}
          style={{
            flex: 1,
            padding: "5px",
            textAlign: "center",
            borderBottom:
              step === index + 1 ? "3px solid green" : "1px solid gray",
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
