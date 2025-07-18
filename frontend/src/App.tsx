import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/Huskies/search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/huskies/search" element={<SearchPage />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center h-screen">
              <p className="text-xl text-center">Home page (placeholder)</p>
              <Link
                to="/huskies/search"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Go to Huskies Search
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
