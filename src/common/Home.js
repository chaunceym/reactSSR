import React from "react";

const Home = () => {
  return (
    <div
      style={{
        padding: 10,
        fontSize: 20,
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <div>I am React Component</div>
      <button
        onClick={() => alert("you clicked")}
        style={{ fontSize: 20, padding: 10 }}
      >
        click
      </button>
    </div>
  );
};

export default Home;
