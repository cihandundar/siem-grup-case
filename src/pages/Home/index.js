import React from "react";
import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section>
      <div className="container">
        <Link
          style={{
            padding: "10px 30px",
            backgroundColor: "red",
            color: "#fff",
            paddingBottom: "20px",
          }}
          to="/book"
        >
          Go Book List
        </Link>
        <img style={{ width: "100%", marginTop: "30px" }} src={hero} alt="" />
      </div>
    </section>
  );
};

export default Home;
