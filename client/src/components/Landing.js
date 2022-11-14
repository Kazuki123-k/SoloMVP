import { useState, useRef, useEffect } from "react";
import image1 from "../assets/junk_food_cravings.webp";
import { useNavigate, Navigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={image1} />
      <button onClick={() => navigate("/home")}>Let's Start!</button>
    </div>
  );
};

export default Landing;
