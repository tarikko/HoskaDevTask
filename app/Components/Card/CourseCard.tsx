"use client";
import React from "react";
import CustomButton from "../Button/CustomButton";
import { Course } from "app/config/types/courseType";
import Stars from "../Rating/Stars";
import CustomPill from "../Pills/CustomPill";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
interface CourseCardProps {
	name: string;
	description: string;
	imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
	course,
	...props
}: {
	course: Course;
}) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
			<img className="w-full" src={props.imageUrl} alt={course.name} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-right">
					{course.name}
				</div>
				<p className="text-gray-700 text-base text-right">
					{course.description}
				</p>
				<div className="flex justify-center flex-row space-x-4 mt-4">
					<span className="text-gray-600 text-sm text-right">
						(تقييم {course.number_of_ratings})
					</span>
					<Stars rating={course.rating} />
				</div>
				<div className="flex justify-center flex-row space-x-4 mt-4">
					<div>
						<CustomPill text={course.course_level} />
					</div>
					<div className="flex justify-center gap-2">
						<p className="text-right">
							درس {course.course_lessons}
						</p>
						<Image
							src="/assets/images/cards.png"
							width={50}
							height={50}
							alt="Icon"
							className="w-6 h-6"
						/>
					</div>
					<div className="flex justify-center gap-2">
						<p className="text-right">{course.course_duration}</p>
						<Image
							width={50}
							height={50}
							src="/assets/images/clock.png"
							alt="Icon"
							className="w-6 h-6"
						/>
					</div>
				</div>
				<div className="flex justify-center flex-row space-x-4 mt-4">
					<div className="flex items-center">
						<Link href={`/course/${course.id}`}>
							<CustomButton primary={true}>تفاصيل</CustomButton>
						</Link>
					</div>
					<div className="flex items-center justify-center flex-col space-x-2">
						<span className="text-red-500 font-bold ">
							{course.course_discounted_price} دج
						</span>
						<span className="line-through text-gray-500">
							دج {course.course_original_price}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
