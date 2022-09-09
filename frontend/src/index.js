import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/app" element={<App />} />
        {/* <PrivateRoute path="/app" element={<App />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
