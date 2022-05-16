//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const fname = "Dheerendra";
const lname = "Panwar";
const d = new Date();
//let year = d.getFullYear();

ReactDOM.render(
  <div>
    <p>created by {`${fname} ${lname}`}</p>
    <p>Copyright {d.getFullYear()}.</p>
  </div>,
  document.getElementById("root")
);
