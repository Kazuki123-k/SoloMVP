import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Healthy from "./components/Healthy.js";
import Unhealthy from "./components/Unhealthy.js";

function App() {
  const [unhealthyOption, setUnhealthyOption] = useState("");
  const [healthyOption, setHealthyOption] = useState([]);
  const [fruitName, setFruitName] = useState("");
  const [calorie, setCalorie] = useState("");

  const fruitInfo = healthyOption.map((fruit) => {
    return (
      <p>
        {fruit.name} : {fruit.nutritions.calories}kcal
      </p>
    );
  });

  return (
    <div className="App">
      <Header />
      <div>
        <h2>Unhealthy Food Test</h2>
        <Unhealthy setUnhealthyOption={setUnhealthyOption} />
        <h2>Test Meal Name:{unhealthyOption["meal_name"]}</h2>
        <h2>Test Calroies:{unhealthyOption["calorie"]}</h2>
      </div>
      <Healthy setHealthyOption={setHealthyOption} />
      <h2>Test fetched healthy option:{fruitInfo}</h2>
    </div>
  );
}

export default App;
