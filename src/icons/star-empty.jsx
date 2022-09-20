import React from 'react';

function StarEmpty(props) {
	const title = props.title || "star empty";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M31.8 8.6h.2l.2.1.1-.3 2.6-1.3-1.4-2.6c-.3-.6-.9-.9-1.6-.9-.7 0-1.3.4-1.6.9l-1.4 2.6 2.6 1.3.3.2z" fill={props.fill || "#0000"}/>
		<path d="M37.061 11.19l-3.131 1.564 3.083 6.173 3.131-1.564-3.083-6.173z" fill={props.fill || "#0000"}/>
		<path d="M41.2 19.3L38.1 21l1.4 2.6c.3.5.8.9 1.3.9l3 .4.5-3.5-2.1-.4-1-1.7z" fill={props.fill || "#0000"}/>
		<path d="M48.86 22.189l-.49 3.465 7.031.992.489-3.466-7.03-.991z" fill={props.fill || "#0000"}/>
		<path d="M62.7 25.2c-.2-.7-.7-1.2-1.4-1.2l-3-.5-.4 2.8-.2.2.2.2v.3l.4.1 1.9 2 2.2-2c.3-.6.5-1.3.3-1.9z" fill={props.fill || "#0000"}/>
		<path d="M54.238 29.632l-5.02 4.733 2.4 2.546 5.02-4.732-2.4-2.547z" fill={props.fill || "#0000"}/>
		<path d="M48.4 40l1.5-1.5-2.4-2.5-2.2 2c-.4.4-.6 1-.5 1.5l.5 2.9 3.5-.6-.4-1.8z" fill={props.fill || "#0000"}/>
		<path d="M49.544 46.444l-3.443.627 1.236 6.788 3.443-.627-1.236-6.788z" fill={props.fill || "#0000"}/>
		<path d="M51.1 55.5l-2.7.5-.4-.2-.2.2h-.2v.2l-1.3 2.5 2.7 1.4c.3.1.5.2.8.2.4 0 .7-.1 1-.3.5-.4.8-1.1.7-1.7l-.4-2.8z" fill={props.fill || "#0000"}/>
		<path d="M37.658 50.408l-1.593 3.117 6.234 3.184 1.592-3.116-6.233-3.185z" fill={props.fill || "#0000"}/>
		<path d="M31.2 48l-2.7 1.4 1.6 3.1 1.9-1 1.9 1 1.6-3.1-2.7-1.4c-.5-.2-1.1-.2-1.6 0z" fill={props.fill || "#0000"}/>
		<path d="M24.345 51.5l-6.247 3.158 1.58 3.123 6.246-3.158-1.579-3.123z" fill={props.fill || "#0000"}/>
		<path d="M16.3 56h-.2l-.1-.2-.4.2-2.7-.4-.5 2.9c-.1.7.2 1.3.7 1.7.3.2.7.3 1 .3.3 0 .6-.1.8-.2l2.7-1.4-1.3-2.5V56z" fill={props.fill || "#0000"}/>
		<path d="M14.829 44.242l-1.153 6.702 3.449.593 1.153-6.701-3.449-.594z" fill={props.fill || "#0000"}/>
		<path d="M14.1 38.5l1.5 1.5-.4 2 3.4.6.5-2.9c.1-.6-.1-1.2-.5-1.6l-2-2.1-2.5 2.5z" fill={props.fill || "#0000"}/>
		<path d="M8.124 28.015l-2.4 2.546 5.02 4.733 2.401-2.547-5.021-4.732z" fill={props.fill || "#0000"}/>
		<path d="M6.3 27l-.1-.3.2-.2-.2-.2-.4-2.8-3.1.5c-.7 0-1.2.5-1.4 1.2-.2.6 0 1.3.5 1.8l2.3 2 1.8-2h.4z" fill={props.fill || "#0000"}/>
		<path d="M17.411 21.723l-6.93.988.494 3.465 6.93-.988-.494-3.465z" fill={props.fill || "#0000"}/>
		<path d="M21.9 21.3l-2.2.3.4 3.5 3.1-.4c.6-.1 1.1-.4 1.3-.9L26 21l-3.1-1.6-1 1.9z" fill={props.fill || "#0000"}/>
		<path d="M28.013 9.095l-3.138 6.146 3.118 1.592 3.137-6.146-3.117-1.592z" fill={props.fill || "#0000"}/>
	</g>
</svg>
	);
};

export default StarEmpty;