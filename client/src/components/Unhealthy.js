import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Unhealthy.css";

const Unhealthy = () => {
  const [paramFood, setParamFood] = useState("");
  const [unhealthyOption, setUnhealthyOption] = useState("");

  const inputBox = useRef();
  const fetchUnhealthyFood = async () => {
    console.log("gettingFood");
    await axios
      .get(`/getFood/${paramFood}`)
      .then((response) => setUnhealthyOption(response.data));
  };

  return (
    <div className="unhealthy-meal">
      <h2>Unhealthy Food Test</h2>
      <input
        type="text"
        placeholder="Search..."
        className="meal-input"
        ref={inputBox}
        value={paramFood}
        onChange={(e) => setParamFood(e.target.value)}
      />
      <button onClick={fetchUnhealthyFood}>See Calories</button>
      <h3>Test Meal Name:{unhealthyOption["meal_name"]}</h3>
      <h3>Test Calories:{unhealthyOption["calorie"]}</h3>
    </div>
  );
};

export default Unhealthy;
