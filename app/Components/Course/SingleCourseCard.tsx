import Image from "next/image";
import React from "react";
import CustomButton from "../Button/CustomButton";

interface SingleCourseCardProps {
	title: string;
	oldPrice: string;
	newPrice: string;
	discount: string;
	imageUrl: string;
}

const SingleCourseCard: React.FC<SingleCourseCardProps> = ({
	title,
	oldPrice,
	newPrice,
	discount,
}) => {
	return (
		<div className="max-w-sm rounded overflow-hidden border border-orange-800">
			<img
				className="w-full"
				src={"https://picsum.photos/seed/picsum/1920/1080"}
				alt={title}
			/>
			<div className="px-6 py-4 flex justify-center ">
				<div className="flex justify-center items-center flex-row">
					<span className="font-bold text-xl mb-2">
						تخفيض {discount}
					</span>
					<Image
						src="/assets/images/discount.png"
						width={50}
						height={50}
					/>
				</div>

				<div className="flex items-center justify-center flex-col w-1/2 space-x-2">
					<span className="text-red-500 font-bold text-left">
						دج {newPrice}
					</span>
					<span className="line-through text-gray-500">
						دج {oldPrice}
					</span>
				</div>
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2 text-center">
					صلاحية الوصول: وصول دائم للدورة
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<CustomButton classes="w-full">سجل الآن</CustomButton>
			</div>
		</div>
	);
};

export default SingleCourseCard;
