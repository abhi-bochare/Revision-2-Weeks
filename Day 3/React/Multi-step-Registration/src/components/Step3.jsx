export default function Step3({ formData, setFormData, next, back }) {
  return (
    <>
      <h3>Preferences</h3>

      <select
        value={formData.theme}
        onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
      >
        <option value="">Select Theme</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={formData.notifications}
          onChange={(e) =>
            setFormData({
              ...formData,
              notifications: e.target.checked,
            })
          }
        />
        Enable Notifications
      </label>

      <button onClick={back}>Back</button>
      <button onClick={next}>Review</button>
    </>
  );
}
