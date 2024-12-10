import Accordion from "app/Components/Course/Accordion";
import CourseLessons from "app/Components/Course/Accordion";
import CourseFeature from "app/Components/Course/features";
import SingleCourseCard from "app/Components/Course/SingleCourseCard";
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
			<div className="p-4 flex flex-col md:flex-row justify-center items-center w-full">
				<SingleCourseCard
					title="sdf"
					oldPrice={course.basic_info.course_original_price}
					newPrice={course.basic_info.course_discounted_price}
					discount={`%${
						(course.basic_info.course_discounted_price /
							course.basic_info.course_original_price) *
						100
					}
				`}
				/>

				<div className="p-2">
					<div className="flex flex-wrap gap-4 justify-center items-center ">
						<CourseFeature
							title={`اللغة ${course.details.specifications.course_language}`}
							image="/assets/images/lang.png"
						/>
						<CourseFeature
							title={`الفئة المستهدفة: ${course.details.specifications.course_level}`}
							image="/assets/images/difficulty.png"
						/>
						<CourseFeature
							title={`${course.details.specifications.course_duration}`}
							image="/assets/images/stopwatch.png"
						/>
						<CourseFeature
							title={`نمط الدورة: ${course.details.specifications.course_type}`}
							image="/assets/images/type.png"
						/>
						<CourseFeature
							title={`بداية الدورة: ${course.details.specifications.course_begin}`}
							image="/assets/images/calendar.png"
						/>
						<CourseFeature
							title={`${course.details.specifications.course_certificate}`}
							image="/assets/images/badge.png"
						/>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-3xl font-bold text-center my-4">
					ماذا ستتعلم في نهاية هذه الدورة؟
				</h2>
				<div className="flex flex-wrap justify-center align-center w-full gap-4">
					{Object.entries(course.details.course_outputs).map(
						(output, index) => (
							<div key={index} className="flex flex-row w-5/12 ">
								<div className="  p-5 flex-1 ">
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
				<h2 className="text-3xl font-bold text-center my-4">
					مسارات الدورة
				</h2>
				<div className="p-4">
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
			</div>
		</>
	);
}
