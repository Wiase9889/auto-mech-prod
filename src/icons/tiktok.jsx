import React from 'react';

function Tiktok(props) {
	const title = props.title || "tiktok";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M55.619 1H8.381C4.31 1 1 4.311 1 8.381v47.238C1 59.689 4.311 63 8.381 63h47.238C59.689 63 63 59.689 63 55.619V8.381C63 4.31 59.689 1 55.619 1zm-5.896 27.048c-.338.033-.678.05-1.018.052a11.058 11.058 0 0 1-9.255-5.001v17.03a12.588 12.588 0 1 1-12.587-12.587c.263 0 .52.023.778.04v6.203c-.258-.031-.512-.078-.778-.078a6.424 6.424 0 1 0 0 12.848c3.549 0 6.683-2.796 6.683-6.344l.062-28.925h5.934a11.054 11.054 0 0 0 10.187 9.868v6.894" fill={props.fill || "#0000"}/>
	</g>
</svg>
	);
};

export default Tiktok;