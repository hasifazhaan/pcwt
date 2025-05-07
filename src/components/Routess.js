import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import EducationDep from "./Education/EducationDep";
import NotFound from "./common/NotFound";



export default function Routess() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/EducationDept' element={<EducationDep/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}
