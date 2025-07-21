export enum AvailableFormInputType {
	Text = "text",
	Number = "number",
	Select = "select",
}

export type FormUserInputTypes =
	| AvailableFormInputType.Text
	| AvailableFormInputType.Number;

export interface UserInput {
	id: string;
	type: FormUserInputTypes;
	name: string;
	label: string;
	placeholder: string;
	isRequired: boolean;
}

export interface UserSelectInput {
	id: string;
	type: AvailableFormInputType.Select;
	name: string;
	label: string;
	isRequired: boolean;
	availableOptions: UserSelectInputOption[];
}

export interface UserSelectInputOption {
	id: string;
	value: string;
	placeholder: string;
}

export type FormUserInputField = UserInput | UserSelectInput;
