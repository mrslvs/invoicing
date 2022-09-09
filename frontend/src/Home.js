import { React, useState, useEffect } from "react";
import "./css/Home.css";

const Home = () => {
  const [selection, setSelection] = useState("about");

  return (
    <main>
      <div className="contentBox">
        <button onClick={(e) => setSelection(e.target.value)} value="about">
          About
        </button>
        <button onClick={(e) => setSelection(e.target.value)} value="login">
          Login
        </button>
        <button onClick={(e) => setSelection(e.target.value)} value="register">
          Register
        </button>
      </div>
    </main>
  );
};

export default Home;
