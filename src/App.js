import React from "react";
import PassionCounter from "./components/PassionCounter";
import PhotoCarousel from "./components/PhotoCarousel";
import RomanticTimeline from "./components/RomanticTimeline";
import FinalDeclaration from "./components/FinalDeclaration";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="section">
        <PassionCounter startDate="2025-05-10T13:31:00" />
      </div>
      <div className="section">
        <PhotoCarousel />
      </div>
      <div className="section">
        <h1>❤️ Nossa História ❤️</h1>
        <RomanticTimeline />
      </div>
      <div className="section">
        <FinalDeclaration />
      </div>
    </div>
  );
}

export default App;