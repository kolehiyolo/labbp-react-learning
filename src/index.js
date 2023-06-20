// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";

import cars from "./practice.js";

const [tesla, honda] = cars;

const [
  {
    coloursByPopularity: [teslaTopColour],
    speedStats: {
      topSpeed: teslaTopSpeed
    },
  },
  {
    coloursByPopularity: [hondaTopColour],
    speedStats: {
      topSpeed: hondaTopSpeed
    },
  }
 ] = cars;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);