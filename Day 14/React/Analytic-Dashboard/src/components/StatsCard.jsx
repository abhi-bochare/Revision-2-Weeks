export default function StatsCard({ total, trend }) {
  return (
    <div>
      <h3>Total Users</h3>
      <p>{total}</p>
      <p style={{ color: "green" }}>{trend}</p>
    </div>
  );
}
