import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import Statistics from "./pages/statistics";
import PersonalPage from "./pages/roadmap/PersonalPage";
import RecommendPage from "./pages/roadmap/RecommendPage";
import RoadmapPage from "./pages/roadmap/RoadmapPage";
import StackPage from "./pages/company/StackPage";
import CompanyIdPage from "./pages/company/CompanyIdPage";
import "antd/dist/antd.css";
import Layout from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route  element={<Layout><Outlet/></Layout>} >
              <Route path="/" element={<Statistics />} />
              <Route path="/personal" element={<PersonalPage />} />
              <Route path="/recommend" element={<RecommendPage />} />
              <Route path="/roadmap/:id" element={<RoadmapPage />} />
              <Route path="/company" element={<StackPage />}>
                <Route path=":id" element={<CompanyIdPage />} />
              </Route>
            </Route>
          </Routes>
        </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
