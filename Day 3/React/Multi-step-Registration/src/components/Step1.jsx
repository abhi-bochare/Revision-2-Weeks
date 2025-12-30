export default function Step1({ formData, setFormData, next }) {
  return (
    <>
      <h3>Personal Info</h3>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <button onClick={next}>Next</button>
    </>
  );
}
