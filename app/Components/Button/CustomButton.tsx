"use client";
import React from "react";

interface CustomButtonProps {
	primary?: boolean;
	onPress: () => void;
	children: React.ReactNode;
	classes: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	primary = true,
	onPress,
	classes,
	children,
}) => {
	const buttonClass = primary
		? "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
		: "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded";

	return (
		<button className={`${buttonClass} ${classes}`} onClick={onPress}>
			{children}
		</button>
	);
};

export default CustomButton;
