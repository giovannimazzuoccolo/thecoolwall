import React from "react";
import "./App.css";
import Header from "./header/header";
import DraggableArea from "./draggableArea/draggableArea";
import Footer from "./footer/footer";
const App = () => {
  function drawCard() {}

  return (
    <div className="App">
      <Header />
      <DraggableArea />
      <Footer lives={3} points={0} drawCard={drawCard} />
    </div>
  );
};

export default App;
