export default function Review({ formData, back }) {
  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("Registration Successful!");
  };

  return (
    <>
      <h3>Review Your Details</h3>

      <pre>{JSON.stringify(formData, null, 2)}</pre>

      <button onClick={back}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
