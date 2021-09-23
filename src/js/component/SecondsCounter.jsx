import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = props => {
	const { seg } = props;
	return (
		<div className="contenedor">
			<i className="far fa-clock icono"></i>
			{String(seg)
				.padStart(6, "0")
				.split("")
				.map((number, index) => (
					<div className="box" key={index}>
						{number}
					</div>
				))}
		</div>
	);
};
SecondsCounter.propTypes = {
	seg: PropTypes.func
};
export default SecondsCounter;
