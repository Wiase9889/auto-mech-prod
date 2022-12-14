import React from 'react';

function PhoneSet(props) {
	const title = props.title || "phone set";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M57.7 36.9c-.2-2.3-2.1-3.9-4.4-3.9H10.7c-2.3 0-4.1 1.7-4.4 3.9l-2.1 21c-.1 1.2.3 2.5 1.1 3.4.8.9 2 1.4 3.3 1.4h46.9c1.2 0 2.4-.5 3.3-1.4.8-.9 1.2-2.1 1.1-3.4l-2.2-21zM56.1 59c-.1.1-.3.3-.7.3H8.6c-.3 0-.6-.2-.7-.3-.1-.1-.3-.3-.2-.7l2.1-21.1c0-.5.4-.8.9-.8h42.7c.5 0 .8.3.9.8l2.1 21.1c-.1.3-.2.6-.3.7z"/>
		<path d="M32 40.8c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 10.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
		<path d="M6.6 19.6c.2 4.4 4.1 6.2 6.1 6.2h7.1c3-.2 6-2.2 6-6.2v-2.4H40v2.4c0 4 3 6 6 6.2h7c2 0 5.9-1.8 6.1-6.2v-2.4-1.6-.2c-.3-2.8-1.3-5.1-3-6.9l-.1-.1c-2.5-2.3-5.5-3.6-7.8-4.4-6.7-2.6-15.1-2.6-15.5-2.6-5.9.1-9.7.6-15.4 2.6-2.2.7-5.2 2-7.7 4.3l-.1.1c-1.7 1.8-2.7 4.1-3 6.9v1.8c.1.9.1 2.1.1 2.5zm5.4-8.8c2-1.8 4.5-2.9 6.6-3.7 5.2-1.9 8.6-2.3 14.3-2.4.4 0 8.2.1 14.2 2.4 2.1.8 4.6 1.8 6.6 3.7 1.1 1.2 1.8 2.8 2 4.7v4c-.1 2.3-2.3 2.8-2.6 2.8h-6.9c-1-.1-2.6-.5-2.6-2.7v-4.1c0-.8-.5-1.4-1.2-1.7-.6-.2-18.1-.2-18.7 0-.7.2-1.2.9-1.2 1.7v4.1c0 2.2-1.6 2.6-2.6 2.7H13c-.3 0-2.5-.5-2.6-2.8v-2.4-1.5c-.2-2 .5-3.6 1.6-4.8z"/>
	</g>
</svg>
	);
};

export default PhoneSet;