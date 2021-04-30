import React from "react";
import SecondsCounter from "./secondscounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="d-flex justify-content-center">
			<SecondsCounter time={1000} />
			<SecondsCounter time={100} />
			<SecondsCounter time={10} />
			<SecondsCounter time={1} />
		</div>
	);
}
