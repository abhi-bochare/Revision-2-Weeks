import { useEffect, useState } from "react";
import Controls from "./Controls";
import UserStats from "./UserStats";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

const Dashboard = () => {
  const [widgets, setWidgets] = useState(() => {
    const saved = localStorage.getItem("dashboard-widgets");
    return saved
      ? JSON.parse(saved)
      : {
          userStats: true,
          recentActivity: true,
          quickActions: true,
        };
  });

  useEffect(() => {
    localStorage.setItem("dashboard-widgets", JSON.stringify(widgets));
  }, [widgets]);

  const toggleWidget = (key) => {
    setWidgets((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const noWidgetsSelected =
    !widgets.userStats && !widgets.recentActivity && !widgets.quickActions;

  if (noWidgetsSelected) {
    return (
      <div>
        <Controls widgets={widgets} toggleWidget={toggleWidget} />
        <p>No widgets selected</p>
      </div>
    );
  }

  return (
    <div>
      <Controls widgets={widgets} toggleWidget={toggleWidget} />

      {widgets.userStats && <UserStats />}

      {widgets.recentActivity ? <RecentActivity /> : null}

      {widgets.quickActions && <QuickActions />}
    </div>
  );
};

export default Dashboard;
