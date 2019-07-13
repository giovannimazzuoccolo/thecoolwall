import React, { useState } from "react";
import "./draggableArea.css";
import { BOARDS } from "../enums/boards";
import cars from "../dataset/car.json";
import Car from "../car/car";
import Column from "../column/column";

export default function DraggableArea() {
  const [indexCar, updateIndexCar] = useState(0);

  const objectArray = Object.values(BOARDS);

  return (
    <React.Fragment>
      <div className="draggableArea">
        {objectArray.map((board, index) => (
          <Column
            key={index}
          
          />
        ))}

        <Car model={cars[indexCar].model} image={cars[indexCar].image} />
      </div>
    </React.Fragment>
  );
}
