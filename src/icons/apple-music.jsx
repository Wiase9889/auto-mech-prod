import React from 'react';

function AppleMusic(props) {
	const title = props.title || "apple music";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M10.7 32.4c0-1.2.5-2.2 1.6-2.8-.6-.9-1.4-1.3-2.6-1.4-.4 0-.9 0-1.6.3-.6.3-1 .4-1.2.4-.1 0-.5-.1-1-.4-.5-.4-.9-.5-1.3-.5-.6 0-1.2.1-1.7.5s-.9.8-1.3 1.3c-.3.6-.6 1.6-.6 2.6 0 .9.1 1.8.4 2.7.3.9.6 1.6 1 2.2.4.5.8 1 1 1.3.4.4.8.6 1.3.6.3 0 .6-.1 1-.3.4-.1.9-.3 1.3-.3s.8.1 1.2.3c.5.3.9.3 1.2.3.4 0 .9-.3 1.3-.5.1-.1.3-.3.4-.5.1-.3.4-.5.5-.8.1-.3.3-.4.4-.6.1-.3.3-.5.4-.8 0-.1.1-.3.1-.4 0-.1.1-.3.1-.4-.4-.1-.6-.4-.9-.6-.7-.4-1-1.2-1-2.2zm10.4 2.7l-3-6.7h-2.3v10.7h1.9v-7h.1l2.5 5.6h1.4l2.5-5.6h.1v7h2.1V28.4H24l-2.9 6.7zM8.9 27c.5-.6.8-1.3.8-2.1v-.2c-.4 0-.8.1-1.2.4-.4.3-.8.5-1 .8-.5.6-.8 1.3-.8 1.9v.2c.8.1 1.5-.3 2.2-1zm40.9 1.4H52v10.7h-2.2V28.4zm9.1 1.7c1.3 0 2.1 1 2.1 2.1h2V32c0-2.1-1.6-3.9-4.3-3.9-2.8 0-4.5 1.8-4.5 5v1.2c0 3.1 1.7 4.9 4.5 4.9 2.7 0 4.3-1.8 4.3-3.8v-.3h-2.2c0 1.2-.6 2.1-2.1 2.1s-2.2-1-2.2-3.1V33c0-1.9.9-2.9 2.4-2.9zm-24 5.1c0 1.4-.9 2.2-2.1 2.2-1.3 0-2.1-.8-2.1-2.2v-6.9h-2.2v7.1c0 2.3 1.7 3.9 4.3 3.9 2.7 0 4.3-1.6 4.3-3.9v-7.1h-2.2v6.9zm9.7-2.3l-1.6-.4c-.9-.3-1.4-.6-1.4-1.3 0-.8.6-1.3 1.8-1.3s1.8.6 1.9 1.4h2.1c0-1.9-1.6-3.2-4-3.2-2.2 0-4 1.2-4 3.2 0 1.8 1.3 2.7 2.7 3l1.6.4c1 .3 1.6.6 1.6 1.3 0 .8-.6 1.4-1.9 1.4-1.3 0-2.1-.6-2.1-1.6h-2.2c0 1.6 1 3.4 4.1 3.4 2.6 0 4.3-1.3 4.3-3.4 0-1.9-1.3-2.5-2.9-2.9z"/>
	</g>
</svg>
	);
};

export default AppleMusic;