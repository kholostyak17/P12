import React, { useState, useEffect } from "react";

const DecimalCounter =()=>{

    	let myVar2 = 0;

	window.setInterval(() => {
		if (myVar2 == 9) {
			myVar2 = 0;
		} else {
			myVar2++;
		}
		console.log(myVar2);
	}, 1000);

	return <div>{myVar2}</div>;
};

export default DecimalCounter;
