import { useEffect, useState } from "react";

function AutoSaveNotes() {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("Saved");

  useEffect(() => {
    if (!note) return;

    setStatus("Saving...");

    const timer = setTimeout(() => {
      console.log("Note Saved:", note);
      setStatus("Saved");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [note]);

  return (
    <div style={{ padding: "20px", width: "400px" }}>
      <textarea
        rows="10"
        style={{ width: "100%" }}
        placeholder="Write your notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <p>{status}</p>
    </div>
  );
}

export default AutoSaveNotes;
