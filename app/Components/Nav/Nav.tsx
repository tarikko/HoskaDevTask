import React from "react";

const Nav: React.FC = () => {
	return (
		<nav className="p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="">
					<p>zc</p>
				</div>
				<div className="flex space-x-4">
					<a
						href="#"
						className=" px-3 py-2 rounded-md text-sm font-medium"
					>
						Home
					</a>
					<a
						href="#"
						className=" px-3 py-2 rounded-md text-sm font-medium"
					>
						About
					</a>
					<a
						href="#"
						className=" px-3 py-2 rounded-md text-sm font-medium"
					>
						Contact
					</a>
				</div>
				<div className="flex space-x-4">
					<button className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">
						Login
					</button>
					<button className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
