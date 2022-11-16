import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Healthy.css";

const Healthy = () => {
  const [healthyOption, setHealthyOption] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [postObject, setPostObject] = useState([]);
  const postObj = useRef([]);

  const postRequest = async () => {
    await axios.post(`/chosenFruit`, () => {});
  };
  const fruitInfo = healthyOption.map((fruit, index) => {
    return (
      <div
        className="fruit"
        onClick={(e) => {
          setTotalCalories(
            totalCalories + parseInt(e.target.innerText.split(" ")[2])
          );
          postObj.current.push({
            fruit_name: fruit.name,
            calories: fruit.nutritions.calories,
          });
          console.log(postObj.current);
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
      <h2>Healthy Options</h2>
      <button className="health-button" onClick={getFruit}>
        Get Some Healthy Food!
      </button>
      <h3>Current Calories: {totalCalories}</h3>
      <div className="healthy-container">{fruitInfo}</div>
    </div>
  );
};

export default Healthy;
