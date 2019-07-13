const initalData = {
  cars: {
    "car-1": {
      id: "car-1",
      model: "BMW Z3",
      image: "bmw-z3.jpg",
      board: "SERIOUSLY_UNCOOL"
    },

    "car-2": {
      id: "car-2",
      model: "BMW Z4",
      image: "bmw-z4.jpg",
      board: "COOL"
    },

    "car-3": {
      id: "car-3",
      model: "Fiat Multipla",
      image: "fiat-multipla.jpg",
      board: "COOL"
    }
  },
  columns: {
    "SERIOUSLY_UNCOOL": {
        id: "SERIOUSLY_UNCOOL",
        title: "SERIOUSLY UNCOOL",
        carIds: []
    },
    "UNCOOL": {
        id: "UNCOOL",
        title: "UNCOOL",
        carIds: []
    }, 
    "COOL": {
        id: "COOL",
        title: "UNCOOL",
        carIds: []
    },
    "SUBZERO": {
        id: "SUBZERO",
        title: "SUBZERO",
        carIds: []
    },
    "STARTER" : {
        id: "STARTER",
        title: "STARTER",
        carIds: ["car-1"]
    }
  },
  columnList: ["STARTER","SERIOUSLY_UNCOOL","UNCOOL","COOL","SUBZERO"],
  points: 0,
  lives: 3
};

export default initalData;