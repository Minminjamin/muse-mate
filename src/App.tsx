import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./routes/SideBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
