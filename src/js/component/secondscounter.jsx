import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import ReactDOM from "react-dom";
//import StopClock from "./stopclock.jsx";

const SecondsCounter = props => {
	const [myVar, setMyVar] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			if (myVar != 9) {
				setMyVar(myVar + 1);
			} else {
				setMyVar(0);
			}
		}, 1000 * props.time);
		return () => clearInterval(interval);
	}, [myVar]);

	return <div>{myVar}</div>;
};

export default SecondsCounter;

SecondsCounter.propTypes = {
	time: PropTypes.number
};

/* import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
//import StopClock from "./stopclock.jsx";

const SecondsCounter = () => {
	const [myVar, setMyVar] = useState(0);

	useEffect(
		window.setInterval(() => {
			if (myVar == 9) {
				setMyVar(0);
			} else {
				setMyVar(myVar + 1);
            }
            console.log
        }, 1000),
    []);
	//console.log(myVar);
	return <div>{myVar}</div>;
};

export default SecondsCounter;

/* let second = window.setInterval(() => {
		<StopClock />;
	}, 1000);
	return <div>{second}</div>; */

//ReactDOM.render(<SecondsCounter />, document.querySelector("#myDiv")); */
