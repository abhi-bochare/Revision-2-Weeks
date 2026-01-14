import { useState, useEffect } from "react";

const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
  notifications: true,
};

export default function Settings() {
  const [theme, setTheme] = useState(DEFAULT_SETTINGS.theme);
  const [language, setLanguage] = useState(DEFAULT_SETTINGS.language);
  const [notifications, setNotifications] = useState(
    DEFAULT_SETTINGS.notifications
  );

  useEffect(() => {
    const saved = localStorage.getItem("settings");

    if (saved) {
      const parsed = JSON.parse(saved);
      setTheme(parsed.theme);
      setLanguage(parsed.language);
      setNotifications(parsed.notifications);
    }
  }, []);

  useEffect(() => {
    const settings = {
      theme,
      language,
      notifications,
    };

    localStorage.setItem("settings", JSON.stringify(settings));
  }, [theme, language, notifications]);

  const resetSettings = () => {
    setTheme(DEFAULT_SETTINGS.theme);
    setLanguage(DEFAULT_SETTINGS.language);
    setNotifications(DEFAULT_SETTINGS.notifications);
    localStorage.removeItem("settings");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>

      <br />
      <br />

      <label>
        Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
        </select>
      </label>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications((prev) => !prev)}
        />
        Enable Notifications
      </label>

      <br />
      <br />

      <button onClick={resetSettings}>Reset to Defaults</button>
    </div>
  );
}
