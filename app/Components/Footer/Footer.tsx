import React from "react";
import FooterSection from "./FooterSection";
import Link from "next/link";
import MediaBox from "../Media/MediaBox";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-600 text-white pt-4">
			<div className="flex justify-center items-start flex-wrap sm:flex-nowrap">
				<FooterSection title="تابعنا" line={true}>
					<div className="flex gap-2 flex-wrap  justify-center">
						<MediaBox
							icon="/assets/images/facebook.png"
							link={"#"}
						/>
						<MediaBox
							icon="/assets/images/telegram.png"
							link={"#"}
						/>
						<MediaBox
							icon="/assets/images/instagram.png"
							link={"#"}
						/>
						<MediaBox icon="/assets/images/tiktok.png" link={"#"} />
						<MediaBox icon="/assets/images/phone.png" link={"#"} />
					</div>
				</FooterSection>
				<FooterSection title="تحقق من شهادتك">
					<div className="flex justify-center items-center flex-col gap-4">
						<div className="flex items-center">
							<button className="px-4 py-2 bg-yellow-500 text-white rounded-l-md hover:bg-blue-700">
								تحقق
							</button>
							<input
								type="text"
								placeholder="أدخل رقم الشهادة"
								className="px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none"
							/>
						</div>
						<div className="w-full md:w-auto ">
							<Image
								src="/assets/images/barid.jpg"
								width={100}
								height={100}
								alt="Certificate"
								className="object-contain"
							/>
						</div>
					</div>
				</FooterSection>
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
			<div className=" bg-slate-800 mx-auto text-center flex justify-between items-center p-1 w-full">
				<Image
					src="/assets/images/hoska.png"
					height={64}
					width={226}
					alt="Logo"
				/>
				<p>جميع الحقوق محفوظة في هوسكا التعليمية 2024</p>
			</div>
		</footer>
	);
};

export default Footer;
