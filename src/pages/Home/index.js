import React from "react";
import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section>
      <div className="container">
        <Link
          style={{
            position: "absolute",
            padding: "10px 30px",
            backgroundColor: "red",
            zIndex: "1",
            left: "50%",
            top: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
          }}
          to="/book"
        >
          Go Book List
        </Link>
        <img
          style={{ width: "100%", position: "relative" }}
          src={hero}
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
