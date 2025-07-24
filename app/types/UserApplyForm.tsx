export type Gender = "male" | "female";

export type TrainingMethod = "home-body" | "home-setup" | "gym";

export class UserApplyForm {
	firstName: string;
	lastName: string;
	email: string;
	telehpone: string;
	gender: Gender;
	height: number;
	weight: number;
	age: number;
	totalTrainingDaysPerWeek: number;
	totalTrainingHoursPerDay: number;
	trainingMethod: TrainingMethod;

	constructor(
		firstName: string,
		lastName: string,
		email: string,
		telehpone: string,
		gender: Gender,
		height: number,
		weight: number,
		age: number,
		totalTrainingDaysPerWeek: number,
		totalTrainingHoursPerDay: number,
		trainingMethod: TrainingMethod,
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.telehpone = telehpone;
		this.gender = gender;
		this.height = height;
		this.weight = weight;
		this.age = age;
		this.totalTrainingDaysPerWeek = totalTrainingDaysPerWeek;
		this.totalTrainingHoursPerDay = totalTrainingHoursPerDay;
		this.trainingMethod = trainingMethod;
	}
}
