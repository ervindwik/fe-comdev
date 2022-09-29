import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import PengaturanProfile from "./Pages/PengaturanProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/pengaturanprofile" element={<PengaturanProfile/>} />
    </Routes>
  );
}

export default App;
