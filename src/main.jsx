import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";

// Pages
import Home from "./pages/Home/Home.jsx";
import AboutMe from "./pages/about-me/AboutMe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
