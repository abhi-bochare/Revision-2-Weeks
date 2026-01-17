export default function ActiveUsersPie({ active, inactive }) {
  const total = active + inactive;
  const activePercent = Math.round((active / total) * 100);
  const inactivePercent = 100 - activePercent;

  return (
    <div>
      <h3>Active vs Inactive Users</h3>
      <p>Active: {activePercent}%</p>
      <p>Inactive: {inactivePercent}%</p>
    </div>
  );
}
