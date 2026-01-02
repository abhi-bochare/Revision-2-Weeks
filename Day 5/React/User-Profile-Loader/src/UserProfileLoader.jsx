import { useEffect, useState } from "react";

function UserProfileLoader() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await res.json();

        if (isMounted) {
          setUser(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [retryCount]);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>User Profile</h2>

      {loading && <p>Loading...</p>}

      {error && (
        <>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={handleRetry}>Retry</button>
        </>
      )}

      {user && !loading && !error && (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserProfileLoader;
