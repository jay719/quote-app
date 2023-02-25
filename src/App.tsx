import React from "react";
import "./styles/App.css";
import Header from "./helperFunctions/renderComponents/Header";
import MainScreen from "./helperFunctions/renderComponents/MainScreen";

function App() {
  return (
    <div className="home">
      <Header />
      <MainScreen />
    </div>
  );
}

export default App;
