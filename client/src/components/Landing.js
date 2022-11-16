import "./Landing.css";
import { useNavigate, Navigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="Landing">
      <div className="content">
        <h1 className>Alternatives</h1>
        <h2>
          The average daily calory intake is about 2,500 for male, and 2,000 for
          female
        </h2>
        <h3>You can easily overconsume calories from eating fast food</h3>
        <h4>
          Before you grab that unhealthy meal, see what Alternatives are
          availabe for you :)
        </h4>
        <button className="button" onClick={() => navigate("/home")}>
          Let's Start!
        </button>
      </div>
    </div>
  );
};

export default Landing;
