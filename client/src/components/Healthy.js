import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Healthy.css";

const Healthy = () => {
  const [healthyOption, setHealthyOption] = useState([]);
  const [randomFruit, setRandomFruit] = useState([]);
  const clickedFruit = useRef();
  const postRequest = async () => {
    await axios.post(`/chosenFruit`, () => {});
  };

  const fruitInfo = healthyOption.map((fruit) => {
    return (
      <div
        className="fruit"
        ref={clickedFruit}
        onClick={(e) => console.log(fruit.name + " was clicked")}
      >
        {fruit.name} : {fruit.nutritions.calories}kcal
      </div>
    );
  });

  const getFruit = async () => {
    console.log("this funciton is running");
    await axios.get("/getFruit").then((response) => {
      return setHealthyOption(response.data);
    });
  };
  for (let i = 0; i < 10; i++) {}

  return (
    <div className="healthy-container">
      <button className="health-button" onClick={getFruit}>
        Get Some Healthy Food!
      </button>
      <h2>Test fetched healthy option:{fruitInfo}</h2>
    </div>
  );
};

export default Healthy;
