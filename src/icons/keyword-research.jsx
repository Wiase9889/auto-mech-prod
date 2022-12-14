import React from 'react';

function KeywordResearch(props) {
	const title = props.title || "keyword research";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61.6 52L47.8 38.1c-.9-.9-2.1-1.4-3.4-1.4-1.3 0-2.5.5-3.4 1.4l-.2.2-6.1-6.1c6.2-7.5 5.8-18.6-1.2-25.7-7.4-7.4-19.5-7.4-27 0-7.4 7.4-7.4 19.5 0 27 3.7 3.7 8.6 5.6 13.5 5.6 4.3 0 8.7-1.5 12.2-4.4l6.1 6.1-.2.2c-.9.9-1.4 2.1-1.4 3.4 0 1.3.5 2.5 1.4 3.4L52 61.6c.9.9 2.1 1.4 3.4 1.4 1.3 0 2.5-.5 3.4-1.4l2.9-2.9c.9-.9 1.4-2.1 1.4-3.4-.1-1.2-.6-2.4-1.5-3.3zM9 31C3 25 3 15.1 9 9c3-3 7-4.6 11-4.6S28 6 31 9c6.1 6.1 6.1 15.9 0 22-6 6.1-15.9 6.1-22 0zm50.2 25.2l-2.9 2.9c-.5.5-1.3.5-1.8 0L40.6 45.3c-.2-.2-.4-.6-.4-.9 0-.3.1-.6.4-.9l2.9-2.9c.2-.2.5-.4.9-.4.3 0 .6.1.9.4l13.9 13.9c.2.2.4.6.4.9-.1.3-.2.6-.4.8z"/>
		<path d="M14.8 18h5.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.1c-1 0-1.8.8-1.8 1.8s.9 1.8 1.8 1.8z"/>
		<path d="M25.5 22.3H14.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default KeywordResearch;