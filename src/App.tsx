import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Registraion from "./Page/Registraion";
import styled from "@emotion/styled";
import BImage from "./Asset/image/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg";
import { url } from "inspector";

const Container = styled.div({
  backgroundImage: `url(${BImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registraion />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
