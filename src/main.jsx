import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router";

// Pages
import Home from "./pages/Home/Home.jsx";
import AboutMe from "./pages/about-me/AboutMe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
