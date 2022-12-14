import React from 'react';

function Files(props) {
	const title = props.title || "files";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M57.5 1.3H34.1c-3.2 0-5.9 2.6-5.9 5.9v9.3H6.5c-3.2 0-5.9 2.6-5.9 5.9v22.3c0 1.2.5 2.3 1.3 3.2l13.6 13.6c.9.9 2 1.3 3.2 1.3H30c3.2 0 5.9-2.6 5.9-5.9V39l7.3 7.3c.9.9 2 1.3 3.2 1.3h11.3c3.2 0 5.9-2.6 5.9-5.9V7.1c-.2-3.2-2.8-5.8-6.1-5.8zm-51 46.3h8.2c.6 0 1 .5 1 1v8.2l-9.2-9.2zm25.8 9.3c0 1.3-1.1 2.4-2.4 2.4H19.3V48.6c0-2.5-2-4.5-4.5-4.5H4.1V22.3c0-1.3 1.1-2.4 2.4-2.4h24.9c.6 0 1 .5 1 1v36zM35.8 34v-1.7h6.5c.6 0 1 .5 1 1v8.2L35.8 34zm24.1 7.7c0 1.3-1.1 2.4-2.4 2.4H46.9V33.4c0-2.5-2-4.5-4.5-4.5h-6.5V21c0-2.4-1.8-4.3-4.1-4.5V7.1c0-1.3 1.1-2.4 2.4-2.4h23.5c1.3 0 2.4 1.1 2.4 2.4v34.6z"/>
	</g>
</svg>
	);
};

export default Files;