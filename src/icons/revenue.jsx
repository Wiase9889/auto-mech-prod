import React from 'react';

function Revenue(props) {
	const title = props.title || "revenue";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M62.5 45.4c-1-3.2-4.4-5-7.7-4.2l-13.2 3.1v-.2c0-3-2.3-5.5-5.5-6H22.6c-.8-1.6-2.5-2.6-4.4-2.6h-12c-2.7 0-5 2.2-5 5v14.6c0 2.8 2.2 5 5 5H18c1.4 0 2.8-.6 3.8-1.6.3-.3.5-.6.7-.9l.4.2c2.9 1.5 6.1 2.2 9.3 2.2 1.9 0 3.8-.3 5.7-.8l15.7-4.4 4.5-1.3c1.7-.4 3-1.5 3.8-3 .9-1.6 1.1-3.4.6-5.1zM19.3 56.1c-.3.3-.8.5-1.2.5H6.3c-.8 0-1.5-.7-1.5-1.5V40.5c0-.8.7-1.5 1.5-1.5h12c.8 0 1.5.7 1.5 1.5V55c-.1.5-.3.9-.5 1.1zm39.6-7.4c-.4.7-1 1.1-1.7 1.3l-4.5 1.3L37 55.7c-4.2 1.2-8.6.8-12.4-1.2l-1.4-.5V41.7h12.5c1.4.3 2.4 1.3 2.4 2.5v1l-3.9.9c-.9.2-1.5 1.2-1.3 2.1.2.9 1.2 1.5 2.1 1.3l20.6-4.9c1.5-.4 3 .4 3.5 1.9.3.7.2 1.5-.2 2.2z"/>
		<path d="M47.8 20.6h5.3c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5h-7.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.5v.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-.9h.9c3.8 0 7-3.2 7-7s-3.1-7-7-7h-5.3c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h7.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3.5v-.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v.9h-.9c-3.8 0-7 3.2-7 7s3.2 7.1 7 7.1z"/>
	</g>
</svg>
	);
};

export default Revenue;