async function fetchWithRetry(url, maxRetries = 3, baseDelay = 500) {
  let attempt = 1;

  while (attempt <= maxRetries) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        throw new Error("Max retry attempts reached. Request failed.");
      }

      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, delay));

      attempt++;
    }
  }
}

(async () => {
  try {
    const data = await fetchWithRetry(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Fetched data:", data);
  } catch (err) {
    console.error("Final error:", err.message);
  }
})();
