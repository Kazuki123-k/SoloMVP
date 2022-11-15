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

  const fruitInfo = healthyOption.map((fruit, index) => {
    return (
      <div
        className="fruit"
        ref={clickedFruit}
        onClick={(e) => console.log(fruit.name + " was clicked")}
        key={index}
      >
        <h3>
          {fruit.name} : {fruit.nutritions.calories}kcal
        </h3>
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
    <div>
      <button className="health-button" onClick={getFruit}>
        Get Some Healthy Food!
      </button>
      <h2>Healthy Options</h2>
      <div className="healthy-container">{fruitInfo}</div>
    </div>
  );
};

export default Healthy;
