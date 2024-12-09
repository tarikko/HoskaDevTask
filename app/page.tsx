import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import CourseCard from "./Components/Card/CourseCard";
import { fetchAllCourses } from "./config/apiRoutes";
import { Course } from "./config/types/courseType";
import Line from "./Components/Line/Line";
import Nav from "./Components/Nav/Nav";

export default async function Page() {
	//In the next versions, we can use virtualization
	let data = await fetchAllCourses();
	return (
		<>
			<div className="flex items-center justify-center flex-col">
				<p className="text-center">جميع الدورات</p>
				<Line />
			</div>
			<div className="flex flex-wrap justify-center gap-4 p-2">
				{data.courses.map((course) => (
					<CourseCard
						key={course.id}
						course={course}
						imageUrl={"https://picsum.photos/seed/picsum/1920/1080"}
					/>
				))}
			</div>
		</>
	);
}
