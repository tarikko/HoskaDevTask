import Image from "next/image";
import React from "react";

interface CourseFeatureProps {
	title: string;
	image: string;
}

const CourseFeature: React.FC<CourseFeatureProps> = ({ title, image }) => {
	return (
		<div className=" p-5 gap-2 flex flex-row items-center justify-end rounded-lg w-1/3">
			<h3 className="text-lg font-semibold" dir="rtl">
				{title}
			</h3>
			<Image src={image} width={50} height={50} />
		</div>
	);
};

export default CourseFeature;
