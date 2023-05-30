import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./routes/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
