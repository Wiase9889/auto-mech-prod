import React from 'react';

function IndentDecrease(props) {
	const title = props.title || "indent decrease";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M8.9 4.8h47.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H8.9c-1 .1-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M56.3 59.3H8.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h47.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M18.8 43.4c.3 0 .7-.1 1-.2.9-.4 1.5-1.2 1.6-2.1v-18c0-1-.6-2-1.5-2.4-.9-.4-1.9-.3-2.6.4L6.9 29.8c-.6.5-1 1.2-1 2.1 0 .8.4 1.6.9 2l10.4 9c.5.3 1.1.5 1.6.5zM18 25v13.8l-8.1-6.9L18 25z"/>
		<path d="M56.3 15.7H33.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h22.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M56.3 30.3H33.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h22.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M56.3 44.8H33.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h22.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default IndentDecrease;