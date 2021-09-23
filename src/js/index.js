//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter.jsx";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

//render your react application
let seg = 0;

setInterval(() => {
	ReactDOM.render(
		<SecondsCounter seg={seg} />,
		document.querySelector("#app")
	);
	seg += 1;
}, 1000);
