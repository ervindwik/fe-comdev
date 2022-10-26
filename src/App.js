import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import SettingProfile from "./Pages/SettingProfile";
import SettingPassword from "./Pages/SettingPassword";
import Course from "./Pages/Course";
import MyCourse from "./Pages/MyCourse";
import Login from "./Pages/Login";
import Regis from "./Pages/Regis";
import AddCourse from "./Pages/AddCourse";
import AddModul from "./Pages/AddModul";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/settingprofile" element={<SettingProfile />} />
      <Route path="/profile/settingpassword" element={<SettingPassword />} />
      <Route path="/course" element={<Course />} />
      <Route path="/profile/mycourse" element={<MyCourse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regis" element={<Regis />} />
      <Route path="/profile/mycourse/addcourse" element={<AddCourse />} />
      <Route path="/profile/mycourse/addmodul" element={<AddModul />} />
    </Routes>
  );
}

export default App;
