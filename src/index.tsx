import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonalPage from './pages/roadmap/PersonalPage';
import RecommendPage from './pages/roadmap/RecommendPage';
import RoadmapPage from './pages/roadmap/RoadmapPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/personal" element={<PersonalPage/>}/>
            <Route path="/recommend" element={<RecommendPage/>}/>
            <Route path="/roadmap" element={<RoadmapPage/>}/>
            
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
