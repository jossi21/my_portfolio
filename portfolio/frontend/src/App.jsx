import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Landing from "./components/Landing/Landing";
import DetailAbout from "./assets/pages/About/DetailAbout";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-details" element={<DetailAbout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
