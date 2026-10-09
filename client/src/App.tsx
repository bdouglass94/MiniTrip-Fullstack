import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Navbar from "./components/Navbar";

function App() {
  // Store the backend health status so React updates the UI when it changes.
  const [status, setStatus] = useState<string>("Loading...");

  // Check backend availability when the application first mounts.
  useEffect(() => {
    fetch("/api/health")
      .then((response) => {
        // fetch() does not reject automatically for HTTP error responses.
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
    // BrowserRouter enables client-side navigation using the browser's URL.
    <BrowserRouter>
      <div className="min-h-screen bg-slate-200 p-8">
        
        {/* Display the navigation shared by all pages. */}
        <Navbar />

        {/* Match the browser URL to the corresponding page component. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>

        {/* Outside Routes so backend status remains visible on every page. */}
        <p
          className={`mt-6 text-sm ${
            status === "ok" ? "text-green-700" : "text-red-700"
          }`}
        >
          Backend status: {status}
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
