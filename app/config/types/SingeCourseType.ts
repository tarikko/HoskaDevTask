export interface Root {
	success: boolean;
	course: SingleCourse;
}

export interface SingleCourse {
	basic_info: BasicInfo;
	details: Details;
}

export interface BasicInfo {
	id: number;
	name: string;
	description: string;
	rating: number;
	number_of_ratings: number;
	course_duration: string;
	course_lessons: number;
	course_level: string;
	course_original_price: number;
	course_discounted_price: number;
}

export interface Details {
	specifications: Specifications;
	course_outputs: CourseOutputs;
}

export interface Specifications {
	course_level: string;
	course_language: string;
	course_type: string;
	course_duration: string;
	course_begin: string;
	course_certificate: string;
}

export interface CourseOutputs {
	"1": N1;
	"2": N2;
	"3": N3;
	"4": N4;
}

export interface N1 {
	title: string;
	description: string;
}

export interface N2 {
	title: string;
	description: string;
}

export interface N3 {
	title: string;
	description: string;
}

export interface N4 {
	title: string;
	description: string;
}
