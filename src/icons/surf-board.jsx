import React from 'react';

function SurfBoard(props) {
	const title = props.title || "surf board";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M43.4 1.5c-.6-.3-1.3-.3-1.9 0-3.6 1.8-6.8 4.8-9.5 8.7-2.7-3.9-5.9-6.9-9.5-8.7-.6-.3-1.3-.3-1.9 0-10 5-16.7 18.8-16.7 34.5 0 9.8 2.6 19 7.3 25.9.4.6 1 .9 1.7.9h38.2c.7 0 1.3-.3 1.7-.9 4.7-6.9 7.3-16.1 7.3-25.9 0-15.7-6.7-29.5-16.7-34.5zM21.6 4.9c3.4 1.9 6.5 5.1 8.9 9.4 1 1.7 1.8 3.6 2.5 5.5l-25.1 9c1.5-10.9 6.6-20 13.7-23.9zM7.4 36c0-1.1 0-2.2.1-3.3l26.6-9.5c.8 2.8 1.3 5.7 1.5 8.6l-27.9 10c-.2-1.9-.3-3.9-.3-5.8zm22.1 23.3H13.6c-2.6-4-4.4-8.7-5.4-14l27.5-9.8v.5c0 8-1.9 15.7-5.3 21.7-.2.5-.6 1-.9 1.6zm20.9 0H33.6c3.7-6.5 5.7-14.8 5.7-23.3 0-8.2-1.9-16.1-5.3-22.5 2.3-3.9 5.2-6.8 8.4-8.5C51 9.6 56.6 22 56.6 36c0 8.8-2.2 17-6.2 23.3z"/>
	</g>
</svg>
	);
};

export default SurfBoard;