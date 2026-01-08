import { useRef, useState } from "react";

function OTPInput() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClear = () => {
    setOtp(Array(6).fill(""));
    inputRefs.current[0].focus();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: "40px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
            }}
          />
        ))}
      </div>

      <p style={{ marginTop: "10px" }}>
        <strong>OTP:</strong> {otp.join("")}
      </p>

      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default OTPInput;
