import React from "react";
import FooterSection from "./FooterSection";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-600 text-white py-4">
			<div className="flex justify-center items-center">
				<FooterSection title="تابعنا" line={true}></FooterSection>
				<FooterSection title="تحقق من شهادتك"> </FooterSection>
				<FooterSection title="روابط" line>
					<ul className="list-none p-0 text-right">
						<li>
							<Link href="#">الدورات</Link>
						</li>
						<li>
							<Link href="#">المقالات</Link>
						</li>
					</ul>
				</FooterSection>
				<FooterSection title="عن هوسكا  التعليمية" line>
					<ul className="list-none p-0 text-right">
						<li>
							<Link href="#">عن المنصة</Link>
						</li>
						<li>
							<Link href="#">سياسة الخصوصية</Link>
						</li>
						<li>
							<Link href="#">قواعد عامة</Link>
						</li>
					</ul>
				</FooterSection>
			</div>
			<div className="container mx-auto text-center">
				<p>
					&copy; {new Date().getFullYear()} Your Company. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
