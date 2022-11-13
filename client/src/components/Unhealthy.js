import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Unhealthy = (props) => {
  const { setUnhealthyOption } = props;
  const [paramFood, setParamFood] = useState("");

  const inputBox = useRef();
  const fetchUnhealthyFood = async () => {
    console.log("gettingFood");
    await axios
      .get(`/getFood/${paramFood}`)
      .then((response) => setUnhealthyOption(response.data));
  };

  return (
    <div className="unhealthy-meal">
      <input
        type="text"
        placeholder="Search..."
        className="meal-input"
        ref={inputBox}
        value={paramFood}
        onChange={(e) => setParamFood(e.target.value)}
      />
      <button onClick={fetchUnhealthyFood}>See Calories</button>
    </div>
  );
};

export default Unhealthy;
