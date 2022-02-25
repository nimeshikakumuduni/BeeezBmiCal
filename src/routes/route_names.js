// import { Switch } from "@mui/material";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BmiPage from "../Pages/BMI Page/bmi_page";
import HomePage from "../Pages/Home Page/home_page";

export default function AppRouter() {
  // return(
  //     <BrowserRouter>
  //         <Switch>
  //         <Route exact path="/"> <HomePage/> </Route>
  //         <Route exact path="/bmi"> <BmiPage/> </Route>
  //         </Switch>
  //     </BrowserRouter>
  // );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="bmi/*" element={<BmiPage />} />
      </Routes>
    </BrowserRouter>
  );
}
