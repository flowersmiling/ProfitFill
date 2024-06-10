import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddJobForm from "./components/AddJobForm";
import App from "./App";
import "../tailwind.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add-job" element={<AddJobForm />} />
    </Routes>
  </BrowserRouter>
);
  
  