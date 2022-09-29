import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import PengaturanProfile from "./Pages/PengaturanProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pengaturanprofile" element={<PengaturanProfile/>} />
    </Routes>
  );
}

export default App;
