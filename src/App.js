import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import SettingProfile from "./Pages/SettingProfile";
import SettingPassword from "./Pages/SettingPassword";
import Course from "./Pages/Course";
import MyCourse from "./Pages/MyCourse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/settingprofile" element={<SettingProfile />} />
      <Route path="/profile/settingpassword" element={<SettingPassword />} />
      <Route path="/course" element={<Course />} />
      <Route path="/profile/mycourse" element={<MyCourse />} />
    </Routes>
  );
}

export default App;
