import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router";

// Pages
import Home from "./pages/Home.jsx";
import ExampleMotion from "./pages/ExampleMotion.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example-motion" element={<ExampleMotion />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
