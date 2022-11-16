import { useState, useEffect, useRef } from "react";

const List = (props) => {
  const { chosenFruit } = props;

  const listedItem = chosenFruit.map((fruit) => {
    console.log(fruit);
  });

  return <h2>Please Eat these instead of that Bad Food :)</h2>;
};

export default List;
