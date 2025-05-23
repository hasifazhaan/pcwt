import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import EducationDept from "./Departments/EducationDept";
import SocialDept from "./Departments/SocialDept";
import CivicDept from "./Departments/CivicDept";
import NotFound from "./common/NotFound";
import JoinUs from './misc/JoinUs.js'



export default function Routess() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/pcwt' element={<HomePage/>} />
            <Route path='/dept/education' element={<EducationDept/>} />
            <Route path='/dept/social' element={<SocialDept/>} />
            <Route path='/dept/civic' element={<CivicDept/>} />
            <Route path='/joinus' element={<JoinUs/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}
