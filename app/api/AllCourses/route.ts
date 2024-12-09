import { NextResponse } from "next/server";
import { fetchAllCourses } from "../../config/apiRoutes";

export async function GET(req) {
	try {
		const response = await fetchAllCourses();
		let res = await response;
		console.log(res.courses);
		return NextResponse.json(res.courses);
	} catch (error) {
		return NextResponse.error();
	}
}
