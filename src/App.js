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
import CourseDetailPreview from "./Pages/CourseDetailPreview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/settingprofile" element={<SettingProfile />} />
      <Route path="/profile/settingpassword" element={<SettingPassword />} />
      <Route path="/course" element={<Course />} />
      <Route
        path="/course/coursedetailpreview"
        element={<CourseDetailPreview />}
      />
      <Route path="/profile/mycourse" element={<MyCourse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regis" element={<Regis />} />
    </Routes>
  );
}

export default App;
