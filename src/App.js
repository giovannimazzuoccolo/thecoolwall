import React, { Component, useState } from "react";
import "./App.css";
import Header from "./header/header";
//import DraggableArea from "./draggableArea/draggableArea";
import initialData from "./dataset/initialData";
import Footer from "./footer/footer";
const App = () => {
  const [useData, setData] = useState(initialData);

  return (
    <div className="App">
      <Header />
      {useData.columnList.map(columnId => {
        const column = useData.columns[columnId];
        const cars = useData.cars.map(car => useData.cars[carId])

      })
      }
      <Footer points={useData.points} lives={useData.lives} />
    </div>
  );
};

export default App;
