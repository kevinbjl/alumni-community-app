import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HuskiesSearchPage from "@/pages/Huskies/search";
import RecruitingSearchPage from "@/pages/Recruiting/search";
import ActivitiesSearchPage from "@/pages/Activities/search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/huskies/search" element={<HuskiesSearchPage />} />
        <Route path="/recruiting/search" element={<RecruitingSearchPage />} />
        <Route path="/activities/search" element={<ActivitiesSearchPage />} />
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
