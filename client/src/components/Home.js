import Header from "./Header.js";
import Healthy from "./Healthy.js";
import Unhealthy from "./Unhealthy.js";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Unhealthy />
      <Healthy />
    </div>
  );
}

export default Home;
