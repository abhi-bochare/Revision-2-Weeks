const Controls = ({ widgets, toggleWidget }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label>
        <input
          type="checkbox"
          checked={widgets.userStats}
          onChange={() => toggleWidget("userStats")}
        />
        User Stats
      </label>

      <label style={{ marginLeft: "12px" }}>
        <input
          type="checkbox"
          checked={widgets.recentActivity}
          onChange={() => toggleWidget("recentActivity")}
        />
        Recent Activity
      </label>

      <label style={{ marginLeft: "12px" }}>
        <input
          type="checkbox"
          checked={widgets.quickActions}
          onChange={() => toggleWidget("quickActions")}
        />
        Quick Actions
      </label>
    </div>
  );
};

export default Controls;
