const busMockData = [
  {
    name: "Apple Travels",
    type: "AC",
    busNumber: "TN01A5555",
    seatNames: [
      ["L1", "L2", "L3"],
      ["L4", "L5", "L6"],
      ["L7", "L8", "L9"],
      ["L10", "L11", "L12"],
      ["L13", "L14", "L15"]
    ],
    noOfSeatsAvailable: 10,
    bookedSeat: ["L1", "L4", "L7", "L8", "L9"],
    seatsAvailable: [
      "L2",
      "L3",
      "L5",
      "L6",
      "L10",
      "L11",
      "L12",
      "L13",
      "L14",
      "L15"
    ],
    departure_time: "05:00 PM",
    journeyDate: "2020-06-21",
    startPoint: "chennai",
    endPoint: "madurai",
    fare: 600,
    numberOfSeats: 15
  },
  {
    name: "Orange Travels",
    type: "AC",
    busNumber: "TN01B4444",
    seatNames: [
      ["L1", "L2", "L3"],
      ["L4", "L5", "L6"],
      ["L7", "L8", "L9"],
      ["L10", "L11", "L12"],
      ["L13", "L14", "L15"]
    ],
    noOfSeatsAvailable: 9,
    bookedSeat: ["L1", "L2", "L4", "L7", "L8", "L9"],
    seatsAvailable: [
      "L3",
      "L5",
      "L6",
      "L10",
      "L11",
      "L12",
      "L13",
      "L14",
      "L15"
    ],
    departure_time: "06:00 PM",
    journeyDate: "2020-06-21",
    startPoint: "chennai",
    endPoint: "madurai",
    fare: 605,
    numberOfSeats: 15
  },
  {
    name: "KPN Travels",
    type: "AC",
    busNumber: "TN01B4433",
    seatNames: [
      ["L1", "L2", "L3"],
      ["L4", "L5", "L6"],
      ["L7", "L8", "L9"],
      ["L10", "L11", "L12"],
      ["L13", "L14", "L15"]
    ],
    noOfSeatsAvailable: 15,
    bookedSeat: [],
    seatsAvailable: ["L1","L2","L3","L4","L5","L6","L7","L8",
      "L9","L10","L11","L12","L13","L14","L15"
    ],
    departure_time: "06:00 PM",
    journeyDate: "2020-06-21",
    startPoint: "chennai",
    endPoint: "madurai",
    fare: 605,
    numberOfSeats: 15
  },
  {
    name: "SRS Travels",
    type: "AC",
    busNumber: "TN01B7766",
    seatNames: [
      ["L1", "L2", "L3"],
      ["L4", "L5", "L6"],
      ["L7", "L8", "L9"],
      ["L10", "L11", "L12"],
      ["L13", "L14", "L15"]
    ],
    noOfSeatsAvailable: 15,
    bookedSeat: [],
    seatsAvailable: ["L1","L2","L3","L4","L5","L6","L7","L8",
      "L9","L10","L11","L12","L13","L14","L15"
    ],
    departure_time: "06:00 PM",
    journeyDate: "2020-06-21",
    startPoint: "chennai",
    endPoint: "madurai",
    fare: 626,
    numberOfSeats: 15
  },
  {
    name: "Parveen Travels",
    type: "AC",
    busNumber: "TN01B9933",
    seatNames: [
      ["L1", "L2", "L3"],
      ["L4", "L5", "L6"],
      ["L7", "L8", "L9"],
      ["L10", "L11", "L12"],
      ["L13", "L14", "L15"]
    ],
    noOfSeatsAvailable: 15,
    bookedSeat: [],
    seatsAvailable: ["L1","L2","L3","L4","L5","L6","L7","L8",
      "L9","L10","L11","L12","L13","L14","L15"
    ],
    departure_time: "06:00 PM",
    journeyDate: "2020-06-21",
    startPoint: "chennai",
    endPoint: "madurai",
    fare: 605,
    numberOfSeats: 15
  },
  {
    name: "Universal Travels",
    type: "AC",
    busNumber: "TN01B9567",
    seatNames: [
      ["L1", "L2", "L3"],
      ["L4", "L5", "L6"],
      ["L7", "L8", "L9"],
      ["L10", "L11", "L12"],
      ["L13", "L14", "L15"]
    ],
    noOfSeatsAvailable: 15,
    bookedSeat: [],
    seatsAvailable: ["L1","L2","L3","L4","L5","L6","L7","L8",
      "L9","L10","L11","L12","L13","L14","L15"
    ],
    departure_time: "06:00 PM",
    journeyDate: "2020-06-21",
    startPoint: "chennai",
    endPoint: "madurai",
    fare: 605,
    numberOfSeats: 15
  },
  {
    name: "KPN Travels",
    type: "AC",
    busNumber: "TN01B4433",
    seatNames: [
      ["L1", "L2", "L3"],
      ["L4", "L5", "L6"],
      ["L7", "L8", "L9"],
      ["L10", "L11", "L12"],
      ["L13", "L14", "L15"]
    ],
    noOfSeatsAvailable: 15,
    bookedSeat: [],
    seatsAvailable: ["L1","L2","L3","L4","L5","L6","L7","L8",
      "L9","L10","L11","L12","L13","L14","L15"
    ],
    departure_time: "06:00 PM",
    journeyDate: "2020-06-23",
    startPoint: "chennai",
    endPoint: "madurai",
    fare: 605,
    numberOfSeats: 15
  },
  {
    name: "Orange Travels",
    type: "AC",
    busNumber: "TN01B5497",
    seatNames: [
      ["L1", "L2", "L3"],
      ["L4", "L5", "L6"],
      ["L7", "L8", "L9"],
      ["L10", "L11", "L12"],
      ["L13", "L14", "L15"]
    ],
    noOfSeatsAvailable: 15,
    bookedSeat: [],
    seatsAvailable: ["L1","L2","L3","L4","L5","L6","L7","L8",
      "L9","L10","L11","L12","L13","L14","L15"
    ],
    departure_time: "06:00 PM",
    journeyDate: "2020-06-23",
    startPoint: "chennai",
    endPoint: "trichy",
    fare: 523,
    numberOfSeats: 15
  }
];

module.exports = busMockData;
