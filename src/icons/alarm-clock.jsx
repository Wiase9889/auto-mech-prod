import React from 'react';

function AlarmClock(props) {
	const title = props.title || "alarm clock";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M43.8 35.5h-10V25.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v10.2h-.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.9v.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1h10c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.8-1.7z"/>
		<path d="M59.9 18.6c0-5.3-4.3-9.7-9.7-9.7-2.7 0-5.2 1.1-6.9 3-2.9-1.4-6.2-2.2-9.6-2.5V4.8h3.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H26.7C25.8 1.3 25 2 25 3s.8 1.8 1.8 1.8h3.5v4.7c-3.4.2-6.6 1.1-9.6 2.5-1.8-1.9-4.3-3-6.9-3-5.3 0-9.7 4.3-9.7 9.7 0 2.8 1.2 5.4 3.3 7.2-1.3 3.2-2 6.6-2 10.2 0 14.7 12 26.7 26.7 26.7s26.7-12 26.7-26.7c0-3.6-.7-7.1-2-10.2 1.9-1.9 3.1-4.5 3.1-7.3zm-9.6-6.1c3.4 0 6.2 2.8 6.2 6.2 0 1.5-.5 2.8-1.4 3.9-2.1-3.6-5-6.6-8.4-8.8.9-.9 2.2-1.3 3.6-1.3zM7.6 18.6c0-3.4 2.8-6.2 6.2-6.2 1.4 0 2.7.5 3.7 1.3C14 16 11.1 19 9 22.6c-.9-1.1-1.4-2.5-1.4-4zM32 59.3c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2 12.8 0 23.2 10.4 23.2 23.2 0 12.7-10.4 23.2-23.2 23.2z"/>
	</g>
</svg>
	);
};

export default AlarmClock;