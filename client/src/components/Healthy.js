import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Healthy.css";

const Healthy = () => {
  const [healthyOption, setHealthyOption] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const postObj = useRef([]);
  const clickedFruit = useRef([]);

  const postRequest = async () => {
    await axios.post(`/submitFruit`, postObj.current);
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
          clickedFruit.current.push(
            `${fruit.name} :  ${fruit.nutritions.calories}`
          );
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

  const listFruit = clickedFruit.current.map((fruit) => {
    return <h3>{fruit}kcal</h3>;
  });

  return (
    <div>
      <h2 className="health">Healthy Options</h2>
      {!clicked && (
        <button
          className="health-button"
          onClick={(e) => {
            getFruit();
            setClicked(true);
          }}
        >
          Get Some Healthy Food!
        </button>
      )}
      {clicked && (
        <div>
          <h3>
            Current Calories: <div className="green">{totalCalories}</div>
          </h3>
          <button
            onClick={(e) => {
              postRequest();
              setClicked(false);
              setIsToggled(true);
            }}
          >
            Submit
          </button>
          {!isToggled && (
            <div className="outer-grid">
              <div className="healthy-container">{fruitInfo}</div>
            </div>
          )}
        </div>
      )}
      {isToggled && (
        <div>
          <h2>You have chosend these fruits!</h2>
          <h3>Total Calories: {totalCalories}</h3>
          <h3>{listFruit}</h3>
        </div>
      )}
    </div>
  );
};
export default Healthy;
