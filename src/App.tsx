import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCatFact(data.data);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  const handleNewFactClick = () => {
    fetchCatFact();
  };

  return (
    <div className="App">
      <h1 className="App-title">Cat Facts!</h1>
      <div className="App-content">
        <div className="cat-fact">
          {catFact && <p>{catFact}</p>}
          <div className="button-container">
            <button onClick={handleNewFactClick}>Get New Fact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
