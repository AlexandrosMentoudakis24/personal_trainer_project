import { UserInput } from "./UserInput";

export interface FormContent {
	id: string;
	firstName: UserInput;
	lastName: UserInput;
	email: UserInput;
	telephone: UserInput;
	age: UserInput;
}
