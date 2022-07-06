import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import Errors from "./Errors";
import SignIn from "./SignIn";
import SlignUp from "./SlignUp";

const App = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<SlignUp />} />

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Details" element={<Details />} />
        <Route path="*" element={<Errors />} />
      </Routes>
    </>
  );
};

export default App;
