import React, { useState } from "react";
import "./draggableArea.css";
import { BOARDS } from "../enums/boards";
import cars from "../dataset/car.json";
import Car from "../car/car";
import Column from "../column/column";

export default function DraggableArea() {
  const [indexCar, updateIndexCar] = useState(0);

  const updatingCar = board => {
    console.log(board);
    if (cars[indexCar].board === board) {
      updateIndexCar(indexCar + 1);
    } else {
    }
  };

  const allowDrop = event => {
    event.preventDefault();
  };

  const objectArray = Object.values(BOARDS);

  return (
    <React.Fragment>
      <div className="draggableArea">
        {objectArray.map((board, index) => (
          <Column
            key={index}
            onDrop={() => updatingCar(board)}
            onDragOver={event => allowDrop(event)}
          />
        ))}

        <Car model={cars[indexCar].model} image={cars[indexCar].image} />
      </div>
    </React.Fragment>
  );
}
