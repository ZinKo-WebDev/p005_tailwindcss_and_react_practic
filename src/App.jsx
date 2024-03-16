import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import OurRockets from "./OurRockets/OurRockets";
import RocketTestimonial from "./RocketTesti/RocketTestimonial";
import Contant from "./RocketContant/Contant";
import Home from "./Home/Home";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/rockets" element={<OurRockets></OurRockets>}></Route>
            <Route
              path="/testimonial"
              element={<RocketTestimonial></RocketTestimonial>}
            ></Route>
            <Route path="/contant" element={<Contant></Contant>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
