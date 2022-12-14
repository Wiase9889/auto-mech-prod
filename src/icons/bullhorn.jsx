import React from 'react';

function Bullhorn(props) {
	const title = props.title || "bullhorn";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M56.9 1.3h-8.7c-3.1 0-5.7 2.5-5.7 5.7L16.7 9.5H7.3C4 9.5 1.4 12 1.4 15.2v17.1c0 2.3 1.4 4.3 3.5 5.2l3.6 20.3c.7 3 3.4 5.1 6.6 5.1 2.1 0 4.1-.9 5.4-2.5 1.1-1.4 1.6-3.2 1.2-4.9l-3-17.1L42.3 43v.3c0 3.2 2.6 5.8 5.8 5.8h8.7c3.2 0 5.8-2.6 5.8-5.8V7c0-3.2-2.6-5.7-5.7-5.7zm-52 13.9C4.9 14 6 13 7.3 13h7.8v21.3H7.3c-1.3 0-2.4-1-2.4-2.1v-17zM17.8 58c-.6.8-1.6 1.2-2.7 1.2-1.5 0-2.9-1-3.2-2.3L8.5 37.8h6.6L18.3 56c.2 1-.2 1.7-.5 2zm.8-23.3V12.9l23.8-2.4v28.9l-23.8-4.7zm40.5 8.4c0 1.2-1 2.3-2.3 2.3h-8.7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h8.7c1.2 0 2.3 1 2.3 2.3v36.1z"/>
	</g>
</svg>
	);
};

export default Bullhorn;