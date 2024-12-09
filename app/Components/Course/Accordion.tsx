"use client";
import { useState } from "react";
import CustomPill from "../Pills/CustomPill";

const Accordion = ({ title, lessons, duration, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="border border-gray-300 rounded-lg mb-2">
			<button
				className="w-full text-right flex justify-around px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
				onClick={toggleAccordion}
			>
				<div>
					<CustomPill text={` ساعة ${duration}`} />
					<CustomPill text={` درس ${lessons}`} />
				</div>
				<h3 className="text-lg font-semibold">{title}</h3>
			</button>
			{isOpen && <div className="px-4 py-2">{children}</div>}
		</div>
	);
};

export default Accordion;
