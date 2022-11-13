import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Healthy from "./components/Healthy.js";
import Unhealthy from "./components/Unhealthy.js";

function App() {
  const [unhealthyOption, setUnhealthyOption] = useState("");

  return (
    <div className="App">
      <Header />
      <h1>Depoloyment test</h1>
      <Healthy />
      <Unhealthy setUnhealthyOption={setUnhealthyOption} />
      <div>
        <p>Test Meal Name:{unhealthyOption["meal_name"]}</p>
        <p>Test Calroies:{unhealthyOption["calorie"]}</p>
      </div>
    </div>
  );
}

export default App;
