import React from "react";

import "./button.styles.css";

export const Button = ({ text, handler }) => {
	return (
		<button className='button' onClick={handler}>
			{text}
		</button>
	);
};
