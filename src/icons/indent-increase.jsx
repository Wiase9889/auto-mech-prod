import React from 'react';

function IndentIncrease(props) {
	const title = props.title || "indent increase";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M7.7 4.8h47.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.7c-1 .1-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M55.1 59.3H7.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h47.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M57.1 29.8L46.7 21c-.8-.6-1.8-.8-2.6-.4-1 .4-1.6 1.4-1.6 2.4V41.1c.1.9.7 1.7 1.6 2.1.3.1.7.2 1 .2.6 0 1.1-.2 1.6-.6L57 33.9c.6-.5 1-1.2 1-2.1.1-.8-.3-1.5-.9-2zm-11.1 9V25l8.1 6.9-8.1 6.9z"/>
		<path d="M7.7 19.2h22.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M7.7 33.8h22.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M7.7 48.3h22.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default IndentIncrease;