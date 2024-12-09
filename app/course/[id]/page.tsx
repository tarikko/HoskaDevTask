import Accordion from "app/Components/Course/Accordion";
import CourseLessons from "app/Components/Course/Accordion";
import { fetchCourse } from "app/config/apiRoutes";
import { Root, SingleCourse } from "app/config/types/SingeCourseType";

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
			<div className="flex gap-5">
				<div className="border border-gray-300 p-5 rounded-lg">
					<h2 className="text-xl font-semibold">Course Card</h2>
					<p>Details about the course card...</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						{course.basic_info.name}
					</h2>
					<p>{course.basic_info.description}</p>
				</div>
			</div>
			<div>
				<div className="flex flex-wrap gap-4">
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
				<div className="flex flex-wrap w-full gap-4">
					<div className="flex flex-row w-full">
						<div className="border border-gray-300 p-5 rounded-lg flex-1">
							<div className="flex items-center gap-2">
								<img
									src="https://via.placeholder.com/50"
									alt="Test Output 2"
									className="w-8 h-8 object-cover"
								/>
								<h4 className="text-lg font-semibold">
									{course.details.course_outputs[1].title}
								</h4>
							</div>
							<p className="mt-2">
								{course.details.course_outputs[1].description}
							</p>
						</div>
						<div className="border border-gray-300 p-5 rounded-lg flex-1">
							<div className="flex items-center gap-2">
								<img
									src="https://via.placeholder.com/50"
									alt="Test Output 2"
									className="w-8 h-8 object-cover"
								/>
								<h4 className="text-lg font-semibold">
									{course.details.course_outputs[2].title}
								</h4>
							</div>
							<p className="mt-2">
								{course.details.course_outputs[2].description}
							</p>
						</div>
					</div>
					<div className="flex flex-row w-full">
						<div className="border border-gray-300 p-5 rounded-lg flex-1">
							<div className="flex items-center gap-2">
								<img
									src="https://via.placeholder.com/50"
									alt="Test Output 2"
									className="w-8 h-8 object-cover"
								/>
								<h4 className="text-lg font-semibold">
									{course.details.course_outputs[3].title}
								</h4>
							</div>
							<p className="mt-2">
								{course.details.course_outputs[3].description}
							</p>
						</div>
						<div className="border border-gray-300 p-5 rounded-lg flex-1">
							<div className="flex items-center gap-2">
								<img
									src="https://via.placeholder.com/50"
									alt="Test Output 2"
									className="w-8 h-8 object-cover"
								/>
								<h4 className="text-lg font-semibold">
									{course.details.course_outputs[4].title}
								</h4>
							</div>
							<p className="mt-2">
								{course.details.course_outputs[4].description}
							</p>
						</div>
					</div>
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
