import React from 'react';

function List(props) {
	const title = props.title || "list";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M15.8 13.7H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H15.8c-1 0-1.8.8-1.8 1.8s.9 1.7 1.8 1.7z"/>
		<path d="M61 30.3H15.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M61 50.3H15.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M5.8 9.1C4.2 9.1 3 10.4 3 11.9s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8z"/>
		<path d="M5.8 29.2C4.2 29.2 3 30.5 3 32c0 1.5 1.2 2.8 2.8 2.8s2.8-1.2 2.8-2.8c0-1.5-1.3-2.8-2.8-2.8z"/>
		<path d="M5.8 49.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8z"/>
	</g>
</svg>
	);
};

export default List;