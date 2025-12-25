import { useState } from "react";

export default function Form() {
  const [questions, setQuestions] = useState([
    { id: Date.now(), text: "", type: "text" },
  ]);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      { id: Date.now(), text: "", type: "text" },
    ]);
  };

  const removeQuestion = (id) => {
    setQuestions((prev) => prev.filter((question) => question.id !== id));
  };

  const updateQuestion = (id, field, value) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Survey Form</h2>

      {questions.map((q, index) => (
        <div key={q.id} style={{ marginBottom: 10 }}>
          <input
            type="text"
            placeholder={`Question ${index + 1}`}
            value={q.text}
            onChange={(e) => updateQuestion(q.id, "text", e.target.value)}
          />

          <select
            value={q.type}
            onChange={(e) => updateQuestion(q.id, "type", e.target.value)}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
          </select>

          <button onClick={() => removeQuestion(q.id)}>Delete</button>
        </div>
      ))}

      <button onClick={addQuestion}>Add Question</button>

      <hr />

      <h3>Live Preview</h3>
      {questions.map((q, index) => (
        <p key={q.id}>
          {index + 1}. {q.text || "Untitled"} ({q.type})
        </p>
      ))}
    </div>
  );
}
