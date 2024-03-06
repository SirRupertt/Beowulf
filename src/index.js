import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body1 from "./components/Body1"
import Body2 from "./components/Body2"
import Conclusion from "./components/Conclusion"

// BrowserRouter
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Body1" element={<Body1 />} />
        <Route path="/Body2" element={<Body2 />} />
        <Route path="/Conclusion" element={<Conclusion />} />
      </Routes>
    </BrowserRouter>
);
