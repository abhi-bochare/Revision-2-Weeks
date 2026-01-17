export default function RegistrationsChart({ data }) {
  return (
    <div>
      <h3>Registrations (Last 7 Days)</h3>

      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
        {data.map((d, i) => (
          <div key={i}>
            <div
              style={{
                height: d.count,
                width: "20px",
                background: "steelblue",
              }}
            />
            <small>{d.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
