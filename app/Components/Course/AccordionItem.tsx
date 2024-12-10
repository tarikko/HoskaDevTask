import React from 'react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    return (
        <div className=" mb-2">
			<button
				className="w-full text-right flex justify-around px-4 py-2 "
				onClick={toggleAccordion}
			>
				<div className="flex gap-1">
					<CustomPill text={` ساعة ${duration}`} />
					<CustomPill text={` درس ${lessons}`} />
				</div>
				<h3 className="text-lg font-semibold">{title} </h3>
				<svg
					className={`w-6 h-6 transform transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{isOpen && <div className="px-4 py-2">{children}</div>}
		</div>
    );
};

export default AccordionItem;