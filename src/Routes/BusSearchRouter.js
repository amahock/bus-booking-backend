const express = require("express");
const BusModel = require("../Models/Bus");

const BusSearchRouter = express.Router();

BusSearchRouter.post("/", (req, res) => {
  // console.log(req.body);
  const { fromLocation, toLocation, dateOfJourney } = req.body;
  console.log(fromLocation);
  const myQuery = {
    $and: [
      { startPoint: fromLocation },
      { endPoint: toLocation },
      { journeyDate: dateOfJourney }
    ]
  };

  BusModel.find(myQuery)
    .exec()
    .then(searchResult => {
      if (searchResult === null) {
        console.log("Bus not found");
        res.status(403).send({
          message: "No bus for this route"
        });
      } else {
        console.log(searchResult);
        res.status(200).send(searchResult);
      }
    });
});

module.exports = BusSearchRouter;
