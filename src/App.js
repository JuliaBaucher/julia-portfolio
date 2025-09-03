import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";   // 👈 removed BrowserRouter
import Portfolio from "./components/Portfolio";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
