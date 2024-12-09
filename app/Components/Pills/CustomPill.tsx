import React from "react";

interface CustomPillProps {
	text: string;
}

const CustomPill: React.FC<CustomPillProps> = ({ text }) => {
	return (
		<span className="inline-block bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
			{text}
		</span>
	);
};

export default CustomPill;
