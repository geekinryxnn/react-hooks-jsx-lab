import React from "react";

const name = "Liza"; // Replace with your actual name
const city = "New York city"; // Replace with your actual city

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
