export default function Step2({ formData, setFormData, next, back }) {
  return (
    <>
      <h3>Account Details</h3>

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
}
