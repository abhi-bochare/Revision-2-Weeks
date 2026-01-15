import { useEffect, useState } from "react";

export default function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const bannerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "12px",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    transform: isOnline ? "translateY(-100%)" : "translateY(0)",
    transition: "transform 0.4s ease-in-out",
    zIndex: 1000,
  };

  return (
    <div style={bannerStyle}>
      You are offline. Please check your internet connection.
    </div>
  );
}
