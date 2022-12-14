import React from 'react';

function Bitbucket(props) {
	const title = props.title || "bitbucket";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M21.1 12.1c0 3.3 5.5 4.8 10.9 4.8s10.9-1.5 10.9-4.8S37.4 7.3 32 7.3s-10.9 1.5-10.9 4.8zM32 13.4c-3.6 0-6.1-.7-7.1-1.3 1-.6 3.4-1.3 7.1-1.3 3.6 0 6.1.7 7.1 1.3-1 .6-3.5 1.3-7.1 1.3z"/>
		<path d="M32 22.4c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2c3.4 0 6.2-2.8 6.2-6.2s-2.8-6.2-6.2-6.2zm0 8.9c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7z"/>
		<path d="M52.3 3.7C47.1 1.4 38.2.3 32 .3c-6.2 0-15.1 1.2-20.3 3.5-.9.4-1.5 1.4-1.4 2.4L13 34c.1.8.6 1.5 1.2 1.8C16 36.7 25 41 32 41c7.4 0 14.2-2 18.2-5.4.5-.4.7-.9.8-1.5l2.7-27.9c.1-1.1-.4-2.1-1.4-2.5zm-4.7 29.5c-3.4 2.7-9.3 4.3-15.6 4.3-5.6 0-13.3-3.4-15.6-4.6L13.9 6.6C18.2 5 25.8 3.8 32 3.8c6.2 0 13.8 1.2 18.1 2.9l-2.5 26.5z"/>
		<path d="M48.9 41.3c-.7-.5-1.5-.6-2.3-.2l-.2.1c-2.8 1.2-8.7 3.8-14.4 3.7-6.3-.1-12.2-2.7-14.7-3.8-.7-.3-1.6-.2-2.3.2-.7.5-1 1.3-.9 2.1l1.7 15.1c.1.9.6 1.7 1.4 2.1 4 2 9.3 3.1 14.7 3.1s10.7-1.1 14.7-3.1c.8-.4 1.3-1.2 1.4-2l1.7-15.1c.3-.9-.1-1.7-.8-2.2zm-4.2 16.4c-3.5 1.7-8 2.6-12.7 2.6-4.7 0-9.2-.9-12.7-2.6l-1.5-12.6c3.2 1.3 8.4 3.2 14.1 3.3 5.5.1 10.8-1.8 14.2-3.3l-1.4 12.6z"/>
	</g>
</svg>
	);
};

export default Bitbucket;