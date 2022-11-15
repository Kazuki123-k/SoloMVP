import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Healthy.css";

const Healthy = () => {
  const [healthyOption, setHealthyOption] = useState([]);
  const [randomFruit, setRandomFruit] = useState([]);
  const clickedFruit = useRef();
  const [fruitArr, setFruitArr] = useState([]);
  const totalCalories = useRef(0);

  const postRequest = async () => {
    await axios.post(`/chosenFruit`, () => {});
  };

  //parseInt([2].split("k")[0])
  const fruitInfo = healthyOption.map((fruit, index) => {
    return (
      <div
        className="fruit"
        ref={clickedFruit}
        onClick={(e) => {
          result += parseInt(e.target.innerText.split(" ")[2]);
          console.log(result);
        }}
        key={index}
      >
        {fruit.name} : {fruit.nutritions.calories} kcal
      </div>
    );
  });

  const getFruit = async () => {
    console.log("this funciton is running");
    await axios.get("/getFruit").then((response) => {
      return setHealthyOption(response.data);
    });
  };

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
