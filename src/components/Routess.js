import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
// import EducationDept from "./Departments/EducationDept";
// import SocialDept from "./Departments/SocialDept";
// import CivicDept from "./Departments/CivicDept";
import NotFound from "./common/NotFound";
import JoinUs from './misc/JoinUs.js'
import TempDept from "./Departments/TempDept.js"



export default function Routess() {
  return (
    <> 
      <Router>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/pcwt' element={<HomePage/>} />
            <Route path='/dept/education' element={<TempDept dept={{name:"education",dept_id : 1}}/>} />
            {/* <Route path='/dept/education' element={<EducationDept />} /> */}
            <Route path='/dept/social' element={<TempDept dept={{name:"social",dept_id : 4}}/>} />
            <Route path='/dept/civic' element={<TempDept dept={{name:"civic",dept_id : 3}}/>} />
            <Route path='/dept/health' element={<TempDept dept={{name:"health",dept_id : 2}}/>} />
            <Route path='/joinus' element={<JoinUs/>} />
            <Route path="*" element={<NotFound/>}/>

        </Routes>
      </Router>
    </>
  );
}
