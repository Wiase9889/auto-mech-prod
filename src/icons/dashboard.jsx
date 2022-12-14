import React from 'react';

function Dashboard(props) {
	const title = props.title || "dashboard";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 14.4c-17 0-30.8 15-30.8 33.4 0 1 .8 1.8 1.8 1.8h58c1 0 1.8-.8 1.8-1.8C62.8 29.4 49 14.4 32 14.4zm3.6 31.7l-2.7-8.6c-.3-.9-1.5-.9-1.8 0l-2.7 8.6H4.8C5.6 30.4 17.5 17.9 32 17.9s26.4 12.5 27.2 28.2H35.6z"/>
		<path d="M32 25.2c-1 0-1.8.8-1.8 1.8v2.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M47.3 32.7l-1.6 1.7c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5l1.6-1.7c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0z"/>
		<path d="M16.7 32.7c-.6-.7-1.8-.8-2.5-.1-.7.6-.8 1.8-.1 2.5l1.5 1.7c.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.4.7-.6.8-1.8.1-2.5l-1.5-1.8z"/>
	</g>
</svg>
	);
};

export default Dashboard;