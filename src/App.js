import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample from "./components/sample/Sample";
import Homepage from "./components/Home/Homepage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sample" element={<Sample />}></Route>\<Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
