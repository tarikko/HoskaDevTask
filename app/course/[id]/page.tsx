import Accordion from "app/Components/Course/Accordion";
import CourseLessons from "app/Components/Course/Accordion";
import { fetchCourse } from "app/config/apiRoutes";
import { Root, SingleCourse } from "app/config/types/SingeCourseType";
import Image from "next/image";

type Params = {
	params: {
		id: number;
	};
};

export default async function Page({ params }: Params) {
	let data: Root = await fetchCourse(params.id);
	let {
		course,
	}: {
		course: SingleCourse;
	} = data;
	return (
		<>
			<h1>id: {params.id}</h1>
			<div className="flex w-full gap-5">
				<div className="border border-gray-300 p-5 rounded-lg">
					<h2 className="text-xl font-semibold">Course Card</h2>
					<p>Details about the course card...</p>
				</div>
				<div className="p-2 w-full">
					<h2 className="text-xl font-semibold text-right">
						{course.basic_info.name}
					</h2>
					<p className="text-right">
						{course.basic_info.description}
					</p>
				</div>
			</div>
			<div className="p-2">
				<div className="flex flex-wrap gap-4 justify-end items-center ">
					<div className="border border-gray-300 p-5 rounded-lg w-1/3">
						<h3 className="text-lg font-semibold">
							{course.details.specifications.course_language}
						</h3>
					</div>
					<div className="border border-gray-300 p-5 rounded-lg w-1/3">
						<h3 className="text-lg font-semibold">
							{course.details.specifications.course_level}
						</h3>
					</div>
					<div className="border border-gray-300 p-5 rounded-lg w-1/3">
						<h3 className="text-lg font-semibold">
							{course.details.specifications.course_duration}
						</h3>
					</div>
					<div className="border border-gray-300 p-5 rounded-lg w-1/3">
						<h3 className="text-lg font-semibold">
							{course.details.specifications.course_type}
						</h3>
					</div>
					<div className="border border-gray-300 p-5 rounded-lg w-1/3">
						<h3 className="text-lg font-semibold">
							{course.details.specifications.course_begin}
						</h3>
					</div>
					<div className="border border-gray-300 p-5 rounded-lg w-1/3">
						<h3 className="text-lg font-semibold">
							{course.details.specifications.course_certificate}
						</h3>
					</div>
				</div>
			</div>
			<div>
				<h3>ماذا ستتعلم في نهاية هذه الدورة؟</h3>
				<div className="flex flex-wrap justify-center align-center w-full gap-4">
					{Object.entries(course.details.course_outputs).map(
						(output, index) => (
							<div key={index} className="flex flex-row w-1/3 ">
								<div className="border border-gray-300 p-5 rounded-lg flex-1 ">
									<div className="flex items-center justify-end gap-2 text-right">
										<h4 className="text-lg font-semibold text-right">
											{output[1].title}
										</h4>
										<Image
											src="/assets/images/starbadge.png"
											alt={`Output ${index + 1}`}
											height={50}
											width={50}
											className="w-8 h-8 object-cover"
										/>
									</div>
									<p className="mt-2 text-right">
										{output[1].description}
									</p>
								</div>
							</div>
						)
					)}
				</div>
				<h3>مسارات الدورة</h3>

				<Accordion
					title={"مقدمة في عالم التصميم الجرافيكي"}
					duration={"5"}
					lessons={"7"}
				>
					<Accordion
						duration={"5"}
						lessons={"7"}
						title={"ما هو التصميم الجرافيكي؟"}
					>
						<Accordion
							duration={"5"}
							lessons={"7"}
							title={
								"1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية"
							}
						></Accordion>
						<Accordion
							duration={"5"}
							lessons={"7"}
							title={
								"2.أنواع التصاميم الجرافيكية المختلفة (مطبوعات، رقمية، وغيرها)."
							}
						></Accordion>
						<Accordion
							duration={"5"}
							lessons={"7"}
							title={"3.أدوات وموارد التصميم الأساسية."}
						></Accordion>
					</Accordion>
					<Accordion
						duration={"5"}
						lessons={"7"}
						title={"مبادئ التصميم الأساسية"}
					></Accordion>
				</Accordion>
			</div>
		</>
	);
}
