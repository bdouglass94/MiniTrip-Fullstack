import { useEffect, useState } from "react";

// App is the main React component for the MiniTrip frontend.
function App() {
  // Store the backend health status so the UI can show loading, success, or error.
  const [status, setStatus] = useState<string>("Loading...");

  // Check the backend health endpoint as soon as the component loads.
  useEffect(() => {
    fetch("/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setStatus(data.status))
      .catch((error) => {
        console.error(error);
        setStatus("Error connecting to backend");
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-200 p-8">
      <h1 className="text-4xl font-bold text-blue-600">MiniTrip</h1>

      <p className="mt-3 text-gray-600">My first full-stack application.</p>

      <p className="mt-4 text-sm text-red-700">Backend status: {status}</p>
    </div>
  );
}

export default App;
