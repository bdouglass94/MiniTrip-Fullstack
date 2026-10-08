import { useEffect, useState } from "react";

function App() {

  const [status, setStatus] = useState<string>("Loading...");
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
    <div>
      <h1>MiniTrip</h1>
      <p>My first full-stack application.</p>
      <p>Backend status: {status}</p>
    </div>
  )
}

export default App