import { useEffect, useState } from "react";
import StatsCard from "./components/StatsCard";
import RegistrationsChart from "./components/RegistrationsChart";
import RecentUsers from "./components/RecentUsers";
import ActiveUsersPie from "./components/ActiveUsersPie";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [lastUpdated, setLastUpdated] = useState(null);

  async function fetchDashboardData() {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 500));

    const mockData = {
      totalUsers: 1250,
      trend: "+12%",
      registrations: [
        { date: "Mon", count: 20 },
        { date: "Tue", count: 35 },
        { date: "Wed", count: 28 },
        { date: "Thu", count: 42 },
        { date: "Fri", count: 50 },
        { date: "Sat", count: 38 },
        { date: "Sun", count: 22 },
      ],
      recentUsers: [
        { id: 1, name: "John", email: "john@mail.com", status: "active" },
        { id: 2, name: "Sara", email: "sara@mail.com", status: "inactive" },
        { id: 3, name: "Mike", email: "mike@mail.com", status: "active" },
        { id: 4, name: "Emma", email: "emma@mail.com", status: "active" },
        { id: 5, name: "Alex", email: "alex@mail.com", status: "inactive" },
      ],
      activeUsers: 980,
      inactiveUsers: 270,
    };

    setData(mockData);
    setLastUpdated(new Date().toLocaleTimeString());
    setLoading(false);
  }

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      fetchDashboardData();
      setSecondsLeft(30);
    }, 30000);

    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  if (loading || !data) return <p>Loading dashboard...</p>;

  return (
    <div>
      <h2>Analytics Dashboard</h2>

      <p>
        Auto refresh in: <strong>{secondsLeft}s</strong> | Last updated:{" "}
        <strong>{lastUpdated}</strong>
      </p>

      <button onClick={fetchDashboardData}>Refresh Now</button>

      <StatsCard total={data.totalUsers} trend={data.trend} />

      <RegistrationsChart data={data.registrations} />

      <ActiveUsersPie active={data.activeUsers} inactive={data.inactiveUsers} />

      <RecentUsers users={data.recentUsers} />
    </div>
  );
}
