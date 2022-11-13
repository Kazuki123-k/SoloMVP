import { useState, useEffect } from "react";
import axios from "axios";

const Healthy = () => {
  const [foodName, setFoodName] = useState([]);

  //   const getHealthyIngridient = async () => {
  //     return axios.get("https://fruityvice.com/api/fruit/all").then((data) => {
  //       return setFoodName(data);
  //     });
  //   };

  return (
    <div className="container">
      <button>Get Some Healthy Food!</button>
    </div>
  );
};

export default Healthy;
