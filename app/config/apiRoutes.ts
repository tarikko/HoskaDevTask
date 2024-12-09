// /config/apiRoutes.ts
import apiClient from "./apiClient";

export const fetchAllCourses = async () => {
	const response = await apiClient.get("/api/courses");
	return response.data;
};

export const fetchCourse = async (id: number) => {
	const response = await apiClient.get(`/api/course/${id}`);
	return response.data;
};
