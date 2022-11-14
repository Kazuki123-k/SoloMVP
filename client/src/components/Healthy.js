import { useState, useEffect } from "react";
import axios from "axios";
import "../components/";

const Healthy = (props) => {
  const { setHealthyOption } = props;
  const [foodName, setFoodName] = useState([]);

  const getFruit = async () => {
    console.log("this funciton is running");
    await axios.get("/getFruit").then((response) => {
      return setHealthyOption(response.data);
    });
  };

  return (
    <div className="container">
      <button onClick={getFruit}>Get Some Healthy Food!</button>
    </div>
  );
};

export default Healthy;
