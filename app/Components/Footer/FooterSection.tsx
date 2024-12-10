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
		<div className="flex items-end justify-start  flex-col p-3 text-white h-full w-full">
			<p className="pb-2 text-right">{title}</p>
			{line && <Line />}
			<div className="flex-grow w-full">{children}</div>
		</div>
	);
};

export default FooterSection;
