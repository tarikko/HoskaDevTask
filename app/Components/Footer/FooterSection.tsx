import React from "react";
import Line from "../Line/Line";

const FooterSection: React.FC = ({
	children,
	line,
	title,
}: {
	children: React.ReactNode;
	line: boolean;
	title: string;
}) => {
	return (
		<div className="flex items-center justify-center flex-col p-3 text-white h-full w-full">
			<p>{title}</p>
			{line && <Line />}
			<div className="flex-grow w-full">{children}</div>
		</div>
	);
};

export default FooterSection;
