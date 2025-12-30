import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Review from "./components/Review";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    theme: "",
    notifications: false,
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div>
      <ProgressBar step={step} />
      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} next={next} />
      )}

      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          next={next}
          back={back}
        />
      )}

      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          next={next}
          back={back}
        />
      )}

      {step === 4 && <Review formData={formData} back={back} />}
    </div>
  );
}

export default App;
