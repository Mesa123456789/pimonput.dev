import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Competitions from "./pages/Competitions";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import MyResume from "./pages/MyResume";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="/resume" element={<MyResume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
