import { useState } from "react";

export default function PasswordValidator() {
  const [password, setPassword] = useState("");

  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const passedCount = Object.values(validations).filter(Boolean).length;

  const borderColor =
    passedCount <= 1 ? "red" : passedCount <= 3 ? "orange" : "green";

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        style={{
          width: "100%",
          padding: "10px",
          border: `2px solid ${borderColor}`,
          outline: "none",
          borderRadius: "6px",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0, marginTop: 10 }}>
        <li>{validations.length ? "✓" : "✗"} Min 8 characters</li>
        <li>{validations.uppercase ? "✓" : "✗"} One uppercase letter</li>
        <li>{validations.number ? "✓" : "✗"} One number</li>
        <li>{validations.special ? "✓" : "✗"} One special character</li>
      </ul>
    </div>
  );
}
