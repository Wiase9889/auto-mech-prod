import React from 'react';

function Slice(props) {
	const title = props.title || "slice";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61.9 53L49.5 40.6 17.8 8.9c-3-3-7.8-3-10.8 0l-3.5 3.5c-3 3-3 7.8 0 10.8L35.3 55c.3.3.8.5 1.2.5s.9-.2 1.2-.5l1.9-1.9 4 3.8c.3.3.8.5 1.2.5h15.3c1.1 0 2-.7 2.4-1.7.4-1 .2-2-.6-2.7zM6 14.9l3.5-3.5c.8-.8 1.9-1.2 2.9-1.2 1.1 0 2.1.4 2.9 1.2l2.8 2.8-9.3 9.3L6 20.7c-1.7-1.6-1.7-4.2 0-5.8zm30.5 36.4L11.2 26l3.4-3.4 7.7 7.7c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5L17 20.1l3.5-3.5L45.9 42l-9.4 9.3zm9.1 2.5l-3.4-3.2 6.2-6.2 9.4 9.4H45.6z"/>
	</g>
</svg>
	);
};

export default Slice;