import React from "react";
import "./App.css";
import { OperatPlanning } from "./components/OperatPlanning/OperatPlanning";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LongPlanning } from "./components/LongPlanning/LongPlanning";
import { Control } from "./components/Control/Control";
import { Days } from "./components/Control/Days";
import { Hours } from "./components/Control/Hours";
import { Apparatus } from "./components/Control/Apparatus";
import { Authorization } from "./components/account/Authorization";
import { Load } from "./components/account/Load";
import { NoConnection } from "./components/account/NoConnection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/mls1/control" element={<NoConnection />} />
        <Route path="/mls1/OP" element={<OperatPlanning />} />
        <Route path="/mls1/DP" element={<LongPlanning />} />
      </Routes>
      <Routes>
        <Route path="/mls1/control/days" element={<Days />} />
        <Route path="/mls1/control/hours" element={<Hours />} />
      </Routes>
    </Router>
  );
}

export default App;
