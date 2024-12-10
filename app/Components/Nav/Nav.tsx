import React from "react";
import CustomButton from "../Button/CustomButton";

const Nav: React.FC = () => {
	return (
		<nav className="p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex space-x-4">
					<CustomButton primary={false}>تسجيل</CustomButton>
					<CustomButton>دخول</CustomButton>
				</div>
				<div className="flex space-x-4">
					<a
						href="#"
						className=" px-3 py-2 rounded-md text-sm font-medium"
					>
						المقالات
					</a>
					<a
						href="#"
						className=" px-3 py-2 rounded-md text-sm font-medium"
					>
						الدورات
					</a>
					<a
						href="#"
						className=" px-3 py-2 rounded-md text-sm font-medium"
					>
						الرئيسية
					</a>
				</div>
				<div className="flex items-center space-x-2">
					<img
						src="/assets/images/logo.png"
						alt="Logo"
						className="h-8 w-8"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
