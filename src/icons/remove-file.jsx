import React from 'react';

function RemoveFile(props) {
	const title = props.title || "remove file";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M38.8 22.3H25.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M49.8 1.3H14.2c-2.8 0-5 2.3-5 5v33.9c0 1.4.6 2.7 1.6 3.6l18.7 17.6c.9.9 2.2 1.4 3.5 1.4h17c2.8 0 5-2.3 5-5V6.3c-.2-2.8-2.4-5-5.2-5zM15.2 43.2h13.5c.8 0 1.5.6 1.5 1.4v12.7l-15-14.1zm36.1 14.5c0 .8-.7 1.5-1.5 1.5h-16V44.6c0-2.7-2.3-4.9-5-4.9H12.7V6.3c0-.8.7-1.5 1.5-1.5h35.6c.8 0 1.5.7 1.5 1.5v51.4z"/>
	</g>
</svg>
	);
};

export default RemoveFile;