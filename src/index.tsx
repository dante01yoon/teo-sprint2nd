import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PersonalPage from "./pages/roadmap/PersonalPage";
import RecommendPage from "./pages/roadmap/RecommendPage";
import RoadmapPage from "./pages/roadmap/RoadmapPage";
import Statistics from "./pages/statistics/Statistics";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Statistics />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/roadmap/:id" element={<RoadmapPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
