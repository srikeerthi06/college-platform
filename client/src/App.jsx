import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CollegeDetail from "./pages/CollegeDetail";
import Predictor from "./pages/Predictor";

function App() {
  return (
   <HashRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Main App */}
        <Route path="/home" element={<Home />} />

        {/* Detail Page */}
        <Route path="/college/:id" element={<CollegeDetail />} />

        {/* Predictor */}
        <Route path="/predictor" element={<Predictor />} />

      </Routes>
   </HashRouter>
  );
}

export default App;
